import { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface LinaChatProps {
  isOpen: boolean;
  onClose: () => void;
  isMinimized: boolean;
  onMinimize: () => void;
}

export default function LinaChat({ isOpen, onClose, isMinimized, onMinimize }: LinaChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Bonjour ! Je suis Lina, votre assistante IA Devit.IA. 👋\n\nJe suis là pour vous accompagner dans vos projets Data & IT et vous présenter notre méthode DevConnect™.\n\nQue vous cherchiez à :\n• Renforcer votre équipe technique\n• Externaliser un projet au Maroc\n• Obtenir un conseil expert\n\nJe suis là pour vous guider ! Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getLinaResponse = async (conversationMessages: Message[]): Promise<string> => {
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lina-chat`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: conversationMessages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        throw new Error(errorData.message || 'Erreur lors de la communication avec Lina');
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error('Error calling Lina API:', error);
      return 'Je rencontre un problème technique. Pouvez-vous réessayer ou nous contacter directement à contact@devitia.ma ?';
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await getLinaResponse(updatedMessages);

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Je rencontre un problème technique. Pouvez-vous réessayer ou nous contacter directement à contact@devitia.ma ?',
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onMinimize}
          className="w-16 h-16 rounded-full shadow-2xl relative overflow-hidden border-2 border-white hover:scale-110 transition-transform"
        >
          <img
            src="/Generated Image October 11, 2025 - 1_10AM.png"
            alt="Lina"
            className="w-full h-full object-cover"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="gradient-bg p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 relative">
              <img
                src="/Generated Image October 11, 2025 - 1_10AM.png"
                alt="Lina"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="font-bold text-white">Lina</div>
              <div className="text-xs text-white/80">Assistante IA Devit.IA</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onMinimize}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <Minimize2 size={20} />
            </button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-gray-900 text-white rounded-tr-sm'
                      : 'bg-white text-gray-800 rounded-tl-sm shadow-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-tl-sm p-4 shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !isTyping && handleSend()}
              placeholder="Posez votre question..."
              disabled={isTyping}
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-purple-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Lina utilise l'IA OpenAI pour des réponses personnalisées
          </p>
        </div>
      </div>
    </div>
  );
}
