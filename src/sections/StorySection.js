window.AppSections = window.AppSections || {};

window.AppSections.StorySection = function StorySection({ t }) {
  return (
    <section className="story-section section-panel">
      <div className="section-heading">
        <p className="section-kicker">{t('sections.about.kicker')}</p>
        <h2>{t('sections.about.title')}</h2>
      </div>

      <div className="story-layout">
        <article className="story-card story-card-main">
          <p>{t('sections.about.p1')}</p>
          <p>{t('sections.about.p2')}</p>
        </article>

      </div>
    </section>
  );
};