window.AppSections = window.AppSections || {};

window.AppSections.ContactSection = function ContactSection({
  t,
  socialLinks,
  message,
  contact,
  isSubmitting,
  submitted,
  onMessageChange,
  onContactChange,
  onFormSubmit,
  onIframeLoad,
  contactSectionRef
}) {
  return (
    <section className="contact-stage section-panel" id="contact" ref={contactSectionRef}>
      <div className="contact-column">
        <p className="section-kicker">{t('sections.contact.kicker')}</p>
        <h2>{t('sections.contact.title')}</h2>
        <p className="contact-intro">{t('sections.contact.intro')}</p>

        {!submitted ? (
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSc8HROJgEeWmIfuC5ed8OzsaN33w-p9dgCmhUbdylV5fYJ6cQ/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={onFormSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="message">{t('sections.contact.message_label')}</label>
              <textarea
                id="message"
                name="entry.462558302"
                className="form-input"
                placeholder={t('sections.contact.message_placeholder')}
                value={message}
                onChange={(event) => onMessageChange(event.target.value)}
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
                placeholder={t('sections.contact.contact_placeholder')}
                value={contact}
                onChange={(event) => onContactChange(event.target.value)}
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
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: 'none' }}
        title="hidden_iframe"
        onLoad={onIframeLoad}
      />
    </section>
  );
};