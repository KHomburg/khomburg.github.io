window.AppSections = window.AppSections || {};

window.AppSections.HeroSection = function HeroSection({
  t,
  heroTags,
  heroBubbles,
  onScrollToContact
}) {
  return (
    <section className="hero-card">
      <div className="hero-copy">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
        <h1>{t('header.name')}</h1>
        <p className="hero-title">{t('header.title')}</p>
        <p className="hero-intro">{t('hero.intro')}</p>
        <p className="hero-description">{t('hero.description')}</p>

        <div className="hero-actions">
          <button type="button" className="primary-btn" onClick={onScrollToContact}>
            {t('hero.primary_cta')}
          </button>
          <a
            href="https://www.instagram.com/kevin.h______"
            className="secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            {t('hero.secondary_cta')}
          </a>
        </div>

        <div className="tag-row">
          {heroTags?.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        <div className="mini-panel">
          <p className="panel-kicker">{t('hero.panel_title')}</p>
          <p>{t('hero.panel_text')}</p>
        </div>
      </div>
    </section>
  );
};