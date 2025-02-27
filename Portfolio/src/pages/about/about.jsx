import Services from "./service"; // Correct component name

import cLang from "./cLang.png";
import boot from "./bootstrap.jpg";
import cpp from "./cpp.jpg";
import cs from "./css.jpg";
import html from "./html.jpg";
import java from "./java.jpg";
import js from "./js.jpg";
import php from "./php.jpg";
import sql from "./sql.jpg";
import tail from "./tailwind.jpg";

const servicesData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level."
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description: "Professional development of applications for iOS and Android."
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description: "I make high-quality photos of any category at a professional level."
  }
];

const About = () => {
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About</h2>
      </header>

      <section className="about-text">
        <p className="text-xl">
          Aspiring Software Engineer | B.Tech CSE (2027)
        </p>
        <p>
          I am a passionate Computer Science & Engineering student with a strong interest in Data Structures & Algorithms, Web Development, and System Design. I enjoy solving coding challenges and building efficient solutions.
        </p>
        <p>
          <strong>Skills & Interests:</strong><br />
          <strong>Programming Languages:</strong> C++, Java, PHP<br />
          <strong>Web Development:</strong> MERN Stack, React, Tailwind CSS<br />
          <strong>Concepts:</strong> DSA, System Design, Networking
        </p>
        <p>
          I am constantly learning and improving my skills to become a skilled software engineer. Open to opportunities that help me grow and contribute effectively. Let's connect!
        </p>
      </section>

      {/* Services Section */}
      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Services key={index} title={service.title} icon={service.icon} description={service.description} />
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <h1 className="skillheading">Skills</h1>
      <div className="Skills">
        <div className="minSkills">
          {[cLang, boot, cpp, cs, html, java].map((imgSrc, index) => (
            <div className="skilsBox" key={index}>
              <img src={imgSrc} alt={`Skill ${index + 1}`} width={50} />
            </div>
          ))}
        </div>

        <div className="minSkills">
          {[php, sql, js, tail].map((imgSrc, index) => (
            <div className="skilsBox" key={index}>
              <img src={imgSrc} alt={`Skill ${index + 7}`} width={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
