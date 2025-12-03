import React from 'react';
import { Content } from '../types';
import { CreditCard, Banknote, Landmark, Wallet, Globe } from 'lucide-react';

interface Props {
  content: Content['pricing'];
}

const PaymentMethods: React.FC<Props> = ({ content }) => {
  const methods = [
    { name: "PayPal", icon: Wallet, color: "text-blue-400" },
    { name: "Stripe", icon: CreditCard, color: "text-indigo-400" },
    { name: "Western Union", icon: Banknote, color: "text-yellow-400" },
    { name: "Ria Transfer", icon: Globe, color: "text-orange-400" },
    { name: "Bank Transfer", icon: Landmark, color: "text-gray-400" },
  ];

  return (
    <div className="mt-16 text-center border-t border-neutral-800 pt-10">
      <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8">{content.paymentTitle}</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {methods.map((method, idx) => (
          <div 
            key={idx}
            className="group flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-4 py-2 rounded hover:border-red-600 transition-colors cursor-default"
          >
            <method.icon size={20} className={method.color} />
            <span className="text-gray-300 text-sm font-bold group-hover:text-white">{method.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;