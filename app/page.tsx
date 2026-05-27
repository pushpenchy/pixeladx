import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import {
  HeroSection,
  ClientLogos,
  FeaturesSection,
  StatsSection,
  DashboardPreview,
  CTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <FeaturesSection />
      <StatsSection />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </main>
  )
}
