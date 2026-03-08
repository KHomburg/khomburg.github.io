function App() {
  const { t, i18n } = window.ReactI18next.useTranslation();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [particles, setParticles] = React.useState([]);
  const [activeTab, setActiveTab] = React.useState('me');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleFormSubmit = () => {
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSubmitted(true);
      setIsSubmitting(false);
    }
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
      
      <div className="content-grid">
        {activeTab === 'me' && (
          <>
           
            <section className="card">
              <h2>{t('sections.contact.title')}</h2>

              <p>{t('sections.about.p1')}</p>
              
              {!submitted ? (
                <form 
                  action="https://docs.google.com/forms/d/e/1FAIpQLSc8HROJgEeWmIfuC5ed8OzsaN33w-p9dgCmhUbdylV5fYJ6cQ/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={handleFormSubmit}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label htmlFor="message">{t('sections.contact.message_label')}</label>
                    <textarea 
                      id="message" 
                      name="entry.462558302" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="contact">{t('sections.contact.contact_info_label')}</label>
                    <input 
                      type="text" 
                      id="contact" 
                      name="entry.383606610" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? '...' : t('sections.contact.submit_button')}
                  </button>
                </form>
              ) : (
                <div className="success-message">
                  <p>{t('sections.contact.success_message')}</p>
                </div>
              )}

              <div className="social-links">
                <a href="https://github.com/KHomburg" className="social-link">Github</a>
                <a href="https://www.instagram.com/kevin.h______" className="social-link">Instagram</a>
              </div>
            </section>
            <section className="card">
              <h2>{t('sections.about.title')}</h2>
              <p>{t('sections.about.p2')}</p>
            </section>
           
          </>
        )}
      </div>

      {/* Silent submission target - moved outside to stay mounted */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        style={{ display: 'none' }} 
        title="hidden_iframe"
        onLoad={handleIframeLoad}
      />
    </div>
  );
}

export default App;
