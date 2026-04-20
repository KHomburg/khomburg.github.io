window.AppSections = window.AppSections || {};

window.AppSections.StorySection = function StorySection({ t, vibeCards }) {
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

        <div className="story-card-list">
          {/* {vibeCards.map((card, index) => (
            <article key={card.title} className={`story-card tilt-${index + 1}`}>
              <p className="story-card-kicker">{card.kicker}</p>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))} */}
        </div>
      </div>
    </section>
  );
};