import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { contact, chatbotQuickReplies, chatbotQuickRepliesBn, chatbotResponses, chatbotResponsesBn } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

interface Message {
  role: "user" | "bot";
  text: string;
}

const findResponse = (input: string, language: string): string => {
  const lower = input.toLowerCase();
  const responses = language === "bn" ? chatbotResponsesBn : chatbotResponses;
  for (const [key, value] of Object.entries(responses)) {
    if (key !== "default" && lower.includes(key)) return value;
  }
  // Also check English responses as fallback
  if (language === "bn") {
    for (const [key, value] of Object.entries(chatbotResponses)) {
      if (key !== "default" && lower.includes(key)) return value;
    }
  }
  return responses.default;
};

const TypingMessage = ({ text, onComplete, onWord }: { text: string; onComplete: () => void; onWord: () => void }) => {
  const [displayed, setDisplayed] = useState("");
  const words = text.split(" ");

  useEffect(() => {
    let i = 0;
    const tick = () => {
      i++;
      setDisplayed(words.slice(0, i).join(" "));
      onWord();
      if (i >= words.length) { onComplete(); return; }
      const word = words[i - 1];
      const delay = /[.,!?]$/.test(word) ? 120 + Math.random() * 80 : 45 + Math.random() * 40;
      setTimeout(tick, delay);
    };
    const t = setTimeout(tick, 40);
    return () => clearTimeout(t);
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  return <BotBubble text={displayed} />;
};

const BotBubble = ({ text }: { text: string }) => {
  const rendered = text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline text-primary font-medium">$1</a>'
  );
  return (
    <div className="max-w-[82%] px-3 py-2.5 rounded-2xl rounded-bl-sm bg-secondary text-secondary-foreground text-sm leading-relaxed shadow-sm">
      <span dangerouslySetInnerHTML={{ __html: rendered }} />
    </div>
  );
};

const TypingDots = () => (
  <div className="flex justify-start">
    <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-secondary shadow-sm flex items-center gap-1.5">
      {[0, 150, 300].map((delay, i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: `${delay}ms`, animationDuration: "1s" }} />
      ))}
    </div>
  </div>
);

type ActivePanel = null | "menu" | "chatbot" | "whatsapp";

const FloatingButtons = () => {
  const { language, t } = useLanguage();
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingIndex, setTypingIndex] = useState<number | null>(null);
  const [waMessage, setWaMessage] = useState("");
  const [waHistory, setWaHistory] = useState<{ role: "user"; content: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies = language === "bn" ? chatbotQuickRepliesBn : chatbotQuickReplies;

  useEffect(() => {
    if (activePanel === "chatbot" && messages.length === 0) {
      setMessages([{
        role: "bot",
        text: t(
          "Hello! Welcome to ZiptoCode Tech Solution. How can I help you today?",
          "আসসালামু আলাইকুম! ZiptoCode Tech Solution-এ স্বাগতম। আজ আমি কিভাবে সাহায্য করতে পারি?"
        ),
      }]);
    }
  }, [activePanel]); // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToBottom = () =>
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });

  useEffect(() => { scrollToBottom(); }, [messages, isTyping]);
  useEffect(() => {
    if (activePanel === "chatbot") setTimeout(() => inputRef.current?.focus(), 300);
  }, [activePanel]);

  const sendMessage = (text: string) => {
    if (!text.trim() || isTyping) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    const response = findResponse(text, language);
    const nextIndex = messages.length + 1;

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTypingIndex(null);

    const thinkDelay = 600 + Math.random() * 400;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
      setTypingIndex(nextIndex);
      setIsTyping(false);
    }, thinkDelay);
  };

  const sendWhatsApp = () => {
    if (!waMessage.trim()) return;
    const phone = contact.whatsapp.replace(/[^0-9]/g, "");
    setWaHistory((prev) => [...prev, { role: "user", content: waMessage }]);
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(waMessage)}`, "_blank");
    setWaMessage("");
  };

  const truncate = (s: string, max = 22) => s.length > max ? s.slice(0, max - 1) + "…" : s;

  const closeAll = () => { setActivePanel(null); };

  return (
    <div className="fixed bottom-6 right-3 sm:right-6 z-50 flex flex-col gap-3 items-end">
      {/* Chatbot Panel */}
      <AnimatePresence>
        {activePanel === "chatbot" && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="w-[calc(100vw-1.5rem)] max-w-96 h-[30rem] bg-card border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="gradient-primary px-4 py-3 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-primary-foreground font-heading font-semibold text-sm truncate">ZiptoCode Bot</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  <p className="text-primary-foreground/75 text-xs">{t("Usually replies instantly", "সাধারণত তাত্ক্ষণিক রিপ্লাই দেয়")}</p>
                </div>
              </div>
              <button onClick={closeAll} className="text-primary-foreground/70 hover:text-primary-foreground"><X className="w-4 h-4" /></button>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-2.5 overscroll-contain">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "user" ? (
                    <div className="max-w-[82%] px-3 py-2.5 rounded-2xl rounded-br-sm gradient-primary text-primary-foreground text-sm leading-relaxed shadow-sm">{msg.text}</div>
                  ) : typingIndex === i ? (
                    <TypingMessage text={msg.text} onComplete={() => setTypingIndex(null)} onWord={scrollToBottom} />
                  ) : (
                    <BotBubble text={msg.text} />
                  )}
                </motion.div>
              ))}
              {isTyping && typingIndex === null && <TypingDots />}
            </div>
            <div className="px-3 pb-2 shrink-0">
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                {quickReplies.map((reply) => (
                  <button key={reply} onClick={() => sendMessage(reply)} disabled={isTyping} title={reply}
                    className="shrink-0 px-2.5 py-1 rounded-full border border-border text-[11px] text-muted-foreground whitespace-nowrap hover:border-primary/40 hover:text-primary active:scale-95 transition-all disabled:opacity-40">
                    {truncate(reply)}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-3 pb-3 pt-1 border-t border-border flex gap-2 shrink-0">
              <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder={t("Type a message…", "মেসেজ লিখুন…")}
                className="flex-1 px-3 py-2 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
              <button onClick={() => sendMessage(input)} disabled={!input.trim() || isTyping}
                className="w-9 h-9 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center hover:opacity-90 active:scale-95 transition-all disabled:opacity-40">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Panel */}
      <AnimatePresence>
        {activePanel === "whatsapp" && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="w-[calc(100vw-1.5rem)] max-w-96 h-[28rem] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-accent p-3 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-accent-foreground">
                <WhatsAppIcon />
                <span className="text-sm font-semibold">WhatsApp</span>
              </div>
              <button onClick={closeAll} className="text-accent-foreground/70 hover:text-accent-foreground"><X className="w-4 h-4" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2 text-sm bg-secondary text-secondary-foreground">
                  {t("Hello! Send us a message and we will get back to you on WhatsApp.", "আসসালামু আলাইকুম! আমাদের একটি মেসেজ পাঠান, আমরা WhatsApp-এ আপনাকে রিপ্লাই দেব।")}
                </div>
              </div>
              {waHistory.map((msg, i) => (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm px-3 py-2 text-sm bg-accent text-accent-foreground">
                    {msg.content}
                    <div className="text-[10px] text-accent-foreground/70 mt-1 text-right">✓ {t("Sent to WhatsApp", "WhatsApp এ পাঠানো হয়েছে")}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-border flex items-center gap-2 shrink-0">
              <input value={waMessage} onChange={(e) => setWaMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendWhatsApp()}
                placeholder={t("Type your message...", "আপনার মেসেজ লিখুন...")}
                className="flex-1 min-w-0 px-3 py-2 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors" />
              <button onClick={sendWhatsApp} disabled={!waMessage.trim()}
                className="w-9 h-9 rounded-xl bg-accent text-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded mini-menu */}
      <AnimatePresence>
        {activePanel === "menu" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col gap-3 items-end"
          >
            <button onClick={() => setActivePanel("whatsapp")}
              className="p-3.5 rounded-full bg-accent text-accent-foreground shadow-lg hover:scale-105 transition-transform">
              <WhatsAppIcon />
            </button>
            <button onClick={() => setActivePanel("chatbot")}
              className="p-3.5 rounded-full gradient-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform">
              <Bot className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <button
        onClick={() => {
          if (activePanel === "chatbot" || activePanel === "whatsapp") closeAll();
          else setActivePanel(activePanel === "menu" ? null : "menu");
        }}
        className="p-3.5 rounded-full gradient-primary text-primary-foreground shadow-primary hover:scale-105 active:scale-95 transition-transform"
        aria-label={t("Chat", "চ্যাট")}
      >
        {activePanel ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </div>
  );
};

export default FloatingButtons;
