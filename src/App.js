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
      </header>
      
      <div className="content-grid">
        {activeTab === 'me' && (
          <>
            <section className="card">
              <h2>{t('sections.about.title')}</h2>
              <p>{t('sections.about.p1')}</p>
              <p>{t('sections.about.p2')}</p>
            </section>
            
            <section className="card">
              <h2>{t('sections.contact.title')}</h2>
              <div className="social-links">
                <a href="https://github.com/KHomburg" className="social-link">Github</a>
                <a href="https://www.instagram.com/kevin.h______" className="social-link">Instagram</a>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
