import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    license: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.company) newErrors.company = 'Required';
    if (!formData.license) newErrors.license = 'Required';
    if (!formData.message) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert('Message sent!');
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 text-center bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="mb-8 text-3xl font-semibold text-gray-900 dark:text-white dark:hover:text-blue-400">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 text-left"
      >
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-2 bg-white border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name}</p>
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full p-2 bg-white border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email}</p>
        )}

        <input
          name="company"
          placeholder="Company"
          onChange={handleChange}
          className="w-full p-2 bg-white border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
        />
        {errors.company && (
          <p className="text-sm text-red-500">{errors.company}</p>
        )}

        <select
          name="license"
          onChange={handleChange}
          className="w-full p-2 bg-white border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
        >
          <option value="">Select License Type</option>
          <option>Microsoft</option>
          <option>Adobe</option>
          <option>Autodesk</option>
        </select>
        {errors.license && (
          <p className="text-sm text-red-500">{errors.license}</p>
        )}

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="w-full p-2 bg-white border rounded dark:bg-gray-800 dark:text-white dark:border-gray-700"
          rows={4}
        ></textarea>
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message}</p>
        )}

        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
