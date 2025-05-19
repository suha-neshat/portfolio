import React from "react";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white max-w-xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Interested in working together or just want to say hi? Drop me a message!
      </p>
      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded bg-white dark:bg-gray-800" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded bg-white dark:bg-gray-800" />
        <textarea name="message" placeholder="Your Message" rows={5} required className="w-full p-3 border rounded bg-white dark:bg-gray-800"></textarea>
        <button type="submit" className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200">
          Send Message
        </button>
      </form>
    </div>
  );
}
