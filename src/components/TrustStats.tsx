import { motion } from "motion/react";
import { ShieldCheck, Users, Star, TrendingUp } from "lucide-react";

export function TrustStats() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "인증된 거래",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldCheck,
      value: "99.8%",
      label: "정품 인증률",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      value: "4.9",
      label: "고객 만족도",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      value: "50억+",
      label: "누적 거래액",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl text-white mb-1 font-light">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
