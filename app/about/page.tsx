"use client"

import { motion } from "framer-motion"
import { Target, Eye, Rocket, Users, Award, Globe } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGrid } from "@/components/animated-grid"
import { GlassCard, SectionHeader } from "@/components/ui-components"

const milestones = [
  { year: "2019", title: "Founded", description: "Pixel ADX was founded with a vision to revolutionize digital advertising." },
  { year: "2020", title: "Series A", description: "Raised $15M to expand our AI-powered advertising platform." },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to 50+ countries with 100+ employees." },
  { year: "2022", title: "Series B", description: "Secured $45M to accelerate product development and market growth." },
  { year: "2023", title: "1B Impressions", description: "Reached 1 billion daily impressions milestone." },
  { year: "2024", title: "Industry Leader", description: "Recognized as a top 10 AdTech platform globally." },
]

const values = [
  { icon: Target, title: "Innovation First", description: "We push the boundaries of what is possible in advertising technology." },
  { icon: Users, title: "Customer Success", description: "Our clients success is our success. We are committed to delivering results." },
  { icon: Award, title: "Excellence", description: "We strive for excellence in everything we do, from code to customer service." },
  { icon: Globe, title: "Global Impact", description: "We aim to make digital advertising accessible and effective worldwide." },
]

const team = [
  { name: "Alex Chen", role: "CEO & Co-Founder", image: "AC" },
  { name: "Sarah Miller", role: "CTO & Co-Founder", image: "SM" },
  { name: "David Park", role: "VP of Engineering", image: "DP" },
  { name: "Emily Zhang", role: "VP of Product", image: "EZ" },
  { name: "Michael Ross", role: "VP of Sales", image: "MR" },
  { name: "Lisa Johnson", role: "VP of Marketing", image: "LJ" },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              Powering the Future of{" "}
              <span className="text-gradient">Intelligent Advertising</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              We are a team of engineers, data scientists, and advertising experts on a mission to transform how businesses connect with their audiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to advanced advertising technology, enabling businesses of all sizes to reach their target audiences efficiently and effectively through AI-powered solutions.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the global standard in intelligent advertising, where every ad impression is optimized by AI to deliver maximum value for advertisers and relevant experiences for consumers.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Journey"
            title="From Startup to Industry Leader"
            description="A timeline of our growth and key milestones."
          />

          <div className="mt-16 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <GlassCard hover={false} className="inline-block">
                      <span className="text-3xl font-bold text-gradient font-[family-name:var(--font-space-grotesk)]">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mt-2">{milestone.title}</h3>
                      <p className="text-muted-foreground mt-2">{milestone.description}</p>
                    </GlassCard>
                  </div>
                  
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shrink-0 relative z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent animate-ping opacity-30" />
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <AnimatedGrid />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Our Values"
            title="What Drives Us Forward"
            description="The core principles that guide everything we do."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 relative bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Our Team"
            title="Meet the People Behind Pixel ADX"
            description="A diverse team of experts passionate about advertising technology."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground font-[family-name:var(--font-space-grotesk)]">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <Rocket className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4 text-balance">
                Join Our Growing Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                We are always looking for talented individuals to join our mission. Check out our open positions.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Open Positions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
