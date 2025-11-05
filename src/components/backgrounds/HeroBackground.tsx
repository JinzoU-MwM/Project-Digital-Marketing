export function HeroBackground() {

  return (
    <div className="absolute inset-0">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* JNI brand color overlay for brand consistency */}
      <div className="absolute inset-0 bg-gradient-to-br from-jni-green/20 via-transparent to-jni-emerald/20" />
    </div>
  )
}