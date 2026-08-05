import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Education
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600">
            My academic background and professional development.
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Icon */}
            <div className="flex justify-center">
              <FaGraduationCap className="text-5xl md:text-6xl text-blue-600" />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                Bachelor of Science in Informatics
              </h3>

              <p className="mt-2 text-lg font-semibold text-blue-600">
                University of South Africa (UNISA)
              </p>

              <p className="mt-1 text-slate-500 font-medium">
                BSc Informatics Graduate
              </p>

              <p className="mt-6 text-base md:text-lg text-slate-600 leading-8">
                Developed practical experience in software development, database
                design, business analysis, systems analysis, web development,
                desktop application development, and data analysis through
                academic and personal projects.
              </p>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Software Development
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Business Analysis
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Database Design
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
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
