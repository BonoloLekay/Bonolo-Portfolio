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
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              Bonolo Lekalakala
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              Final year BSc Informatics Student and aspiring Software
              Developer, Business Analyst and Data Analyst passionate about
              building modern software solutions that solve real-world business
              problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Connect With Me</h3>

            <div className="flex gap-5 mt-8">
              <a
                href="https://github.com/BonoloLekay"
                target="_blank"
                rel="noreferrer"
                className="text-2xl hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:bonololekalakala16@gmail.com@gmail.com"
                className="text-2xl hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-center">
            © {new Date().getFullYear()} Bonolo Lekalakala. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
