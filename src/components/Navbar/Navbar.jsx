import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DED6] z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        <a
          href="#home"
          className="text-2xl md:text-3xl font-extrabold text-[#2D211C]"
        >
          BML<span className="text-[#A66A3F]">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[#4A3A32] font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-[#A66A3F] transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-[#A66A3F] transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-[#A66A3F] transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-[#A66A3F] transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-[#A66A3F] transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-2xl text-[#5C3A2E] hover:text-[#A66A3F] transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-t border-[#E8DED6] shadow-lg">
          <ul className="flex flex-col items-center py-6 space-y-6 text-lg font-medium text-[#4A3A32]">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#A66A3F] transition duration-300"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#A66A3F] transition duration-300"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#A66A3F] transition duration-300"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#A66A3F] transition duration-300"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#A66A3F] transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
