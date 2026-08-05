import {
  FaCode,
  FaProjectDiagram,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
      number: "6+",
      title: "Projects Completed",
    },
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      number: "10+",
      title: "Technologies",
    },
    {
      icon: <FaDatabase className="text-4xl text-blue-600" />,
      number: "4+",
      title: "Databases & Tools",
    },
    {
      icon: <FaChartBar className="text-4xl text-blue-600" />,
      number: "3",
      title: "Specialisations",
    },
  ];

  return (
    <section id="statistics" className="py-16 md:py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Project Highlights
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            A snapshot of my technical expertise and project experience.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center">{stat.icon}</div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-5">
                {stat.number}
              </h3>

              <p className="mt-3 text-sm md:text-base text-slate-600 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
