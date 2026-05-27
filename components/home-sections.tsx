"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Sparkles, Zap, BarChart3, Globe2 } from "lucide-react"
import dynamic from "next/dynamic"
import { AnimatedButton, GlassCard, StatsCounter, SectionHeader } from "@/components/ui-components"
import { AnimatedGrid } from "@/components/animated-grid"

const Globe3D = dynamic(() => import("@/components/globe-3d").then(mod => mod.Globe3D), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full animate-pulse" />
})

const trustBadges = [
  "SOC 2 Certified",
  "GDPR Compliant",
  "ISO 27001",
  "99.9% Uptime",
]

const clientLogos = [
  "TechCorp", "MediaMax", "AdVenture", "DataFlow", "CloudBase", "NetScale"
]

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Optimization",
    description: "Machine learning algorithms that continuously optimize your campaigns for maximum ROI.",
  },
  {
    icon: Zap,
    title: "Real-Time Bidding",
    description: "Millisecond-level programmatic bidding across premium ad exchanges worldwide.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into campaign performance with predictive analytics and reporting.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Access to 5B+ daily impressions across 190+ countries and territories.",
  },
]

const stats = [
  { value: 5, suffix: "B+", label: "Daily Impressions" },
  { value: 190, suffix: "+", label: "Countries Reached" },
  { value: 99.9, suffix: "%", label: "Platform Uptime" },
  { value: 350, suffix: "%", label: "Avg. ROAS Increase" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedGrid />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Next-Gen AdTech Platform</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight text-balance">
              Scale Your Advertising With{" "}
              <span className="text-gradient">AI-Powered</span>{" "}
              Monetization
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty">
              Pixel ADX delivers intelligent programmatic advertising solutions that maximize revenue and optimize performance across all channels.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <AnimatedButton variant="primary" size="lg">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                <Play className="inline-block mr-2 w-5 h-5" />
                Book Demo
              </AnimatedButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {trustBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-3 py-1 text-xs text-muted-foreground bg-secondary/50 rounded-full border border-border/50"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <Globe3D />
            
            <motion.div
              className="absolute top-10 right-10 glass rounded-lg p-4 w-48"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Live Data</span>
              </div>
              <div className="text-2xl font-bold text-foreground">$12.4M</div>
              <div className="text-xs text-muted-foreground">Daily Revenue</div>
            </motion.div>

            <motion.div
              className="absolute bottom-20 left-0 glass rounded-lg p-4 w-52"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-sm text-muted-foreground mb-1">CTR Performance</div>
              <div className="flex items-end gap-1 h-12">
                {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary to-accent rounded-sm"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1.6 + i * 0.1 }}
                  />
                ))}
              </div>
              <div className="mt-2 flex items-center gap-1">
                <span className="text-green-400 text-sm">+24.5%</span>
                <span className="text-xs text-muted-foreground">vs last week</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-border/30 bg-card/20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading brands and agencies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl font-bold text-muted-foreground/40 font-[family-name:var(--font-space-grotesk)] hover:text-muted-foreground/60 transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <AnimatedGrid />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Features"
          title="Everything You Need to Dominate Digital Advertising"
          description="Our comprehensive platform provides all the tools and insights you need to run successful advertising campaigns at scale."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full" glowColor={i % 2 === 0 ? "primary" : "accent"}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <StatsCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DashboardPreview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Platform"
          title="Powerful Dashboard for Complete Campaign Control"
          description="Monitor, analyze, and optimize your advertising campaigns with our intuitive analytics dashboard."
        />

        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="glass rounded-2xl p-2 md:p-4 overflow-hidden">
            <div className="bg-card rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-secondary rounded-md text-xs text-muted-foreground">
                    dashboard.pixeladx.io
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { label: "Total Revenue", value: "$1.24M", change: "+12.5%" },
                    { label: "Impressions", value: "847M", change: "+8.3%" },
                    { label: "CTR", value: "4.82%", change: "+0.5%" },
                    { label: "ROAS", value: "4.2x", change: "+18.2%" },
                  ].map((metric) => (
                    <div key={metric.label} className="glass rounded-lg p-4">
                      <div className="text-sm text-muted-foreground">{metric.label}</div>
                      <div className="text-2xl font-bold text-foreground mt-1">{metric.value}</div>
                      <div className="text-sm text-green-400 mt-1">{metric.change}</div>
                    </div>
                  ))}
                </div>

                <div className="glass rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground">Revenue Overview</h3>
                    <div className="flex gap-2">
                      {["7D", "30D", "90D"].map((period) => (
                        <button
                          key={period}
                          className="px-3 py-1 text-xs rounded-md bg-secondary text-muted-foreground hover:bg-secondary/80"
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="h-48 flex items-end gap-2">
                    {[65, 45, 78, 52, 89, 67, 94, 71, 85, 62, 91, 76].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t-sm"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,229,255,0.15),transparent_50%)]" />
          
          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-6 text-balance"
            >
              Ready to Transform Your{" "}
              <span className="text-gradient">Advertising Strategy?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty"
            >
              Join thousands of advertisers who are already maximizing their ROI with Pixel ADX. Start your free trial today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <AnimatedButton variant="primary" size="lg">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Talk to Sales
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
