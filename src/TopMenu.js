import { useState, useEffect } from "react";

function TopNav() {
  return (
    <section className="top-0 h-[46px] sm:h-[52px] lg:h-[84px] z-10 mb-2 left-0 fixed p-2 lg:p-4 w-full md:pt-0 lg:px-32 bg-portfoliobg drop-shadow-md">
      <div className="flex justify-between py-1">
        <a href="#home">
          <li className="rounded-lg p-2 sm:p-4 border-2 border-solid border-portfoliogreen h-7 w-7 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 lg:text-lg grid place-content-center cursor-pointer shadow active:border-portfoliogreen/50 hover:border-portfoliogreen/50 hover:drop-shadow-md">
            <span className="text-portfoliogreen font-bold font-sans">K</span>
          </li>
        </a>

        <ul className="flex items-center justify-between font-mono text-sm text-portfoliogreen sm:text-base w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/3">
          <li>
            <a
              href="#about"
              className="active:text-portfoliogreen/50 hover:text-portfoliogreen/50"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="active:text-portfoliogreen/50 hover:text-portfoliogreen/50"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="active:text-portfoliogreen/50 hover:text-portfoliogreen/50"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="active:text-portfoliogreen/50 hover:text-portfoliogreen/50"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function TopMenu() {
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [showNav, setshowNav] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollData.y > 90 ? setshowNav(true) : setshowNav(false);
    scrollData.lastY > scrollData.y ? setshowNav(true) : setshowNav(false);
  }, [scrollData]);

  return showNav && <TopNav />;
}
