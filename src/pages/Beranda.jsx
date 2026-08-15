import Hero from '../sections/beranda/Hero.jsx'
import FeaturesBento from '../sections/beranda/FeaturesBento.jsx'
import CtaSection from '../sections/beranda/CtaSection.jsx'

export default function Beranda() {
  return (
    <main className="flex-grow pt-[88px]">
      <Hero />
      <FeaturesBento />
      <CtaSection />
    </main>
  )
}
