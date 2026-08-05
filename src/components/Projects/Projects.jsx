import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Bank Management System",
      description:
        "A full-stack banking application featuring secure authentication, customer management, account management, loan processing, and MySQL database integration.",
      tech: ["Python", "Flask", "MySQL", "Bootstrap", "HTML", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "BML Tech Solutions Website",
      description:
        "A professional and fully responsive business website developed to showcase BML Tech's technology services and provide an easy way for potential clients to request software solutions. The platform features an enquiry form with service and budget selection, direct WhatsApp communication, email enquiry submission with client confirmation, and a clean user experience designed to convert visitors into clients.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Web Design",
        "Formspree",
        "WhatsApp Integration",
      ],
      github: "https://github.com/BonoloLekay/BML-Tech",
      demo: "https://techbml.netlify.app/",
    },
    {
      title: "Student Management System",
      description:
        "A desktop application developed using C++ and Qt for managing student records through an intuitive graphical user interface.",
      tech: ["C++", "Qt"],
      github: "#",
      demo: "#",
    },
    {
      title: "Resort Booking Management System (Business Analysis)",
      description:
        "Conducted the complete business analysis for a resort booking system, including stakeholder analysis, business requirements gathering, SRS documentation, use cases, process modelling and wireframes.",
      tech: [
        "Business Analysis",
        "BRD",
        "SRS",
        "Stakeholder Analysis",
        "Use Cases",
        "Wireframes",
      ],
      github:
        "https://github.com/BonoloLekay/Oluhle-resort-booking-management-system",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-4 text-base md:text-lg text-slate-600 leading-7 max-w-3xl mx-auto">
            Below is a selection of software development, business analysis, and
            data analysis projects demonstrating my technical expertise,
            problem-solving skills, and understanding of the software
            development lifecycle.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Banner */}
              <div className="h-44 sm:h-52 bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center px-6">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                  {project.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm md:text-base text-slate-600 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg hover:bg-slate-700 transition w-full sm:w-auto"
                  >
                    <FaGithub />
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition w-full sm:w-auto"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
