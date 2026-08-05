import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-400">
              Bonolo Lekalakala
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Final-year BSc Informatics Student passionate about Software
              Development, Business Analysis, and Data Analysis. I enjoy
              designing and developing modern software solutions that solve
              real-world business problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition duration-300"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#education"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-5">Connect With Me</h3>

            <p className="text-slate-400 mb-6">
              Feel free to connect with me through any of the platforms below.
            </p>

            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/BonoloLekay"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-2xl hover:text-blue-400 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bonolo-lekalakala-0473982a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-2xl hover:text-blue-400 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:bonololekalakala16@gmail.com"
                aria-label="Email"
                className="text-2xl hover:text-blue-400 transition duration-300"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/27662231670"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-2xl hover:text-green-400 transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-center text-sm">
            © {new Date().getFullYear()} Bonolo Lekalakala. All Rights Reserved.
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition duration-300 hover:scale-110"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
