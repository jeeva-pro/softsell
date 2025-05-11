import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Jane Doe",
      role: "IT Manager",
      company: "Acme Corp",
      text: "SoftSell helped us recover thousands from unused licenses. Fast and easy!",
      rating: 5, // Rating out of 5
    },
    {
      name: "John Smith",
      role: "Operations Lead",
      company: "TechNova",
      text: "A seamless way to monetize our excess software. Highly recommend!",
      rating: 4, // Rating out of 5
    },
  ];

  // Function to render star icons based on the rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-3.293 1.734.629-3.668L4 9.414l3.67-.534L10 5l1.33 3.876L15 9.414l-3.337 3.652.629 3.668L10 15z"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="px-6 py-16 text-center bg-gray-50 dark:bg-gray-900">
      <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white dark:hover:text-blue-400">Customer Testimonials</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="p-6 transition bg-white rounded shadow dark:bg-gray-800 hover:shadow-lg"
          >
            <p className="mb-4 italic text-gray-700 dark:text-gray-200">"{review.text}"</p>
            <div className="flex justify-center mb-4">
              {renderStars(review.rating)}
            </div>
            <p className="font-medium text-gray-900 dark:text-white">{review.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {review.role}, {review.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

