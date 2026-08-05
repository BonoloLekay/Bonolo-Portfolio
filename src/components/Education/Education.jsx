import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">Education</h2>

          <p className="mt-3 text-slate-600">
            My academic background and professional development.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-start gap-6">
            <FaGraduationCap className="text-5xl text-blue-600 mt-1" />

            <div>
              <h3 className="text-2xl font-bold">
                BSc Informatics
              </h3>

              <p className="text-blue-600 font-semibold mt-2">
                University of South Africa (UNISA)
              </p>

              <p className="text-slate-500 mt-1">Final Year Student</p>

              <p className="mt-6 text-slate-600 leading-7">
                Developed practical experience in software development, database
                design, business analysis, systems analysis, web development,
                desktop application development, and data analysis through
                academic and personal projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
