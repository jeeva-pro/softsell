import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: "⚡", text: "Fast Turnaround" ,para:"Get your software evaluated and sold in no time.We value your time  speed is our promise."},
    { icon: "💸", text: "Competitive Payouts",para:"We offer top market value for your unused licenses.More value, less hassle." },
    { icon: "🔒", text: "Secure Transactions" ,para:"Your data and deals are fully protected.Encrypted. Private. Trusted." },
    { icon: "📞", text: "Expert Support" ,para:"Got questions? Our specialists are here to help.Real people, real answers" },
  ];

  return (
    <section id="why-us" className="px-6 py-16 text-center bg-white dark:bg-gray-900">
      <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white dark:hover:text-blue-400">Why Choose Us</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {reasons.map((item, i) => (
          <div
            key={i}
            className="p-6 transition rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-blue-50"
          >
            <div className="mb-2 text-4xl">{item.icon}</div>
            <p className="font-medium text-gray-800 dark:text-gray-100 dark:hover:text-blue-400">{item.text}</p>
            <p className='text-gray-600 dark:text-gray-400'>{item.para}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
