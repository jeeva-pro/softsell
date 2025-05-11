import React, { useState } from 'react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello, welcome to SoftSell! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const responses = {
    'what is time': "Time is the ongoing sequence of events taking place. In our context, it’s important to act fast and make use of your unused software licenses before they lose value.",
    'upload license': "Uploading your software license on SoftSell is simple. Just fill out a quick form, provide your license details, and we’ll take care of the rest.",
    'how it works': "SoftSell helps individuals and businesses resell unused software licenses. You upload your license, we verify and list it, then once it’s sold, you get paid.",
    'get paid': "After your software license is sold and verified, we securely transfer the payment to your preferred account. No hidden fees, just transparent transactions.",
    'why choose us': "SoftSell stands out because we’re fast, secure, and focused on value. Whether you’re an individual or a company, we help you recover money from unused software licenses with no hassle.",
    'expert support': "Our support team is always ready to help you with license transfers, technical questions, or listing issues. You can chat with us here or request a callback from our experts.",
    'is it a good company': "Yes! SoftSell has helped many clients recover money from unused licenses and find affordable software. Our users appreciate our simplicity, transparency, and expert support.",
    'is it safe': "Absolutely. We use secure systems to handle license transfers and payments. Your data is protected, and every license is verified before being listed or sold."
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim().toLowerCase();
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      const botReply = responses[userMessage] || "Thanks for your message! A SoftSell representative will respond shortly.";
      setMessages([...newMessages, { sender: 'bot', text: botReply }]);
    }, 800);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed p-3 text-white transition bg-blue-600 rounded-full shadow-lg bottom-4 right-4 hover:bg-blue-700"
      >
        Chat
      </button>

      {isOpen && (
        <div className="fixed p-4 bg-white border rounded-lg shadow-lg bottom-20 right-4 w-80 dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Chat with us!</h3>
          </div>
          <div className="p-2 space-y-2 overflow-y-scroll h-60">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-xs ${msg.sender === 'bot' ? 'bg-blue-100 text-blue-900' : 'bg-white text-gray-900'} self-${msg.sender === 'bot' ? 'start' : 'end'}`}
              >
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleMessageSubmit} className="flex mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Type your message..."
            />
            <button type="submit" className="p-2 ml-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;


