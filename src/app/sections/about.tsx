export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-transparent flex flex-col md:flex-row items-center justify-center gap-20"
    >
      {/* Left side: Image */}
      <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-4xl shadow-lg">
        <img
          src="/headshot.png"
          alt="Dakshit Shahani"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side: Text content */}
      <div className="text-left md:text-left bg-transparent">
        <h2 className="text-4xl font-bold mb-2">
          Hey, I'm <span className="text-primary">Daksh</span>!
        </h2>
        <h3 className="py-2 text-2xl">Currently I'm ..</h3>
        <ul className="space-y-1 text-md pl-2">
            <li>🔭 Full Stack Developer</li>
            <li>🎥 Media Specialist @ nwPlus</li>
            <li> 👨‍💻 working on cloud native projects!</li>
            <li>🧠 exploring cloud infrastructure on AWS</li>
        </ul>
        <h3 className="py-2 text-2xl">I'm passionate about...</h3>
        <ul className="space-y-1 text-md pl-2">
            <li>💻 Web Development</li>
            <li>🎨 Motion Design</li>
            <li>📸 Photography</li>
            <li>🧠 Maximizing Productivity</li>
        </ul>
        <h3 className="py-2 text-2xl">I also like...</h3>
        <ul className="space-y-1 text-md pl-2">
            <li>🏐 Volleyball</li>
            <li>🍣 Salmon Oshi</li>
            <li>🍵 Matcha</li>
        </ul>
      </div>
    </section>
  );
}