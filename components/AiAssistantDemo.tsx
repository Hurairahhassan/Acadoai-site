import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User as UserIcon, Sparkles, Loader2, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { UserRole, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AiAssistantDemo: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.ADMIN);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your AcadoAI Assistant. Select a role above and ask me anything about your school data, lesson plans, or studies.' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Simulate network delay for realism if API is too fast, allows animation to play
    const responseText = await sendMessageToGemini(userMsg, selectedRole, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleRoleChange = (role: UserRole) => {
    setSelectedRole(role);
    setMessages([{ role: 'model', text: `Switched to ${role} Mode. How can I help you today?` }]);
  };

  const suggestions: Record<UserRole, string[]> = {
    [UserRole.ADMIN]: [
      "Show enrollment trends for Grade 10",
      "Analyze this month's budget variance",
      "Which teachers have low attendance?"
    ],
    [UserRole.TEACHER]: [
      "Create a quiz on photosynthesis",
      "Plan a 45-minute lesson on World War II",
      "Draft an email to parents about the field trip"
    ],
    [UserRole.STUDENT]: [
      "Explain the Pythagorean theorem",
      "Quiz me on organic chemistry basics",
      "How do I solve for x in 2x + 5 = 15?"
    ]
  };

  return (
    <section id="ai-demo" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Powered by Google Gemini</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Stop Searching. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Just Ask.
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              AcadoAI isn't just a database; it's an intelligent partner. 
              Whether you're an admin crunching numbers, a teacher planning curriculum, 
              or a student stuck on a problem, our AI assistant provides real-time, context-aware answers.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Instant Analytics", desc: "Admins get summaries of complex data in seconds." },
                { title: "Automated Content", desc: "Teachers generate quizzes and plans instantly." },
                { title: "24/7 Tutoring", desc: "Students get personalized help whenever they need it." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Chat Interface */}
          <div className="relative">
            {/* Decorative background blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-20"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-slate-50 border-b border-slate-200 p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-semibold text-slate-700">AcadoAI Assistant</span>
                  </div>
                  <button onClick={() => setMessages([{ role: 'model', text: `Reset. I am in ${selectedRole} mode.` }])} className="text-slate-400 hover:text-slate-600">
                    <RefreshCcw size={16} />
                  </button>
                </div>
                {/* Role Selector */}
                <div className="flex bg-slate-200/50 p-1 rounded-lg">
                  {Object.values(UserRole).map((role) => (
                    <button
                      key={role}
                      onClick={() => handleRoleChange(role)}
                      className={`flex-1 py-1.5 text-xs font-medium rounded-md transition-all ${
                        selectedRole === role 
                        ? 'bg-white text-indigo-600 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/30">
                {messages.map((msg, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[85%] gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-200' : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'}`}>
                        {msg.role === 'user' ? <UserIcon size={16} /> : <Bot size={16} />}
                      </div>
                      <div className={`p-3 rounded-2xl text-sm ${
                        msg.role === 'user' 
                        ? 'bg-slate-800 text-white rounded-tr-none' 
                        : 'bg-white border border-slate-200 shadow-sm text-slate-700 rounded-tl-none'
                      }`}>
                        {msg.text.split('\n').map((line, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="flex max-w-[80%] gap-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                          <Loader2 size={16} className="text-white animate-spin" />
                        </div>
                        <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                          </div>
                        </div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Suggestions */}
              {messages.length < 3 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-slate-400 mb-2 ml-1">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions[selectedRole].map((sugg, i) => (
                      <button 
                        key={i}
                        onClick={() => { setInput(sugg); }} // Just fill input
                        className="text-xs bg-white border border-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full hover:bg-indigo-50 transition-colors"
                      >
                        {sugg}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-100">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={`Ask as a ${selectedRole}...`}
                    className="w-full bg-slate-100 text-slate-900 placeholder-slate-400 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    disabled={isLoading}
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};