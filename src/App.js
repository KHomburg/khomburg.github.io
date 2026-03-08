function App() {
  const { t, i18n } = window.ReactI18next.useTranslation();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [particles, setParticles] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState('me');

  // Handle URL query parameters for section default
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section');
    if (section && ['me', 'professional'].includes(section)) {
      setActiveTab(section);
    }
  }, []);

  const handleTabChange = (tab) => {
    console.log('TAB CLICK: ', tab);
    setActiveTab(tab);
  };

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(nextLng);
  };

  // Mouse tracking for glow effect
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate floating particles
  React.useEffect(() => {
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="app">
      {/* Language Switcher */}
      <div className="language-switcher">
        <button onClick={toggleLanguage} className="lang-btn">
          {i18n.language === 'en' ? 'DE' : 'EN'}
        </button>
      </div>

      {/* Tab Navigation */}
      <button 
        onClick={() => handleTabChange('me')} 
        className={`tab-btn ${activeTab === 'me' ? 'active' : ''}`}
      >
        {t('tabs.me')}
      </button>
      <button 
        onClick={() => handleTabChange('professional')} 
        className={`tab-btn ${activeTab === 'professional' ? 'active' : ''}`}
      >
        {t('tabs.professional')}
      </button>

      {/* Mouse follower glow */}
      <div 
        className="mouse-glow" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px` 
        }}
      />
      
      {/* Floating particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      {/* Aurora overlay */}
      <div className="aurora-overlay" />
      
      <header>
        <h1>{t('header.name')}</h1>
        <p className="title">{t('header.title')}</p>
      </header>
      
      <div className="content-grid">
        {activeTab === 'me' && (
          <>
            <section className="intro">
              <h2>{t('sections.about.title')}</h2>
              <p>{t('sections.about.p1')}</p>
              <p>{t('sections.about.p2')}</p>
            </section>
            
            <section className="education">
              <h2>{t('sections.education.title')}</h2>
              <p>{t('sections.education.msc')}</p>
              <p>{t('sections.education.bsc')}</p>
            </section>
            
            <section className="contact">
              <h2>{t('sections.contact.title')}</h2>
              <p>{t('sections.contact.text')} <a href="mailto:email@example.com">email@example.com</a></p>
              <div className="social-links">
                <a href="#" className="social-link">{t('sections.contact.github')}</a>
                <a href="#" className="social-link">{t('sections.contact.linkedin')}</a>
                <a href="#" className="social-link">{t('sections.contact.twitter')}</a>
              </div>
            </section>
          </>
        )}

        {activeTab === 'professional' && (
          <>
            <section className="skills">
              <h2>{t('sections.skills.title')}</h2>
              <div className="skills-container">
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
              <h2>{t('sections.projects.title')}</h2>
              <div className="projects-container">
                <div className="project-card">
                  <h3>{t('sections.projects.alpha.title')}</h3>
                  <p>{t('sections.projects.alpha.description')}</p>
                </div>
                <div className="project-card">
                  <h3>{t('sections.projects.beta.title')}</h3>
                  <p>{t('sections.projects.beta.description')}</p>
                </div>
              </div>
            </section>
            
            <section className="experience">
              <h2>{t('sections.experience.title')}</h2>
              <p>{t('sections.experience.senior')}</p>
              <p>{t('sections.experience.frontend')}</p>
              <p>{t('sections.experience.junior')}</p>
            </section>

            <section className="education">
              <h2>{t('sections.education.title')}</h2>
              <p>{t('sections.education.msc')}</p>
              <p>{t('sections.education.bsc')}</p>
            </section>
          </>
        )}
        
        <div className="cta-container">
          <h2 className="cta-text">{t('cta.title')}</h2>
          <p>{t('cta.text')}</p>
          <a href="mailto:email@example.com" className="cta-button">{t('cta.button')}</a>
        </div>
        
        <footer>
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
