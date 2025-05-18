function App() {
  return (
    <div className="app">
      <header>
        <h1>Kevin Homburg</h1>
        <p className="title">Software Engineer</p>
      </header>
      
      <div className="content-grid">
        <section className="intro">
          <h2>About Me</h2>
          <p>
            {/* Add your introduction here */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel purus sollicitudin rhoncus. 
            Passionate about creating elegant solutions to complex problems.
          </p>
        </section>
        
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {/* Replace with your actual skills */}
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">CSS</span>
            <span className="skill-tag">HTML</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">GraphQL</span>
            <span className="skill-tag">UI/UX</span>
          </div>
        </section>
        
        <section className="projects">
          <h2>Projects</h2>
          <div className="projects-container">
            {/* Add your projects here */}
            <div className="project-card">
              <h3>Project Alpha</h3>
              <p>Project description goes here. Explain what you built and the technologies used.</p>
            </div>
            <div className="project-card">
              <h3>Project Beta</h3>
              <p>Another amazing project with cutting-edge technologies.</p>
            </div>
          </div>
        </section>
        
        <section className="experience">
          <h2>Experience</h2>
          <p>Senior Developer at TechCorp (2020-Present)</p>
          <p>Frontend Developer at WebSolutions (2018-2020)</p>
          <p>Junior Developer at StartupXYZ (2016-2018)</p>
        </section>
        
        <section className="education">
          <h2>Education</h2>
          <p>MSc in Computer Science</p>
          <p>BSc in Software Engineering</p>
        </section>
        
        <section className="contact">
          <h2>Contact</h2>
          <p>Get in touch with me at: <a href="mailto:email@example.com">email@example.com</a></p>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </section>
        
        <footer>
          <p>© {new Date().getFullYear()} Kevin Homburg. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
