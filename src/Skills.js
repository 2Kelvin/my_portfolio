import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="my-20 sm:py-6 md:py-11 lg:py-14">
      <div className="flex items-center mb-10 sm:mb-14 lg:mb-16">
        <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl lg:text-4xl">
          Technologies
        </h2>
        <hr className="w-3/6 mx-auto border-0 h-px bg-portfoliogreen rounded-xl sm:w-2/3 lg:w-3/4" />
      </div>
      <ul className="flex justify-between py-8">
        <div className="p-1 cursor-pointer sm:p-3 hover:-translate-y-2 transition duration-700 ease-in-out grid place-content-center bg-onportfoliobg rounded-md shadow-md  outline outline-1 outline-blue-900/50 lg:p-4">
          <FaReact
            fill="#149ECA"
            className="h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            data-bs-toggle="tooltip"
            title="React"
          />
        </div>

        <div className="p-1 cursor-pointer sm:p-3 hover:-translate-y-2 transition duration-700 ease-in-out grid place-content-center bg-onportfoliobg rounded-md shadow-md outline outline-1 outline-blue-900/50 lg:p-4">
          <SiTailwindcss
            fill="#38BDF8"
            className="h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            data-bs-toggle="tooltip"
            title="Tailwind CSS"
          />
        </div>

        <div className="p-1 sm:p-3 hover:-translate-y-2 transition duration-700 ease-in-out grid place-content-center bg-onportfoliobg rounded-md shadow-md outline outline-1 outline-blue-900/50 lg:p-4">
          <SiJavascript
            fill="#F8D410"
            className="h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 cursor-pointer lg:h-20 lg:w-20"
            data-bs-toggle="tooltip"
            title="JavaScript"
          />
        </div>

        <div className="p-1 cursor-pointer sm:p-3 hover:-translate-y-2 transition duration-700 ease-in-out grid place-content-center bg-onportfoliobg rounded-md shadow-md outline outline-1 outline-blue-900/50 lg:p-4">
          <FaGitAlt
            fill="#E94E31"
            className="h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            data-bs-toggle="tooltip"
            title="Git"
          />
        </div>

        <div className="p-1 cursor-pointer sm:p-3 hover:-translate-y-2 transition duration-700 ease-in-out grid place-content-center bg-onportfoliobg rounded-md shadow-md outline outline-1 outline-blue-900/50 lg:p-4">
          <SiHtml5
            fill="#E96228"
            className="h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            data-bs-toggle="tooltip"
            title="HTML"
          />
        </div>

        <div className="p-1 cursor-pointer sm:p-3 hover:-translate-y-2 transition duration-700 ease-in-out grid place-content-center bg-onportfoliobg rounded-md shadow-md outline outline-1 outline-blue-900/50 lg:p-4">
          <SiCss3
            fill="#2862E9"
            className="h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            data-bs-toggle="tooltip"
            title="CSS"
          />
        </div>
      </ul>
    </section>
  );
}

export default Skills;
