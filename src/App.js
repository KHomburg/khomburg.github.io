function App() {
  const { t, i18n } = window.ReactI18next.useTranslation();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [particles, setParticles] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState('me');


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
