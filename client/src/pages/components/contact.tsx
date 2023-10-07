// components/Contact.tsx

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      telNumber: "",
      message: "",
    });
  };

  return (
    <div className="">
      <div className="w-10/12 mx-auto my-20">
        <form onSubmit={handleSubmit} className="">
          {/*  */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-10">
            <div className="mb-4 basis-auto sm:basis-1/2">
              <label
                htmlFor="firstName"
                className="block text-md font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 py-2 px-5 w-full border rounded-md outline-emerald-500"
                required
              />
            </div>
            <div className="mb-4 basis-auto sm:basis-1/2">
              <label
                htmlFor="lastName"
                className="block text-md font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 py-2 px-5 w-full border rounded-md outline-emerald-500"
                required
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-10">
            <div className="mb-4 basis-auto sm:basis-1/2">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 py-2 px-5 w-full border rounded-md outline-emerald-500"
                required
              />
            </div>

            <div className="mb-4 basis-auto sm:basis-1/2">
              <label
                htmlFor="telNumber"
                className="block text-md font-medium text-gray-600"
              >
                Telephone Number
              </label>
              <input
                type="tel"
                id="telNumber"
                name="telNumber"
                value={formData.telNumber}
                onChange={handleChange}
                className="mt-1 py-2 px-5 w-full border rounded-md outline-emerald-500"
                required
              />
            </div>
          </div>
          {/*  */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-md font-medium text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 py-2 px-5 w-full border rounded-md outline-emerald-500"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 text-lg bg-emerald-500 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
