import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../../assets/images/1.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-50 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[6px] text-blue-600 font-semibold">
            Aspiring Software Developer | Business Analyst | Data Analyst
          </p>

          <h1 className="mt-4 text-6xl font-extrabold text-slate-900 leading-tight">
            Bonolo
            <br />
            <span className="text-blue-600">Lekalakala</span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">
            I am a BSc Informatics final year with skills in software development,
            business analysis, and data analysis. I enjoy designing and
            developing solutions that solve real business problems using modern
            technologies such as React, Node.js, Flask, MySQL, and Qt creator.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/Bonolo_Lekalakala_CV.pdf"
              download="Bonolo_Lekalakala_CV.pdf"
              className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-3xl text-slate-700">
            <a
              href="https://github.com/BonoloLekay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bonolo-lekalakala-0473982a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:bonololekalakala16@gmail.com"
              className="hover:text-blue-600 transition duration-300"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 p-2 shadow-2xl">
            <img
              src={profile}
              alt="Bonolo Lekalakala"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
