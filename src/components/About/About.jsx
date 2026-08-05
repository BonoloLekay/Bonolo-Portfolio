import profile from "../../assets/images/1.jpg";

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left - Profile Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Bonolo Lekalakala"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Right - About Content */}
        <div className="text-center lg:text-left">
          <p className="text-blue-600 font-semibold uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Passionate About Building Technology That Solves Problems
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-600 leading-8">
            I am a BSc Informatics Graduate passionate about software
            development, business analysis, and data analysis. I enjoy building
            modern web and desktop applications that solve real business
            challenges using clean, scalable, and user-focused solutions.
          </p>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-8">
            My experience includes developing banking systems, resort booking
            management platforms, desktop applications with Qt, and responsive
            React applications. I enjoy learning new technologies and
            continuously improving my technical and analytical skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Software Development
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Business Analysis
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Data Analysis
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Problem Solving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;