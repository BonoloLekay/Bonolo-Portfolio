import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-16 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-[#A66A3F] font-semibold uppercase tracking-[4px] mb-3">
            Academic Background
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2D211C]">
            Education
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#6B5A50]">
            My academic background and professional development.
          </p>
        </div>

        <div className="bg-white border border-[#E8DED6] rounded-2xl shadow-xl p-6 md:p-8 hover:border-[#A66A3F] transition duration-300">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex justify-center">
              <div className="bg-[#F3E8DF] p-4 rounded-2xl">
                <FaGraduationCap className="text-5xl md:text-6xl text-[#5C3A2E]" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D211C]">
                Bachelor of Science in Informatics
              </h3>

              <p className="mt-2 text-lg font-semibold text-[#A66A3F]">
                University of South Africa (UNISA)
              </p>

              <p className="mt-1 text-[#6B5A50] font-medium">
                Final-year BSc Informatics student
              </p>

              <p className="mt-6 text-base md:text-lg text-[#6B5A50] leading-8">
                Developed practical experience in software development, database
                design, business analysis, systems analysis, web development,
                desktop application development, and data analysis through
                academic and personal projects.
              </p>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
                  Software Development
                </span>

                <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
                  Business Analysis
                </span>

                <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
                  Database Design
                </span>

                <span className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-4 py-2 rounded-full text-sm font-medium">
                  Data Analysis
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
