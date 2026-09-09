import profile from "../../assets/images/1.jpg";

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex justify-center">
          <div className="p-2 rounded-2xl bg-gradient-to-br from-[#5C3A2E] via-[#8A5A3B] to-[#C79A6B] shadow-2xl">
            <img
              src={profile}
              alt="Bonolo Lekalakala"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-[#A66A3F] font-semibold uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#2D211C]">
            Passionate About Building Technology That Solves Problems
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#6B5A50] leading-8">
            I am a final-year BSc Informatics student passionate about software
            development, business analysis, and data analysis. I enjoy building
            modern web and desktop applications that solve real business
            challenges through clean, scalable, and user-focused solutions.
          </p>

          <p className="mt-5 text-base md:text-lg text-[#6B5A50] leading-8">
            My experience includes developing booking websites, desktop
            applications with Qt, and responsive React applications. I enjoy
            learning new technologies and continuously improving my technical
            and analytical skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
              Software Development
            </span>

            <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
              Business Analysis
            </span>

            <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
              Data Analysis
            </span>

            <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
              Problem Solving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
