import {
  FaCode,
  FaProjectDiagram,
  FaDatabase,
  FaChartBar,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaProjectDiagram className="text-4xl text-[#A66A3F]" />,
      number: "6+",
      title: "Projects Completed",
    },
    {
      icon: <FaCode className="text-4xl text-[#A66A3F]" />,
      number: "10+",
      title: "Technologies",
    },
    {
      icon: <FaDatabase className="text-4xl text-[#A66A3F]" />,
      number: "4+",
      title: "Databases & Tools",
    },
    {
      icon: <FaChartBar className="text-4xl text-[#A66A3F]" />,
      number: "3",
      title: "Specialisations",
    },
  ];

  return (
    <section id="statistics" className="py-16 md:py-20 bg-[#2D211C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Project Highlights
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
                bg-[#FAF7F2]
                border border-[#7A4F3A]
                rounded-2xl
                p-6 md:p-8
                text-center
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-[#C79A6B]
                transition-all
                duration-300
              "
            >
              <div className="flex justify-center">
                <div className="bg-[#F3E8DF] p-4 rounded-full">{stat.icon}</div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#5C3A2E] mt-5">
                {stat.number}
              </h3>

              <p className="mt-3 text-sm md:text-base text-[#6B5A50] font-medium">
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
