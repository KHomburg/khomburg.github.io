window.AppHooks = window.AppHooks || {};

window.AppHooks.useFloatingParticles = function useFloatingParticles() {
  const [particles, setParticles] = React.useState([]);

  React.useEffect(() => {
    const palette = [
      'rgba(255, 118, 87, 0.55)',
      'rgba(112, 224, 201, 0.45)',
      'rgba(255, 209, 102, 0.42)',
      'rgba(122, 162, 255, 0.42)'
    ];

    const newParticles = Array.from({ length: 24 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 18 + 14,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.28 + 0.12,
      color: palette[index % palette.length]
    }));

    setParticles(newParticles);
  }, []);

  return particles;
};