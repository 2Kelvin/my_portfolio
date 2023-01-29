function Home() {
  return (
    <section id="home" className="h-[97vh] grid items-center pt-2 md:pt-0">
      <div>
        <p className="text-portfoliogreen font-mono pb-3 text-base sm:text-lg sm:pb-6 md:text-xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-extrabold text-slate-50 py-2 font-poppins sm:text-6xl md:text-7xl lg:text-8xl">
          Kelvin Njihia
        </h1>
        <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-7xl">
          I build beautiful and functional web apps
        </h1>
        <p className="py-5 sm:py-9 sm:text-lg md:text-xl">
          I'm a front-end developer building responsive, beautiful and
          functional websites and web apps using React and Tailwind CSS.
        </p>

        <a href="https://github.com/2Kelvin" target="_blank" rel="noreferrer">
          <button className="p-4 md:text-lg text-portfoliogreen border border-portfoliogreen rounded-xl bg-transparent mt-5 sm:p-6 sm:rounded-2xl sm:text-base active:border-portfoliogreen/50 active:drop-shadow-lg hover:border-portfoliogreen/50 hover:drop-shadow-lg">
            Check out my Github
          </button>
        </a>
      </div>
    </section>
  );
}

export default Home;
