function App() {
  const { t, i18n } = window.ReactI18next.useTranslation();
  const { useMousePosition, useFloatingParticles } = window.AppHooks;
  const { LanguageSwitcher, BackgroundEffects } = window.AppComponents;
  const { HeroSection, StorySection, ContactSection } = window.AppSections;

  const mousePosition = useMousePosition();
  const particles = useFloatingParticles();
  const [message, setMessage] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const contactSectionRef = React.useRef(null);

  const socialLinks = [
    {
      href: 'https://github.com/KHomburg',
      label: t('sections.contact.social.github')
    },
    {
      href: 'https://www.instagram.com/kevin.h______',
      label: t('sections.contact.social.instagram')
    }
  ];

  const toggleLanguage = () => {
    const nextLanguage = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(nextLanguage);
  };

  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = () => {
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setSubmitted(true);
      setIsSubmitting(false);
      setMessage('');
      setContact('');
    }
  };

  return (
    <div className="app">
      <LanguageSwitcher language={i18n.language} onToggle={toggleLanguage} />
      <BackgroundEffects mousePosition={mousePosition} particles={particles} />

      <main className="page-shell">
        <HeroSection
          t={t}
          onScrollToContact={scrollToContact}
        />
        <StorySection t={t} />
        <ContactSection
          t={t}
          socialLinks={socialLinks}
          message={message}
          contact={contact}
          isSubmitting={isSubmitting}
          submitted={submitted}
          onMessageChange={setMessage}
          onContactChange={setContact}
          onFormSubmit={handleFormSubmit}
          onIframeLoad={handleIframeLoad}
          contactSectionRef={contactSectionRef}
        />
      </main>
    </div>
  );
}

window.App = App;
