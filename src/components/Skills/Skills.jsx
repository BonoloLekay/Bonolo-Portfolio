import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiExpress,
  SiCplusplus,
  SiQt,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400 text-4xl" />,
        },
        {
          name: "Python",
          icon: <FaPython className="text-blue-500 text-4xl" />,
        },
        {
          name: "C++",
          icon: <SiCplusplus className="text-blue-600 text-4xl" />,
        },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500 text-4xl" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-600 text-4xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600 text-4xl" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-black text-4xl" />,
        },
        {
          name: "Flask",
          icon: <FaPython className="text-gray-700 text-4xl" />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-700 text-4xl" />,
        },
        {
          name: "Database Design",
          icon: <SiMysql className="text-blue-500 text-4xl" />,
        },
      ],
    },
    {
      title: "Business & Data Analysis",
      skills: [
        {
          name: "Business Analysis",
          icon: <span className="text-4xl">📋</span>,
        },
        {
          name: "Data Analysis",
          icon: <span className="text-4xl">📈</span>,
        },
        {
          name: "Power BI",
          icon: <span className="text-4xl">📊</span>,
        },
        {
          name: "Pandas",
          icon: <span className="text-4xl">🐼</span>,
        },
        {
          name: "Microsoft Excel",
          icon: <span className="text-4xl">📗</span>,
        },
        {
          name: "SQL",
          icon: <SiMysql className="text-blue-700 text-4xl" />,
        },
        {
          name: "Requirements Gathering",
          icon: <span className="text-4xl">📝</span>,
        },
        {
          name: "Stakeholder Analysis",
          icon: <span className="text-4xl">👥</span>,
        },
        {
          name: "Process Modelling",
          icon: <span className="text-4xl">🔄</span>,
        },
        {
          name: "Data Visualization",
          icon: <span className="text-4xl">📉</span>,
        },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600 text-4xl" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-black text-4xl" />,
        },
        {
          name: "Qt",
          icon: <SiQt className="text-green-500 text-4xl" />,
        },
        {
          name: "VS Code",
          icon: <span className="text-4xl">💻</span>,
        },
        {
          name: "Qt Creator",
          icon: <SiQt className="text-green-500 text-4xl" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Technical Skills
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600">
            Software Development • Business Analysis • Data Analysis
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-6 text-center md:text-left">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center"
                  >
                    {skill.icon}

                    <p className="mt-3 text-sm md:text-base font-medium text-center text-slate-700">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
