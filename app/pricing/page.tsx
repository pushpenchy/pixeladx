"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, HelpCircle, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGrid } from "@/components/animated-grid"
import { GlassCard, SectionHeader, AnimatedButton } from "@/components/ui-components"

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with programmatic advertising.",
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      "Up to 1M impressions/month",
      "Basic targeting options",
      "Standard analytics dashboard",
      "Email support",
      "1 ad account",
      "Basic API access",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For growing businesses that need advanced features and higher volume.",
    monthlyPrice: 1499,
    yearlyPrice: 1199,
    features: [
      "Up to 10M impressions/month",
      "Advanced AI targeting",
      "Real-time analytics",
      "Priority support",
      "5 ad accounts",
      "Full API access",
      "Custom reporting",
      "A/B testing tools",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations with complex needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited impressions",
      "Custom AI models",
      "Dedicated account manager",
      "24/7 phone support",
      "Unlimited ad accounts",
      "White-label options",
      "Custom integrations",
      "SLA guarantees",
      "On-premise deployment",
    ],
    highlighted: false,
  },
]

const faqs = [
  {
    question: "How does the billing work?",
    answer: "We offer both monthly and annual billing options. Annual plans come with a 20% discount. You can upgrade, downgrade, or cancel your plan at any time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers, and wire transfers for enterprise customers. All payments are processed securely through Stripe.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial for all plans. No credit card required to start. You will have access to all features during the trial period.",
  },
  {
    question: "Can I change plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any differences.",
  },
  {
    question: "What happens if I exceed my impression limit?",
    answer: "We will notify you when you reach 80% of your limit. If you exceed it, you can either upgrade your plan or pay for additional impressions at a competitive rate.",
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Yes, our Enterprise plan is fully customizable. Contact our sales team to discuss your specific requirements and get a tailored solution.",
  },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </motion.div>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <span className={`text-sm ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-secondary p-1 transition-colors"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent"
                animate={{ x: isYearly ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
              <span className="ml-2 px-2 py-0.5 text-xs bg-green-500/10 text-green-400 rounded-full">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="relative"
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <GlassCard 
                  className={`h-full flex flex-col ${plan.highlighted ? "border-primary/50 glow-primary" : ""}`}
                  glowColor={plan.highlighted ? "primary" : "accent"}
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-foreground">Custom</div>
                    )}
                    {plan.monthlyPrice && isYearly && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Billed annually (${(plan.yearlyPrice ?? 0) * 12}/year)
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <AnimatedButton 
                    variant={plan.highlighted ? "primary" : "outline"} 
                    className="w-full"
                  >
                    {plan.monthlyPrice ? "Get Started" : "Contact Sales"}
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </AnimatedButton>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our pricing and plans."
          />

          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard 
                  className="cursor-pointer" 
                  hover={false}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground">{faq.question}</h4>
                        <motion.div
                          initial={false}
                          animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-muted-foreground text-sm mt-3">{faq.answer}</p>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      className="text-muted-foreground"
                    >
                      +
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4 text-balance">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                Our team can help you build a tailored advertising solution that fits your unique requirements.
              </p>
              <AnimatedButton variant="primary" size="lg">
                Talk to Sales
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
