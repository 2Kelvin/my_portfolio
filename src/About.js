function About() {
  return (
    <section id="about" className="h-fit my-2 sm:py-9 md:py-12 lg:py-16">
      <div className="flex items-center mb-10 sm:mb-14 md:mb-14 lg:mb-16">
        <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl lg:text-4xl">
          About Me
        </h2>
        <hr className="w-3/5 mx-auto border-0 h-px bg-portfoliogreen rounded-xl sm:w-3/4 lg:w-4/5" />
      </div>

      <p className="mb-5 text-sm sm:text-base sm:mb-8 md:text-lg">
        Hello! My name is Kelvin and{" "}
        <span className="text-portfoliogreen">
          I believe that the computer is mankind's greatest invention
        </span>
        . Its ability to do complex mathematical calculations in a matter of
        milliseconds and solve real world problems is the main reason why I
        decided to pursue programming. To be a problem solver.
      </p>

      <p className="mb-5 text-sm sm:text-base sm:mb-8 md:text-lg">
        I graduated in December 2019 with a bachelor's in Counselling
        Psychology, so you could say that I know a thing or two about solving
        people's problems.
      </p>

      <p className="mb-5 text-sm sm:text-base sm:mb-8 md:text-lg">
        I began teaching myself how to code and about web development on January
        2020. My first technologies, HTML and CSS. I decided to take my career
        path more seriously so I joined Emobilis Technical Institute bootcamp
        early 2021. Here, I learnt all about Web Development and Android
        Programming. The idea of meeting like minded people, working together
        and sharing ideas about code also played a role in this career decision.
      </p>

      <p className="mb-5 text-sm sm:text-base sm:mb-8 md:text-lg">
        I passed my bootcamp final project with an app I built for people to
        easily find counsellors in their nearest locales. I called it project{" "}
        <span className="text-portfoliogreen">TherapistNearYou</span>. The
        github link for this project is linked in the projects section.
      </p>

      <p className="mb-5 text-sm sm:text-base sm:mb-8 md:text-lg">
        My fire still blazes on as I continue to learn new technologies and
        frameworks. Hey, I'm Kelvin, a frontend developer specialized in React
        and Tailwind CSS.
      </p>
    </section>
  );
}

export default About;
