import project1 from "../assets/proj1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/proj.png";
import project5 from "../assets/proj3.png";
import project3 from "../assets/proj5.png";
import project6 from "../assets/proj6.png";
import project7 from "../assets/proj7.png";

import { AiOutlineGithub } from "react-icons/ai";

const projects = [
  {
    img: project1,
    title: "LeetLab",
    description:
      "LeetLab is a platform designed to help users practice coding problems, learn algorithms, and improve their programming skills.",
    links: {
      site: "https://leetlab-rho.vercel.app/",
      github: "https://github.com/Amarsah15/LeetLab",
    },
  },
  {
    img: project5,
    title: "Weather App",
    description:
      "Dynamic Weather App that provides real-time weather updates using HTML, CSS, and JavaScript.",
    links: {
      site: "https://weather-app-blond-phi-56.vercel.app/",
      github: "https://github.com/Amarsah15/Weather-App",
    },
  },
  {
    img: project2,
    title: "Landing Page",
    description:
      "Comprehensive and responsive landing page. Built using HTML, CSS, Tailwind CSS, and JavaScript.",
    links: {
      site: "https://chai-code-alpha.vercel.app/",
      github: "https://github.com/Amarsah15/chai_code_landing_page",
    },
  },

  {
    img: project4,
    title: "Portfolio Website",
    description: "Personal Portfolio built with React and Tailwind CSS",
    links: {
      site: "https://portfolio-indol-seven-75.vercel.app/",
      github: "https://github.com/Amarsah15/Portfolio",
    },
  },
  {
    img: project3,
    title: "Tic-Tac-Toe",
    description:
      "Interactive Tic Tac Toe game using HTML, CSS, and JavaScript.",
    links: {
      site: "https://tic-tac-toe-three-lac-50.vercel.app/",
      github: "https://github.com/Amarsah15/TIc-Tac-Toe",
    },
  },
  {
    img: project6,
    title: "Razorpay Clone",
    description:
      "Created a pixel-perfect clone of the Razorpay website using HTML and Tailwind CSS, focusing on responsive design and modern UI practices.",
    links: {
      site: "https://razorpayclone-tau.vercel.app/",
      github: "https://github.com/Amarsah15/Razorpayclone",
    },
  },
  {
    img: project7,
    title: "Password Generator",
    description:
      "Developed a secure and user-friendly Password Generator Website using HTML, CSS, and JavaScript.",
    links: {
      site: "https://password-generator-zeta-green.vercel.app/",
      github: "https://github.com/Amarsah15/Password-Generator/",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[700px] mx-auto md:my-20" id="portfolio">
      <h2 className="text-5xl font-bolod text-gray-200 mb-8 text-center">
        Portfolio
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex space-x-4">
              <a
                href={project.links.site}
                className="px-4 py-2 border border-sky-400 text-sky-400 hover:bg-sky-500 hover:text-white transition duration-300"
                target="_blank"
              >
                View Site
              </a>
              <a
                href={project.links.github}
                className="px-4 py-2 border border-sky-400 text-sky-400 hover:bg-sky-500 hover:text-white transition duration-300"
                target="_blank"
              >
                <AiOutlineGithub style={{ fontSize: "25px", color: "white" }} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
