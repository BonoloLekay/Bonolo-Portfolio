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
        "MgU6fewkyV_fPvfdO",
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
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Let's Connect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <FaEnvelope className="text-3xl text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-slate-300">bonololekalakala16@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-3xl text-blue-400" />
              <div>
                <h3 className="font-semibold text-lg">Location</h3>
                <p className="text-slate-300">South Africa</p>
              </div>
            </div>

            <div className="flex gap-6 pt-6">
              <a
                href="https://github.com/BonoloLekay"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl hover:text-blue-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/bonolo-lekalakala-0473982a1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl hover:text-blue-400" />
              </a>

              <a
                href="https://wa.me/0662231670"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-3xl hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            className="bg-white rounded-2xl p-8 text-slate-900 shadow-lg"
          >
            <div className="mb-5">
              <label className="block mb-2 font-semibold">Full Name</label>

              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-semibold">Email</label>

              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-semibold">Subject</label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-semibold">Message</label>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
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
