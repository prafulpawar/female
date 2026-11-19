import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { ORG_DATA } from '../../data/fbfData';
import { useToast } from './ToastContext';

export default function CommunityChatWidget({ onNavigate, onOpenDonate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'fbf',
      text: "Hello! Welcome to Future Black Female. How can we support you today?",
      time: "Just now"
    }
  ]);
  const [input, setInput] = useState('');
  const { addToast } = useToast();

  const quickPrompts = [
    { label: "Join Udada Sisterhood", action: () => sendBotResponse("Udada sisterhood sessions are 100% free for Black girls and young women (16–22). You can view the full details on our Programs page!", 'programs') },
    { label: "$500 Brock Scholarship", action: () => sendBotResponse("The Future Black Trailblazers Award is open for students enrolling at Brock University. You can apply directly through our official application link!", 'about') },
    { label: "Tax-Deductible Donation", action: () => sendBotResponse(`FBF is a Canadian Registered Charity (# ${ORG_DATA.charityNumber}). Instant official tax receipts are issued for gifts of $10+.`, 'donate') }
  ];

  const sendBotResponse = (text, targetPage) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'fbf', text, time: "Just now", targetPage }
    ]);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: userText, time: "Just now" }
    ]);
    setInput('');

    setTimeout(() => {
      sendBotResponse(
        `Thank you for reaching out! Our team at ${ORG_DATA.contact.generalEmail} has received your inquiry. We typically respond within 24 business hours.`,
        'contact'
      );
      addToast({
        title: "Message Routed",
        message: "Your inquiry was logged to the FBF Community Desk.",
        type: "success"
      });
    }, 800);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[85] font-dm">
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1B2828] text-white shadow-xl hover:bg-[#283d3d] border border-stone-700 text-xs font-bold transition-all hover:scale-105 group"
          title="Ask Future Black Female Community Desk"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-[#F8F495]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#D48B28] animate-pulse" />
          </div>
          <span>Ask FBF Desk</span>
        </button>
      )}

      {/* Chat Window Dialog */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-[90vw] sm:w-96 overflow-hidden flex flex-col h-[460px] animate-fade-in text-xs">
          
          {/* Header */}
          <div className="bg-[#1B2828] text-white p-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#D48B28] flex items-center justify-center font-bold text-stone-950 font-quando text-xs">
                FBF
              </div>
              <div>
                <h5 className="font-bold text-xs text-white">FBF Community Desk</h5>
                <span className="text-[10px] text-stone-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Niagara HQ • Active
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF8F5]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#1B2828] text-white rounded-br-none'
                      : 'bg-white border border-[#E8DFC8] text-stone-800 rounded-bl-none shadow-2xs'
                  }`}
                >
                  {m.text}
                  {m.targetPage && (
                    <button
                      onClick={() => {
                        onNavigate(m.targetPage);
                        setIsOpen(false);
                      }}
                      className="mt-2 block text-[11px] font-bold text-[#D48B28] hover:underline"
                    >
                      Open {m.targetPage.toUpperCase()} page →
                    </button>
                  )}
                </div>
                <span className="text-[9px] text-stone-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          {/* Quick Prompts Strip */}
          <div className="p-2 bg-stone-100 border-t border-stone-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={p.action}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white border border-stone-200 text-[10px] font-semibold text-stone-700 hover:border-[#D48B28] hover:text-[#D48B28] transition-colors shrink-0"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or inquire..."
              className="flex-1 bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#D48B28]"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-[#D48B28] hover:bg-[#b8761d] text-white transition-colors shrink-0"
              title="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
