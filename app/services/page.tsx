"use client"

import { motion } from "framer-motion"
import { 
  Layers, 
  Search, 
  ShoppingCart, 
  Brain, 
  BarChart3, 
  Newspaper,
  ArrowLeftRight,
  ArrowRight,
  Check
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGrid } from "@/components/animated-grid"
import { GlassCard, SectionHeader, AnimatedButton } from "@/components/ui-components"

const services = [
  {
    icon: Layers,
    title: "Programmatic Advertising",
    description: "Automated, data-driven ad buying across premium inventory with real-time optimization.",
    features: [
      "Real-time bidding (RTB)",
      "Private marketplace deals",
      "Guaranteed programmatic",
      "Cross-channel activation",
    ],
    color: "primary",
  },
  {
    icon: Search,
    title: "Search Feed Monetization",
    description: "Maximize revenue from search traffic with AI-powered ad serving and optimization.",
    features: [
      "Intent-based targeting",
      "Dynamic ad formatting",
      "Revenue optimization",
      "Traffic quality scoring",
    ],
    color: "accent",
  },
  {
    icon: ShoppingCart,
    title: "Media Buying",
    description: "Strategic media planning and buying across digital and traditional channels.",
    features: [
      "Multi-channel strategy",
      "Audience segmentation",
      "Budget optimization",
      "Performance tracking",
    ],
    color: "primary",
  },
  {
    icon: Brain,
    title: "AI Campaign Optimization",
    description: "Machine learning algorithms that continuously optimize your campaigns for maximum ROI.",
    features: [
      "Predictive bidding",
      "Creative optimization",
      "Audience modeling",
      "Anomaly detection",
    ],
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive analytics and reporting with actionable insights.",
    features: [
      "Live dashboards",
      "Custom reporting",
      "Attribution modeling",
      "Competitive analysis",
    ],
    color: "primary",
  },
  {
    icon: Newspaper,
    title: "Native Advertising",
    description: "Seamlessly integrated ad experiences that match the look and feel of content.",
    features: [
      "Content recommendation",
      "In-feed placements",
      "Sponsored content",
      "Brand storytelling",
    ],
    color: "accent",
  },
  {
    icon: ArrowLeftRight,
    title: "Ad Exchange Solutions",
    description: "Connect buyers and sellers in a transparent, efficient marketplace.",
    features: [
      "Supply-side platform",
      "Demand-side platform",
      "Header bidding",
      "Yield management",
    ],
    color: "primary",
  },
]

const process = [
  { step: "01", title: "Discovery", description: "We analyze your goals, audience, and current performance." },
  { step: "02", title: "Strategy", description: "Our team develops a custom advertising strategy." },
  { step: "03", title: "Launch", description: "We set up and launch your optimized campaigns." },
  { step: "04", title: "Optimize", description: "Continuous AI-powered optimization for maximum ROI." },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGrid />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              Comprehensive{" "}
              <span className="text-gradient">AdTech Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              From programmatic advertising to AI optimization, we provide end-to-end solutions to maximize your advertising ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard 
                  className="h-full group"
                  glowColor={service.color as "primary" | "accent"}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    service.color === "primary" 
                      ? "from-primary/20 to-accent/20" 
                      : "from-accent/20 to-primary/20"
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${
                      service.color === "primary" ? "text-primary" : "text-accent"
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.div 
                    className="mt-6 pt-6 border-t border-border/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
                    >
                      Learn More 
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-card/30">
        <AnimatedGrid />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Our Process"
            title="How We Deliver Results"
            description="A proven methodology for advertising success."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <GlassCard className="h-full text-center">
                  <span className="text-5xl font-bold text-gradient font-[family-name:var(--font-space-grotesk)] opacity-50">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </GlassCard>
                
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_50%)]" />
            
            <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-6 text-balance">
                Ready to Scale Your{" "}
                <span className="text-gradient">Advertising?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                Let our experts help you develop a custom advertising strategy that drives results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <AnimatedButton variant="primary" size="lg">
                  Get Started
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg">
                  Schedule Consultation
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
