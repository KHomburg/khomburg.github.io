window.AppComponents = window.AppComponents || {};

window.AppComponents.LanguageSwitcher = function LanguageSwitcher({ language, onToggle }) {
  return (
    <div className="language-switcher">
      <button onClick={onToggle} className="lang-btn" type="button">
        {language === 'en' ? 'DE' : 'EN'}
      </button>
    </div>
  );
};