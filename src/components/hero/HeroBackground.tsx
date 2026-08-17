export function HeroBackground() {
  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        backgroundImage: 'url("/hud-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Bottom fade out to blend with the next section */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--background))"
        }}
      />
    </div>
  );
}
