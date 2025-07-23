import { BiLogoPostgresql } from "react-icons/bi";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDocker, SiExpress, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-cyan-600" />,
      },
      { name: "JS", icon: <DiJavascript1 className="text-yellow-600" /> },
      { name: "React", icon: <DiReact className="text-teal-600" /> },
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-600" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      {
        name: "Postgresql",
        icon: <BiLogoPostgresql className="text-[#395f89]" />,
      },
      { name: "Github", icon: <DiGithubBadge className="text-white" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-600" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <h2 className="text-5xl font-bold mb-4 text-center">Skills</h2>

      <p className="text-center mb-8">
        I have worked on frontend, backend, and fullstack projects.
        <a href="#" className="underline"></a>
      </p>

      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-6xl mx-auto px-4 py-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-500/10 rounded-xl shadow-xl border border-sky-900 p-6"
            >
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-200"
                  >
                    <span className="text-5xl">{tech.icon}</span>
                    <span className="text-sm text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
