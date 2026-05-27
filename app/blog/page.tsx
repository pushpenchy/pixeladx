"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGrid } from "@/components/animated-grid"
import { GlassCard, SectionHeader } from "@/components/ui-components"

const categories = [
  "All",
  "Industry News",
  "Product Updates",
  "Tutorials",
  "Case Studies",
  "AI & Machine Learning",
]

const featuredPost = {
  title: "The Future of AI-Powered Advertising: 2024 Trends and Predictions",
  excerpt: "Explore the cutting-edge AI technologies that are reshaping the advertising landscape and learn how to stay ahead of the curve.",
  author: "Sarah Miller",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  category: "AI & Machine Learning",
  slug: "future-ai-advertising-2024",
}

const posts = [
  {
    title: "Maximizing ROAS with Programmatic Advertising",
    excerpt: "Learn proven strategies to optimize your return on ad spend using programmatic buying techniques.",
    author: "David Park",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Tutorials",
    slug: "maximizing-roas-programmatic",
  },
  {
    title: "Understanding Real-Time Bidding: A Complete Guide",
    excerpt: "Everything you need to know about RTB, from basics to advanced optimization strategies.",
    author: "Emily Zhang",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "Tutorials",
    slug: "understanding-rtb-guide",
  },
  {
    title: "Case Study: How TechCorp Increased Revenue by 300%",
    excerpt: "An in-depth look at how TechCorp leveraged our AI optimization to transform their ad performance.",
    author: "Michael Ross",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    category: "Case Studies",
    slug: "techcorp-case-study",
  },
  {
    title: "Privacy-First Advertising in a Cookieless World",
    excerpt: "Navigate the changing landscape of digital privacy and build effective advertising strategies.",
    author: "Lisa Johnson",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "Industry News",
    slug: "privacy-first-advertising",
  },
  {
    title: "New Feature: Advanced Audience Segmentation",
    excerpt: "Introducing our most powerful audience targeting tools yet with AI-powered segmentation.",
    author: "Alex Chen",
    date: "Dec 3, 2024",
    readTime: "4 min read",
    category: "Product Updates",
    slug: "advanced-audience-segmentation",
  },
  {
    title: "The Complete Guide to Native Advertising",
    excerpt: "Master the art of native advertising and create seamless ad experiences that convert.",
    author: "Sarah Miller",
    date: "Dec 1, 2024",
    readTime: "9 min read",
    category: "Tutorials",
    slug: "native-advertising-guide",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <AnimatedGrid />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              Insights &{" "}
              <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Stay up to date with the latest trends, tips, and insights in advertising technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative w-full md:w-80"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <GlassCard className="relative overflow-hidden group">
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium rounded-full">
                  Featured
                </div>
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                      <Tag className="w-3 h-3" />
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredPost.author}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="relative h-48 md:h-auto rounded-lg bg-gradient-to-br from-primary/20 via-card to-accent/20 flex items-center justify-center">
                    <div className="text-6xl font-bold text-gradient opacity-30 font-[family-name:var(--font-space-grotesk)]">
                      AI
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <GlassCard className="h-full group">
                    <div className="h-32 rounded-lg bg-gradient-to-br from-primary/10 via-card to-accent/10 mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-gradient opacity-30 font-[family-name:var(--font-space-grotesk)]">
                        {post.category.split(" ")[0]}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full mb-3">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
                Get the latest AdTech insights delivered directly to your inbox. No spam, unsubscribe anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
