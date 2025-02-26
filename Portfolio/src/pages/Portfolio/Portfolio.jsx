const Portfolio = () => {
  return (
    <>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <ul className="filter-list">
        {['All', 'Web design', 'Application', 'Web development'].map(category => (
          <li key={category} className="filter-item">
            <button>{category}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Portfolio;
