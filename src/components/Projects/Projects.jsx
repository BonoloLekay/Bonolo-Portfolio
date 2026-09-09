import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
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
      title:
        "Resort Booking Management System (Business Analysis + Live Client Website)",
      description:
        "Conducted the complete business analysis for a resort booking system, including stakeholder analysis, business requirements gathering, SRS documentation, use cases, process modelling, and wireframes.",
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
      demo: "https://oluhleresorts.co.za",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#A66A3F] font-semibold uppercase tracking-[4px] mb-3">
            My Work
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2D211C]">
            Featured Projects
          </h2>

          <p className="mt-4 text-base md:text-lg text-[#6B5A50] leading-7 max-w-3xl mx-auto">
            Below is a selection of software development, business analysis, and
            data analysis projects demonstrating my technical expertise,
            problem-solving skills, and understanding of the software
            development lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white
                border border-[#E8DED6]
                rounded-2xl
                shadow-lg
                overflow-hidden
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-[#A66A3F]
                transition-all
                duration-300
              "
            >
              <div className="h-44 sm:h-52 bg-gradient-to-r from-[#5C3A2E] via-[#7A4F3A] to-[#B8895B] flex items-center justify-center px-6">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                  {project.title}
                </h3>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-[#2D211C]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm md:text-base text-[#6B5A50] leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#F3E8DF] text-[#5C3A2E] border border-[#E1C8B5] px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#2D211C] text-white px-5 py-3 rounded-lg hover:bg-[#5C3A2E] transition duration-300 w-full sm:w-auto"
                  >
                    <FaGithub />
                    View Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-[#5C3A2E] text-[#5C3A2E] px-5 py-3 rounded-lg hover:bg-[#5C3A2E] hover:text-white transition duration-300 w-full sm:w-auto"
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
