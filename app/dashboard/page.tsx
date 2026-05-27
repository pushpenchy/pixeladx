"use client"

import { motion } from "framer-motion"
import { 
  TrendingUp, 
  DollarSign, 
  Eye, 
  MousePointerClick,
  Globe2,
  Smartphone,
  Monitor,
  Tablet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedGrid } from "@/components/animated-grid"
import { GlassCard } from "@/components/ui-components"

const revenueData = [
  { name: "Jan", revenue: 45000, impressions: 120 },
  { name: "Feb", revenue: 52000, impressions: 145 },
  { name: "Mar", revenue: 48000, impressions: 138 },
  { name: "Apr", revenue: 61000, impressions: 167 },
  { name: "May", revenue: 55000, impressions: 152 },
  { name: "Jun", revenue: 67000, impressions: 183 },
  { name: "Jul", revenue: 72000, impressions: 198 },
  { name: "Aug", revenue: 69000, impressions: 192 },
  { name: "Sep", revenue: 78000, impressions: 215 },
  { name: "Oct", revenue: 85000, impressions: 234 },
  { name: "Nov", revenue: 91000, impressions: 251 },
  { name: "Dec", revenue: 98000, impressions: 270 },
]

const trafficSources = [
  { name: "Direct", value: 35, color: "#2563EB" },
  { name: "Programmatic", value: 40, color: "#00E5FF" },
  { name: "Search", value: 15, color: "#8B5CF6" },
  { name: "Social", value: 10, color: "#10B981" },
]

const deviceData = [
  { name: "Mobile", value: 58, icon: Smartphone },
  { name: "Desktop", value: 32, icon: Monitor },
  { name: "Tablet", value: 10, icon: Tablet },
]

const geoData = [
  { country: "United States", revenue: 42000, percentage: 35 },
  { country: "United Kingdom", revenue: 18000, percentage: 15 },
  { country: "Germany", revenue: 14400, percentage: 12 },
  { country: "France", revenue: 12000, percentage: 10 },
  { country: "Canada", revenue: 9600, percentage: 8 },
  { country: "Australia", revenue: 7200, percentage: 6 },
]

const campaigns = [
  { name: "Summer Sale Q3", status: "Active", spend: 12500, revenue: 45200, roas: 3.62 },
  { name: "Brand Awareness", status: "Active", spend: 8200, revenue: 24600, roas: 3.0 },
  { name: "Retargeting Pro", status: "Active", spend: 5400, revenue: 21600, roas: 4.0 },
  { name: "New Product Launch", status: "Paused", spend: 3200, revenue: 9600, roas: 3.0 },
]

const metrics = [
  { 
    label: "Total Revenue", 
    value: "$1.24M", 
    change: "+12.5%", 
    trend: "up",
    icon: DollarSign,
  },
  { 
    label: "Impressions", 
    value: "847M", 
    change: "+8.3%", 
    trend: "up",
    icon: Eye,
  },
  { 
    label: "CTR", 
    value: "4.82%", 
    change: "+0.5%", 
    trend: "up",
    icon: MousePointerClick,
  },
  { 
    label: "ROAS", 
    value: "4.2x", 
    change: "-0.3%", 
    trend: "down",
    icon: TrendingUp,
  },
]

export default function DashboardPage() {
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
              Dashboard Preview
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-balance">
              Your Advertising{" "}
              <span className="text-gradient">Command Center</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Experience our powerful analytics dashboard with real-time insights and AI-powered recommendations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard UI */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass rounded-2xl p-2 md:p-4 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card rounded-xl overflow-hidden">
              {/* Browser Chrome */}
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

              {/* Dashboard Content */}
              <div className="p-4 md:p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground">
                      Analytics Overview
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      Last updated: 2 minutes ago
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {["Today", "7D", "30D", "90D", "Custom"].map((period) => (
                      <button
                        key={period}
                        className={`px-3 py-1.5 text-xs rounded-md transition-colors ${
                          period === "30D" 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {period}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <GlassCard className="p-4" hover={false}>
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <metric.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className={`flex items-center gap-1 text-xs ${
                            metric.trend === "up" ? "text-green-400" : "text-red-400"
                          }`}>
                            {metric.trend === "up" ? (
                              <ArrowUpRight className="w-3 h-3" />
                            ) : (
                              <ArrowDownRight className="w-3 h-3" />
                            )}
                            {metric.change}
                          </span>
                        </div>
                        <div className="mt-3">
                          <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

                {/* Charts Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Revenue Chart */}
                  <motion.div
                    className="lg:col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <GlassCard className="h-full" hover={false}>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-foreground">Revenue Trend</h3>
                        <div className="flex items-center gap-4 text-xs">
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Revenue
                          </span>
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                            Impressions
                          </span>
                        </div>
                      </div>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={revenueData}>
                            <defs>
                              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#00E5FF" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="name" stroke="#666" fontSize={12} />
                            <YAxis stroke="#666" fontSize={12} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1a1a2e', 
                                border: '1px solid #333',
                                borderRadius: '8px',
                              }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="revenue" 
                              stroke="#2563EB" 
                              fillOpacity={1} 
                              fill="url(#colorRevenue)" 
                            />
                            <Area 
                              type="monotone" 
                              dataKey="impressions" 
                              stroke="#00E5FF" 
                              fillOpacity={1} 
                              fill="url(#colorImpressions)" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Traffic Sources */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <GlassCard className="h-full" hover={false}>
                      <h3 className="font-semibold text-foreground mb-6">Traffic Sources</h3>
                      <div className="h-48">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={trafficSources}
                              cx="50%"
                              cy="50%"
                              innerRadius={50}
                              outerRadius={70}
                              paddingAngle={5}
                              dataKey="value"
                            >
                              {trafficSources.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: '#1a1a2e', 
                                border: '1px solid #333',
                                borderRadius: '8px',
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-2 mt-4">
                        {trafficSources.map((source) => (
                          <div key={source.name} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                              <span className="text-muted-foreground">{source.name}</span>
                            </span>
                            <span className="text-foreground font-medium">{source.value}%</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>

                {/* Bottom Row */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Device Analytics */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <GlassCard className="h-full" hover={false}>
                      <h3 className="font-semibold text-foreground mb-6">Device Breakdown</h3>
                      <div className="space-y-4">
                        {deviceData.map((device) => (
                          <div key={device.name} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-2 text-muted-foreground">
                                <device.icon className="w-4 h-4" />
                                {device.name}
                              </span>
                              <span className="text-foreground font-medium">{device.value}%</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${device.value}%` }}
                                transition={{ duration: 1, delay: 0.8 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Geo Performance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <GlassCard className="h-full" hover={false}>
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-foreground">Top Regions</h3>
                        <Globe2 className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-3">
                        {geoData.slice(0, 5).map((geo, i) => (
                          <div key={geo.country} className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2">
                              <span className="text-muted-foreground w-4">{i + 1}.</span>
                              <span className="text-foreground">{geo.country}</span>
                            </span>
                            <span className="text-muted-foreground">${(geo.revenue / 1000).toFixed(1)}K</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>

                  {/* Campaign Performance */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <GlassCard className="h-full" hover={false}>
                      <h3 className="font-semibold text-foreground mb-6">Active Campaigns</h3>
                      <div className="space-y-3">
                        {campaigns.slice(0, 4).map((campaign) => (
                          <div key={campaign.name} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                              <span className={`w-2 h-2 rounded-full ${
                                campaign.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                              }`} />
                              <span className="text-foreground truncate">{campaign.name}</span>
                            </div>
                            <span className="text-primary font-medium">{campaign.roas}x</span>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                </div>

                {/* Campaign Table */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <GlassCard hover={false}>
                    <h3 className="font-semibold text-foreground mb-6">Campaign Performance</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border/50">
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Campaign</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Spend</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Revenue</th>
                            <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">ROAS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {campaigns.map((campaign) => (
                            <tr key={campaign.name} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                              <td className="py-3 px-4 text-sm text-foreground">{campaign.name}</td>
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                                  campaign.status === "Active" 
                                    ? "bg-green-500/10 text-green-400" 
                                    : "bg-yellow-500/10 text-yellow-400"
                                }`}>
                                  <span className={`w-1.5 h-1.5 rounded-full ${
                                    campaign.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                                  }`} />
                                  {campaign.status}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-sm text-muted-foreground text-right">
                                ${campaign.spend.toLocaleString()}
                              </td>
                              <td className="py-3 px-4 text-sm text-foreground text-right">
                                ${campaign.revenue.toLocaleString()}
                              </td>
                              <td className="py-3 px-4 text-sm text-primary font-medium text-right">
                                {campaign.roas}x
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
