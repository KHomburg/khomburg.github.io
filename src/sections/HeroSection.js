window.AppSections = window.AppSections || {};

window.AppSections.HeroSection = function HeroSection({
  t,
  onScrollToContact
}) {
  const heroDescription = t('hero.description');

  return (
    <section className="hero-card">
      <div className="hero-copy">
        <p className="eyebrow">{t('hero.eyebrow')}</p>
        <h1>{t('header.name')}</h1>
        <p className="hero-title">{t('header.title')}</p>
        <p className="hero-intro">{t('hero.intro')}</p>
        {heroDescription ? <p className="hero-description">{heroDescription}</p> : null}
      </div>

      <div className="hero-cta-stage">

        <div className="cta-billboard">

          <button type="button" className="primary-btn primary-btn-hero cta-btn-with-icon" onClick={onScrollToContact}>
            <span className="primary-btn-label">{t('hero.primary_cta')}</span>
            <span className="cta-btn-icon" aria-hidden="true">
              <i className="fa-regular fa-hand-pointer"></i>
            </span>
          </button>

          <a
            href="https://www.instagram.com/kevin.h______"
            className="secondary-btn secondary-btn-hero"
            target="_blank"
            rel="noreferrer"
          >
            {t('hero.secondary_cta')}
          </a>
        </div>
      </div>

      <div className="hero-copy-bottom">

        <div className="mini-panel hero-panel">
          <p className="panel-kicker">{t('hero.panel_title')}</p>
          <p>{t('hero.panel_text')}</p>
        </div>
      </div>
    </section>
  );
};