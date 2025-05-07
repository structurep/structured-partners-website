
// Add "use client" directive because useState is used for form handling
// MUST be the very first line
"use client";

// Metadata cannot be exported from a Client Component module.
// Remove the metadata export entirely from this file.
// import { Metadata } from "next"; // No longer needed here
import { Phone, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const email = "info@structuredpartners.com";
  const phone = "727-761-1644";
  const location = "St Petersburg, FL";
  const formspreeEndpoint = "https://formspree.io/f/manooygk"; // Added Formspree endpoint

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    interest: "Sell-Side Advisory",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Updated form submission handler for Formspree
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle"); // Reset status on new submission

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          phone: "",
          interest: "Sell-Side Advisory",
          message: "",
        });
      } else {
        // Handle non-OK responses from Formspree (e.g., validation errors)
        console.error("Formspree submission failed:", response);
        setSubmitStatus("error");
      }
    } catch (error) {
      // Handle network errors
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // Apply base font (handled by layout) and background color
    <div className="bg-white text-text-body font-sans">
      {/* Hero Section - Apply bg-secondary, text-tertiary */}
      <section className="bg-secondary text-tertiary py-20 md:py-28 text-center">
        <div className="container mx-auto px-4">
          {/* H1 Style: text-3xl md:text-4xl lg:text-5xl font-bold */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start the Conversation
          </h1>
          {/* Body Style: text-base md:text-lg, use text-tertiary-strong */}
          <p className="text-base md:text-lg max-w-3xl mx-auto text-tertiary-strong">
            Reach out to discuss your M&A goals in the building products and
            services sector. All inquiries are handled with the utmost
            confidentiality.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section - Apply text colors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="md:pr-8">
            {/* H2 Style: text-2xl md:text-3xl font-bold text-text-title */}
            <h2 className="text-2xl md:text-3xl font-bold text-text-title mb-6">
              Get in Touch
            </h2>
            {/* Body Style: text-base text-text-body */}
            <p className="text-base text-text-body mb-8 leading-relaxed">
              Whether you are considering selling your business, exploring
              strategic acquisitions, or seeking expert valuation advice within
              the building industry, Structured Partners is ready to assist. Our
              senior advisors provide personalized attention and leverage deep
              sector expertise to help you navigate your most critical decisions.
            </p>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-3">
                {/* Use primary color for icon */}
                <Mail className="w-6 h-6 text-primary icon-interactive" />
                {/* Use text-body color, hover:text-primary */}
                <a
                  href={`mailto:${email}`}
                  className="text-text-body hover:text-primary transition duration-300"
                >
                  {email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-primary icon-interactive" />
                <a
                  href={`tel:${phone.replace(/-/g, "")}`}
                  className="text-text-body hover:text-primary transition duration-300"
                >
                  {phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-primary icon-interactive" />
                <span className="text-text-body">{location}</span>
              </div>
            </div>
            {/* Caption Style: text-sm text-text-caption */}
            <p className="text-text-caption mt-8 text-sm">
              We understand the sensitivity of these discussions and guarantee
              complete discretion.
            </p>
          </div>

          {/* Contact Form - Apply bg-background-1, card styles */}
          <div className="bg-background-1 p-8 rounded-lg shadow-md border border-stroke-1">
            {/* H2 Style: text-2xl font-bold text-text-title */}
            <h2 className="text-2xl font-bold text-text-title mb-6">
              Schedule a Confidential Consultation
            </h2>
            {/* Update form tag to remove default onSubmit if using Formspree"s standard HTML integration, but keep for AJAX */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Form fields styling - Apply border, focus ring, rounded-md */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  {/* Label Style: text-sm font-medium text-text-subtle */}
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-text-subtle"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body bg-white"
                    value={formData.firstName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-text-subtle"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body bg-white"
                    value={formData.lastName}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-text-subtle"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body bg-white"
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-subtle"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body bg-white"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-subtle"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body bg-white"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-text-subtle"
                >
                  Primary Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-stroke-1 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body"
                  value={formData.interest}
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option>Sell-Side Advisory</option>
                  <option>Buy-Side Advisory</option>
                  <option>Valuation/Consulting</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-subtle"
                >
                  Brief Message/Inquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-stroke-1 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-body bg-white"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Submission Button - Use btn-primary styles */}
              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center items-center btn btn-primary py-3 px-4 text-base ${
                    isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Schedule a Confidential Consultation"
                  )}
                </button>
              </div>

              {/* Submission Status Messages - Apply functional colors */}
              {submitStatus === "success" && (
                <div className="flex items-center justify-center text-center text-sm text-success p-3 bg-success/10 rounded-md border border-success/30 mt-4">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Thank you! Your consultation request has been submitted
                  successfully. A senior advisor will respond within one business
                  day.
                </div>
              )}
              {submitStatus === "error" && (
                <p className="text-center text-sm text-danger p-3 bg-danger/10 rounded-md border border-danger/30 mt-4">
                  There was an error submitting your request. Please try again
                  later or contact us directly via phone or email.
                </p>
              )}
              {submitStatus === "idle" && !isSubmitting && (
                <p className="text-center text-sm text-text-caption pt-2">
                  A senior advisor will respond within one business day.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

