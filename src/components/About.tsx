"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icons } from "./Icons";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:px-6 md:py-24 lg:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[20%] right-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-cyan/5 to-transparent blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Image with Orb Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Animated Orb Background */}
            <div className="absolute -inset-4 rounded-[32px] opacity-50 blur-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-[32px] animate-orb-rotate">
                <Image
                  src="/fx/orb.gif"
                  alt="Animated Orb"
                  fill
                  className="object-cover rounded-[32px] opacity-60"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Outer glow ring */}
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-primary/20 via-purple-glow/10 to-cyan/20 blur-3xl opacity-30 animate-pulse-slow" />

            {/* Image Container */}
            <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_40px_120px_rgba(0,0,0,0.5)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-40 z-10" />
              
              {/* Photo */}
              <Image
                src="/images/available.jpg"
                alt="Profile"
                width={600}
                height={700}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 z-20 pointer-events-none" style={{ backgroundSize: '200% 100%' }} />

              {/* Name badge */}
              <div className="absolute bottom-4 left-4 right-4 z-30 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="relative">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary to-purple-glow flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                        W
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-green-500 border-2 border-[#0B0F1F] shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg">Agus Efendi</h3>
                      <p className="text-primary text-xs sm:text-sm font-semibold">Founder & Lead Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-40"
            >
              <div className="glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                    <Icons.Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted/70">Experience</p>
                    <p className="text-white font-bold text-lg sm:text-xl">5+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 z-40 hidden sm:block"
            >
              <div className="glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/20 flex items-center justify-center">
                    <Icons.Globe className="h-4 w-4 sm:h-5 sm:w-5 text-cyan" />
                  </div>
                  <div>
                    <p className="text-xs text-muted/70">Projects</p>
                    <p className="text-white font-bold text-lg sm:text-xl">50+ Done</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Section label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-purple-glow/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-primary mb-4 sm:mb-6">
              <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-primary" />
              </span>
              About Me
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
                Hi, I'm
              </span>{" "}
              <span className="gradient-text bg-gradient-to-r from-primary via-purple-glow to-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                Agus Efendi
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-muted/90 font-light mb-6 sm:mb-8 leading-relaxed">
              Founder of{" "}
              <span className="text-white font-semibold">Zyne Labs Studio</span> — 
              a premium AI engineering studio based in Mojokerto, Indonesia.
            </p>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted/80 leading-relaxed mb-6 sm:mb-8">
              <p>
                I specialize in building{" "}
                <span className="text-white font-medium">AI-powered applications</span>,{" "}
                <span className="text-white font-medium">intelligent systems</span>, and{" "}
                <span className="text-white font-medium">automation solutions</span>{" "}
                for forward-thinking businesses worldwide.
              </p>
              <p>
                With over 5 years of experience in software development, I've helped 25+ clients 
                transform their ideas into scalable, production-ready solutions using cutting-edge 
                technologies like React, Python, TensorFlow, and cloud infrastructure.
              </p>
              <p>
                My passion lies in bridging the gap between complex AI technology and real-world 
                business applications — making advanced technology accessible and practical for 
                businesses of all sizes.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { value: "25+", label: "Happy Clients", sub: "Worldwide" },
                { value: "50+", label: "Projects", sub: "Delivered" },
                { value: "4.9", label: "Rating", sub: "Average" },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:from-primary group-hover:to-cyan transition-all duration-500">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-white/90">{stat.label}</div>
                  <div className="mt-0.5 text-[10px] sm:text-xs text-muted/60">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Expertise Tags */}
            <div className="mb-6 sm:mb-8">
              <p className="text-[10px] sm:text-xs font-semibold text-muted/60 uppercase tracking-wider mb-2 sm:mb-3">Expertise</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["AI & ML", "Full-Stack", "Mobile Apps", "Cloud", "Automation", "API"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md sm:rounded-lg bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-muted/70 border border-white/5 hover:border-primary/30 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/6285729753619"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary bg-[length:200%_100%] animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-glow to-primary blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2 text-white">
                  Let's Talk
                  <Icons.ArrowUpRight className="h-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              <a
                href="#works"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-xl"
              >
                <Icons.Play className="h-3.5 sm:h-4 sm:w-4" />
                View My Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-[10px] sm:text-xs text-muted/60">Follow me:</p>
              <div className="flex gap-2 sm:gap-3">
                {[
                  { icon: Icons.Github, href: "#", label: "GitHub" },
                  { icon: Icons.Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Icons.Instagram, href: "#", label: "Instagram" },
                  { icon: Icons.Twitter, href: "#", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group relative h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-muted/60 group-hover:text-white transition-colors" />
                    <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}