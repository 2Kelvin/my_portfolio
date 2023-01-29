import { AiOutlineLinkedin } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";

export default function GetInTouch() {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-2xl text-center mb-10 font-bold text-slate-200 sm:text-3xl sm:mb-12 md:mb-14 lg:text-4xl lg:mb-16">
        Get In Touch
      </h2>
      <p className="text-sm my-4 sm:text-base text-center md:text-lg">
        I'm currently looking for a new opportunity to expand my knowledge as
        well as use my skills to offer service and solve problems. You can reach
        me on these socials.
      </p>
      <div className="flex w-1/4 py-4 justify-between mx-auto sm:py-6 sm:w-1/5 lg:py-8 lg:w-1/6">
        <a
          href="https://www.linkedin.com/in/kelvin-njihia"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin
            className="h-8 w-8 cursor-pointer hover:-translate-y-2 transition duration-700 ease-in-out sm:h-12 sm:w-12 md:h-14 md:w-14"
            fill="#0A66C2"
          />
        </a>

        <a href="https://github.com/2Kelvin" target="_blank" rel="noreferrer">
          <RiGithubLine className="h-8 w-8 cursor-pointer hover:-translate-y-2 transition duration-700 ease-in-out sm:h-12 sm:w-12 md:h-14 md:w-14" />
        </a>
      </div>
    </section>
  );
}
