window.AppComponents = window.AppComponents || {};

window.AppComponents.BackgroundEffects = function BackgroundEffects({ mousePosition, particles }) {
  return (
    <>
      <div
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          opacity: mousePosition.x || mousePosition.y ? 1 : 0
        }}
      />

      <div className="particles-container" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
              background: particle.color
            }}
          />
        ))}
      </div>

      <div className="aurora-overlay" aria-hidden="true" />
    </>
  );
};