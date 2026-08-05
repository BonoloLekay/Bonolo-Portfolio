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
          icon: <SiJavascript className="text-yellow-400 text-3xl" />,
        },
        {
          name: "Python",
          icon: <FaPython className="text-blue-500 text-3xl" />,
        },
        {
          name: "C++",
          icon: <SiCplusplus className="text-blue-600 text-3xl" />,
        },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500 text-3xl" /> },
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-500 text-3xl" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-600 text-3xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500 text-3xl" />,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600 text-3xl" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-black text-3xl" />,
        },
        {
          name: "Flask",
          icon: <FaPython className="text-gray-700 text-3xl" />,
        },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
        {
          name: "Database Design",
          icon: <SiMysql className="text-blue-500 text-3xl" />,
        },
      ],
    },
    {
      title: "Business & Data Analysis",
      skills: [
        {
          name: "Business Analysis",
          icon: <span className="text-2xl">📋</span>,
        },
        { name: "Data Analysis", icon: <span className="text-2xl">📈</span> },
        { name: "Power BI", icon: <span className="text-2xl">📊</span> },
        { name: "Pandas", icon: <span className="text-2xl">🐼</span> },
        { name: "Microsoft Excel", icon: <span className="text-2xl">📗</span> },
        { name: "SQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
        {
          name: "Requirements Gathering",
          icon: <span className="text-2xl">📝</span>,
        },
        {
          name: "Stakeholder Analysis",
          icon: <span className="text-2xl">👥</span>,
        },
        {
          name: "Process Modelling",
          icon: <span className="text-2xl">🔄</span>,
        },
        {
          name: "Data Visualization",
          icon: <span className="text-2xl">📉</span>,
        },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-600 text-3xl" />,
        },
        { name: "GitHub", icon: <FaGithub className="text-black text-3xl" /> },
        { name: "Qt", icon: <SiQt className="text-green-500 text-3xl" /> },
        { name: "VS Code", icon: <span className="text-2xl">💻</span> },
        {
          name: "Qt Creator",
          icon: <SiQt className="text-green-500 text-3xl" />,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Technical Skills
          </h2>

          <p className="mt-3 text-slate-600">
            Software Development • Business Analysis • Data Analysis
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-blue-600 mb-5">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-xl p-4 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col items-center"
                  >
                    {skill.icon}

                    <p className="mt-2 text-sm font-medium text-center text-slate-700">
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
