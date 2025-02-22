import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false); // Track sending state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Disable button while sending

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email, // Corrected key
      message: formData.message,
      reply_to: formData.email,  
    };

    emailjs
      .send(
        "service_4dx5ovf", // Your Service ID
        "template_khfovij", // Your Template ID
        emailParams,
        "WbXCZXrT89wmwmjXO" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ type: "success", message: "Message sent successfully!" });
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus({ type: "error", message: "Failed to send message. Try again." });
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="p-10 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-teal-400 text-center">Contact Me</h2>
      
      <form onSubmit={sendEmail} className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <label className="block text-lg">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
          className="w-full p-2 mt-2 mb-4 rounded bg-gray-700 text-white"
        />

        <label className="block text-lg">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="w-full p-2 mt-2 mb-4 rounded bg-gray-700 text-white"
        />

        <label className="block text-lg">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
          className="w-full p-2 mt-2 mb-4 rounded bg-gray-700 text-white h-32"
        />

        <button
          type="submit"
          className={`w-full p-3 rounded-lg text-white ${
            isSending ? "bg-gray-500 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600"
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`text-center mt-4 ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
