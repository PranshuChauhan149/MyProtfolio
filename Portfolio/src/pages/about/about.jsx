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
        <p>🚀 Aspiring Software Engineer | B.Tech CSE (2027)

I am a passionate Computer Science & Engineering student with a strong interest in Data Structures & Algorithms, Web Development, and System Design. I enjoy solving coding challenges and building efficient solutions.
 🚀</p>

        <p>
Skills & Interests:
✅ Programming Languages: C++, Java, PHP
✅ Web Development: MERN Stack, React, Tailwind CSS
✅ Concepts: DSA, System Design, Networking

I am constantly learning and improving my skills to become a skilled software engineer. Open to opportunities that help me grow and contribute effectively. Let's connect!</p>
      </section>

      {/* Services Section */}
      <section className="service"> {/* Fixed className typo */}
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Services key={index} title={service.title} icon={service.icon} description={service.description} />
          ))}
        </ul>
      </section>


      {/* es=......... */}
      <h1 className="skillheading">Skills</h1>
      <div className="Skills">
        
        <div className="minSkills">
          <div className="skilsBox">
          <img src={cLang} alt="C Language" width={50} />

          </div>
          
          <div className="skilsBox">
          <img src={boot} alt="C Language" width={50} />
          </div>
          <div className="skilsBox"> <img src={cpp} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={cs} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={html} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={java} alt="C Language" width={50} /></div>

          </div>

          <div className="minSkills">
          <div className="skilsBox"> <img src={cLang} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={cLang} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={php} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={sql} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={js} alt="C Language" width={50} /></div>
          <div className="skilsBox"> <img src={tail} alt="C Language" width={50} /></div>

          </div>
          
      </div>

    </div>
    
  );
};

export default About;
