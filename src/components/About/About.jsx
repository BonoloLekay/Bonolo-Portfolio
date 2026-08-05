import profile from "../../assets/images/1.jpg"

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Right */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            About Me
          </p>


          <p className="mt-6 text-slate-600 leading-8">
            I develop modern web and desktop applications while applying
            business analysis and data analysis techniques to solve real-world
            business challenges. My interests include software engineering,
            financial systems, database design, and digital transformation.
          </p>

          <p className="mt-4 text-slate-600 leading-8">
            My experience includes developing banking systems, resort booking
            platforms, desktop applications with Qt, and modern React
            applications.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
