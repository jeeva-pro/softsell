import React from 'react';

const HowItWorks = () => {
  const steps = [
    { title: "Upload License", icon: "📤" ,para:"Quickly share your unused software license with us.It’s fast, secure, and takes less than a minute."},
    { title: "Get Valuation", icon: "💰" ,para:"We'll assess your license and provide a fair market offer.No hidden fees—just a transparent quote in no time." },
    { title: "Get Paid", icon: "🏦" ,para:"Accept the offer and get paid fast via your preferred method.Simple, secure, and hassle-free." },
  ];

  return (
    <section id="how-it-works" className="px-6 py-16 text-center bg-gray-50 dark:bg-gray-900">
      <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white dark:hover:text-blue-400">How It Works</h2>
      <div className="grid gap-6 md:grid-cols-3 ">
        {steps.map((step, i) => (
          <div
            key={i}
            className="p-6 transition bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg hover:bg-blue-50"
          >
            <div className="mb-4 text-5xl">{step.icon}</div>
            <h3 className="text-xl font-medium text-gray-800 cursor-pointer dark:text-gray-100 dark:hover:text-blue-400">
              {step.title}
            </h3 >
               <p className='text-gray-600 dark:text-gray-400'>
                 {step.para}
               </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
