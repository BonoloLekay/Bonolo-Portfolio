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
    <section id="contact" className="py-16 md:py-20 bg-[#2D211C] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[#C79A6B] font-semibold uppercase tracking-[4px] mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>

          <p className="mt-4 text-[#D6C7BD] max-w-2xl mx-auto">
            Have a project, graduate opportunity, or collaboration in mind? Feel
            free to send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-[#5C3A2E] p-3 rounded-xl">
                <FaEnvelope className="text-2xl text-[#C79A6B]" />
              </div>

              <div>
                <p className="text-[#D6C7BD] break-all">
                  <a
                    href="mailto:bonololekalakala16@gmail.com"
                    aria-label="Email"
                    className="text-2xl hover:text-[#C79A6B] transition duration-300"
                  >
                    <h3 className="font-semibold text-lg">Email</h3>
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-[#5C3A2E] p-3 rounded-xl">
                <FaMapMarkerAlt className="text-2xl text-[#C79A6B]" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Location</h3>

                <p className="text-[#D6C7BD]">South Africa</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-6 pt-6">
              <a
                href="https://github.com/BonoloLekay"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-3xl hover:text-[#C79A6B] transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bonolo-lekalakala-0473982a1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-3xl hover:text-[#C79A6B] transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/27662231670"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-3xl hover:text-green-400 transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="bg-[#FAF7F2] rounded-2xl p-6 md:p-8 text-[#2D211C] shadow-2xl border border-[#7A4F3A]"
          >
            <div className="mb-5">
              <label className="block mb-2 font-semibold">Full Name</label>

              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                className="w-full bg-white border border-[#E1C8B5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A66A3F]"
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
                className="w-full bg-white border border-[#E1C8B5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A66A3F]"
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
                className="w-full bg-white border border-[#E1C8B5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A66A3F]"
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
                className="w-full bg-white border border-[#E1C8B5] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#A66A3F] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#5C3A2E] text-white py-3 rounded-lg font-semibold hover:bg-[#7A4F3A] transition duration-300 disabled:opacity-70"
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
