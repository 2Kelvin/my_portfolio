function Footer() {
  const this_year = new Date().getFullYear();

  return (
    <section className="text-center text-xs">
      <p>
        Coded by{" "}
        <span className="font-mono text-portfoliogreen">Rocketman</span>
      </p>
      <p className="my-3 font-mono">{this_year}</p>
    </section>
  );
}

export default Footer;
