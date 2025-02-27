import { useEffect, useState } from "react";

const Portfolio = () => {
  const [project, setProjects] = useState([]);
  const [filteredProject, setFilteredProject] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/projects.json") // Public folder se JSON load karna hai
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProject(data); // Initial projects set karna
      });
  }, []);

  // Category change hone par filtering
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProject(project);
    } else {
      setFilteredProject(
        project.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, project]);

  return (
    <>
      <section>
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <ul className="filter-list">
          {["All", "Web design", "Applications", "Web development"].map(
            (category) => (
              <li key={category} className="filter-item">
                <button
                  className={category === selectedCategory ? "active" : ""}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            )
          )}
        </ul>

        <section className="projects">
          <ul className="project-list">
            {filteredProject.map((project) => (
              <li key={project.id} className="project-item active">
                <a href="#">
                  <figure className="project-img">
                    {/* ✅ Image path fix */}
                   <img src={`/${project.image}`} alt={project.title} />

                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
