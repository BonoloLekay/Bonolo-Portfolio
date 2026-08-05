import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        "service_portfolio",
        "template_portfolio",
        form,
        "MgU6fewkyV_fPvfdO"
      );

      alert("Message sent successfully!");

      setForm({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Connect
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Have a project, graduate opportunity, or collaboration in mind?
            Feel free to send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8 text-center lg:text-left">

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <FaEnvelope className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-slate-300 break-all">
                  bonololekalakala16@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-blue-400" />

              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-slate-300">South Africa</p>
              </div>
            </div>

            {/* Socials */}

            <div className="flex justify-center lg:justify-start gap-6 pt-6">
              <a
                href="https://github.com/BonoloLekay"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bonolo-lekalakala-0473982a1/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/27662231670"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-green-400 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <form
            onSubmit={sendEmail}
            className="bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-xl"
          >
            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Email
              </label>

              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-70"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;