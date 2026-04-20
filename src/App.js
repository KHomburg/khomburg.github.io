function App() {
  const { t, i18n } = window.ReactI18next.useTranslation();
  const { useMousePosition, useFloatingParticles } = window.AppHooks;
  const { LanguageSwitcher, BackgroundEffects } = window.AppComponents;
  const { HeroSection, StorySection, ReasonsSection, ContactSection } = window.AppSections;

  const mousePosition = useMousePosition();
  const particles = useFloatingParticles();
  const [message, setMessage] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const contactSectionRef = React.useRef(null);

  const heroBubbles = t('hero.bubbles', { returnObjects: true }) || [];
  const heroStats = t('hero.stats', { returnObjects: true }) || [];
  const vibeCards = t('sections.vibes.cards', { returnObjects: true }) || [];
  const prompts = t('sections.contact.prompts', { returnObjects: true }) || [];

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

  const applyPrompt = (prompt) => {
    setSubmitted(false);
    setMessage((currentMessage) => {
      if (!currentMessage.trim()) {
        return prompt;
      }

      return `${currentMessage}\n\n${prompt}`;
    });
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
          heroStats={heroStats}
          onScrollToContact={scrollToContact}
        />
        <StorySection t={t} vibeCards={vibeCards} />
        <ContactSection
          t={t}
          prompts={prompts}
          socialLinks={socialLinks}
          message={message}
          contact={contact}
          isSubmitting={isSubmitting}
          submitted={submitted}
          onPromptClick={applyPrompt}
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
