"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    setSuccessMessage("Your message has been sent successfully!");
    reset(); // Clears the form
    setTimeout(() => setSuccessMessage(""), 3000); // Hide success message after 3 seconds
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
      <div className="space-y-4">
        {/* Name & Phone Fields */}
        <div className="flex space-x-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 text-black border bg-primarybg dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="w-full">
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: "Phone is required" })}
              className="w-full p-3 text-black border bg-primarybg dark:text-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1 w-full">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 text-black border bg-primarybg dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Service Selection Dropdown */}
        <div>
          <select
            {...register("service", { required: "Please select a service" })}
            className="w-full p-3 text-black border bg-primarybg dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option className="text-gray-800" value="" selected disabled>
              Select a Service
            </option>
            <option className="text-gray-800" value="Fund Accounting and NAV administration">
              Fund Accounting and NAV administration
            </option>
            <option className="text-gray-800" value="Backoffice & Middle office Services">
              Backoffice & Middle office Services
            </option>
            <option className="text-gray-800" value="Investor Relationship/Services">
              Investor Relationship/Services
            </option>
            <option className="text-gray-800" value="Share/investment Accounting">
              Share/investment Accounting
            </option>
            <option className="text-gray-800" value="Accounts Payable Services">
              Accounts Payable Services
            </option>
            <option className="text-gray-800" value="Accounts Receivable Services">
              Accounts Receivable Services
            </option>
            <option className="text-gray-800" value="Payroll Services">Payroll Services</option>
            <option className="text-gray-800" value="Business Setup in India">Business Setup in India</option>
            <option className="text-gray-800" value="Private Equity">Private Equity</option>
            <option className="text-gray-800" value="Finance Advisory">Finance Advisory</option>
            <option className="text-gray-800" value="Regulatory Reporting & Compliance Services">
              Regulatory Reporting & Compliance Services
            </option>
            <option className="text-gray-800" value="Due Diligence">Due Diligence</option>
            <option className="text-gray-800" value="Registration Services">Registration Services</option>
            <option className="text-gray-800" value="Virtual CFO Services">Virtual CFO Services</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
        </div>

        {/* Message Field */}
        <div>
          <textarea
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            rows="4"
            className="w-full p-3 text-black border bg-primarybg dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-6 bg-secondary text-white p-3 rounded-lg text-lg font-semibold hover:scale-95 transition-all"
      >
        Submit
      </button>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 text-center mt-4">{successMessage}</p>
      )}
    </form>
  );
};

export default Form;
