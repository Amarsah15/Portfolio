import { motion } from "framer-motion";

const education = [
  {
    name: "Brainware University",
    degree: "BTech in CSE - AIML",
    year: "2022-2026",
    cgpa: "9.0",
  },
  {
    name: "Kendriya Vidyalaya Sevoke Road",
    class: "Higher Secondary",
    year: "2021",
    percentage: "88%",
  },
  {
    name: "Kendriya Vidyalaya Sevoke Road",
    class: "Senior Secondary",
    year: "2019",
    percentage: "81.4%",
  },
];

const Education = () => {
  return (
    <div
      className="flex flex-col justify-center px-4 text-gray-100 pb-8 md:py-12"
      id="education"
    >
      <h1 className="text-5xl text-gray-100 font-bold text-center mb-12">
        Education
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {education.map((educations, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-[600px] mx-auto border border-sky-600 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-sky-500/10"
          >
            <h2 className="text-gray-200 text-2xl font-semibold">
              {educations.name}
            </h2>

            {educations.degree && (
              <p className="text-gray-200 text-lg">
                <strong>Degree:</strong> {educations.degree}
              </p>
            )}

            {educations.class && (
              <p className="text-gray-200 text-lg">
                <strong>Class:</strong> {educations.class}
              </p>
            )}

            <p className="text-gray-200 text-lg ">
              <strong>Year:</strong> {educations.year}
            </p>

            {educations.cgpa && (
              <p className="text-gray-200 text-lg">
                <strong>CGPA:</strong> {educations.cgpa}
              </p>
            )}

            {educations.percentage && (
              <p className="text-gray-200 text-lg">
                <strong>Percentage:</strong> {educations.percentage}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
