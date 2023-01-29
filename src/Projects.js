import { BsCheck2Circle } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

function Projects() {
  return (
    <section id="projects" className="my-5 sm:py-6 md:py-11">
      <div className="flex items-center mb-12 sm:mb-14 lg:mb-16">
        <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl lg:text-4xl">
          Projects
        </h2>
        <hr className="w-2/3 mx-auto border-0 h-px bg-portfoliogreen rounded-xl sm:w-4/5 lg:w-5/6" />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
        {/* therapist_near-you*/}
        <div className="rounded-md bg-onportfoliobg p-2 outline outline-1 outline-blue-900/50 shadow-md mb-10 md:mb-0 md:h-[400px] lg:h-[490px] hover:-translate-y-2 transition duration-700 ease-in-out lg:p-4">
          <div className="flex justify-between content-center lg:mt-4">
            <h4 className="font-mono text-sm text-portfoliogreen mb-2 font-extralight lg:text-base lg:mb-5">
              Android App
            </h4>
            <a
              href="https://github.com/2Kelvin/myEmobilisProject.git"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine className="h-6 w-6 cursor-pointer lg:h-8 lg:w-8" />
            </a>
          </div>
          <h3 className="text-slate-100 text-xl font-bold sm:text-2xl">
            Therapist Near You App
          </h3>
          <p className="my-5 text-sm sm:text-base md:text-lg lg:my-7">
            An android app where users can log in and search for counsellors who
            are relatively close to their location without the hussle of doing
            it manually. On finding a suitable therapist, the user can go ahead
            and call or text the therapist to book for a counselling session.
            Interested therapists can also join the app by registering and
            having their data saved to the app's database which is then
            displayed on the app.
          </p>
          <p className="mb-5 lg:mt-[74px] text-sm text-portfoliogreen font-mono flex justify-between sm:w-2/3 md:w-full">
            <span className="flex items-center">
              <BsCheck2Circle />
              Kotlin
            </span>
            <span className="flex items-center">
              <BsCheck2Circle />
              Firebase
            </span>
            <span className="flex items-center">
              <BsCheck2Circle />
              Google Auth
            </span>
          </p>
        </div>
        {/* fetching data into a table using an async function */}
        <div className="rounded-md bg-onportfoliobg p-2 outline outline-1 outline-blue-900/50 shadow-md mb-10 md:mb-0  md:h-[400px] lg:h-[490px] hover:-translate-y-2 transition duration-700 ease-in-out lg:p-4">
          <div className="flex justify-between content-center lg:mt-4">
            <h4 className="font-mono text-sm text-portfoliogreen mb-2 font-extralight lg:text-base lg:mb-5">
              Web App
            </h4>
            <a
              href=" https://github.com/2Kelvin/fetch-react-project-challenge.git"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine className="h-6 w-6 cursor-pointer lg:h-8 lg:w-8" />
            </a>
          </div>
          <h3 className="text-slate-100 text-xl font-bold sm:text-2xl">
            Async Data Fetching App
          </h3>
          <p className="my-5 text-sm sm:text-base md:text-lg lg:my-7">
            In this web project, I use an async await function to fetch API data
            into my app, convert it from its JSON format and use map() to
            display each required data on its own table cell with each having a
            unique key.
          </p>
          <p className="md:mt-[140px] lg:mt-[172px] mb-5 text-sm text-portfoliogreen font-mono flex justify-between sm:w-2/3 md:w-full">
            <span className="flex items-center">
              <BsCheck2Circle />
              Async programming
            </span>
            <span className="flex items-center">
              <BsCheck2Circle />
              API
            </span>
            <span className="flex items-center">
              <BsCheck2Circle />
              JSON
            </span>
          </p>
        </div>
        {/* to-do-app */}
        <div className="rounded-md bg-onportfoliobg p-2 outline outline-1 outline-blue-900/50 shadow-md mb-5 md:h-[400px] lg:h-[490px] hover:-translate-y-2 transition duration-700 ease-in-out lg:p-4">
          <div className="flex justify-between content-center lg:mt-4">
            <h4 className="font-mono text-sm text-portfoliogreen mb-2 font-extralight lg:text-base lg:mb-5">
              Web App
            </h4>
            <a
              href="https://github.com/2Kelvin/react-my-todo-app.git"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine className="h-6 w-6 cursor-pointer lg:h-8 lg:w-8" />
            </a>
          </div>
          <h3 className="text-slate-100 text-xl font-bold sm:text-2xl">
            To Do List
          </h3>
          <p className="my-5 text-sm sm:text-base md:text-lg lg:my-7">
            A simple and beautiful app to keep track of my goals as I complete
            them. The golas are saved to local storage so the data isn't wiped
            or reset after every session. On the side, I added a feature that
            fetches some dad jokes from an API to lighten up the app.
          </p>
          <p className="md:h-[218px] lg:mt-[46px] mb-5 text-sm text-portfoliogreen font-mono flex justify-between sm:w-2/3 md:w-full">
            <span className="flex items-center">
              <BsCheck2Circle />
              React Hooks
            </span>
            <span className="flex items-center">
              <BsCheck2Circle />
              API
            </span>
            <span className="flex items-center">
              <BsCheck2Circle />
              Local Storage
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
