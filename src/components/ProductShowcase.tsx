"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icons } from "./Icons";

const PRODUCTS = [
  {
    id: 1,
    title: "Dashboard Analytics AI",
    category: "AI & Machine Learning",
    description: "Pantau data customer, prediksi tren, dan generate report otomatis — tinggal buka satu layar.",
    image: "/works/dashboard-1.jpg",
    images: ["/works/dashboard-1.jpg", "/works/dashboard-2.jpg", "/works/dashboard-3.jpg"],
    tags: ["React", "Python", "TensorFlow", "PostgreSQL"],
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Transfer, cek saldo, scan QRIS — semua dalam satu app. Login via fingerprint, transaksi aman.",
    image: "/works/mobile-1.jpg",
    images: ["/works/mobile-1.jpg", "/works/mobile-2.jpg", "/works/mobile-3.jpg"],
    tags: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    color: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
  },
  {
    id: 3,
    title: "AI Chat Support",
    category: "AI & Automation",
    description: "Bot yang bales chat customer 24/7. Ngerti konteks, bisa escalate ke admin kalau stuck.",
    image: "/works/ai-1.jpg",
    images: ["/works/ai-1.jpg", "/works/ai-2.jpg", "/works/ai-3.jpg"],
    tags: ["Python", "OpenAI", "FastAPI", "Redis"],
    color: "from-purple-glow/20 to-purple-glow/5",
    border: "border-purple-glow/20",
  },
  {
    id: 4,
    title: "Sistem Backend Perusahaan",
    category: "Backend Infrastructure",
    description: "Arsitektur microservices yang handle ribuan request per menit. Auto-scale, zero downtime.",
    image: "/works/backend-1.jpg",
    images: ["/works/backend-1.jpg", "/works/backend-2.jpg", "/works/backend-3.jpg"],
    tags: ["Laravel", "MySQL", "Docker", "Kubernetes"],
    color: "from-green-500/20 to-green-500/5",
    border: "border-green-500/20",
  },
  {
    id: 5,
    title: "Monitoring Server",
    category: "DevOps & Monitoring",
    description: "Pantau CPU, memory, disk, dan response time. Kalau down, langsung dapat alert di HP.",
    image: "/works/system1.jpg",
    images: ["/works/system1.jpg", "/works/system2.jpg", "/works/system3.jpg"],
    tags: ["React", "Node.js", "Grafana", "Prometheus"],
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
  },
  {
    id: 6,
    title: "Platform Support Ticket",
    category: "Customer Experience",
    description: "AI auto-sort tiket, assign ke tim yang pas, dan kasih status update ke customer otomatis.",
    image: "/works/support-1.jpg",
    images: ["/works/support-1.jpg", "/works/support-2.jpg", "/works/support-3.jpg"],
    tags: ["Vue.js", "Python", "PostgreSQL", "WebSocket"],
    color: "from-cyan/20 to-cyan/5",
    border: "border-cyan/20",
  },
];

const CATEGORIES = ["All", "AI & Machine Learning", "Mobile Development", "Backend Infrastructure", "DevOps & Monitoring"];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="relative px-4 py-24 sm:px-6 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <p className="mono text-[11px] tracking-[0.3em] text-primary uppercase">
            Our Work
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-transparent">
              Project yang
            </span>{" "}
            <span className="gradient-text bg-gradient-to-r from-primary via-purple-glow to-cyan bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(99,102,241,0.3)]">
              udah kita rilis
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted/90">
            Bukan template — ini beneran produk yang kita bangun buat klien. Klik buat lihat detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-purple-glow text-white border-primary/30 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                  : "bg-white/[0.02] text-muted/70 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setCurrentImageIndex(0);
                }}
              >
                <div className={`gradient-border-animated relative h-full overflow-hidden rounded-2xl border bg-gradient-to-b ${product.color} ${product.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(99,102,241,0.2)]`}>
                  {/* Product Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Hover play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                        <Icons.ArrowUpRight className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-lg bg-black/60 backdrop-blur-xl px-3 py-1.5 text-xs font-semibold text-white border border-white/10">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted/80">
                      {product.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-muted/70 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0F1F] border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/60 backdrop-blur-xl p-2 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Icons.X className="h-5 w-5 text-white" />
                </button>

                {/* Image carousel */}
                <div className="relative aspect-[16/9] bg-black">
                  <Image
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />

                  {/* Navigation arrows */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => Math.max(0, prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 backdrop-blur-xl p-3 border border-white/10 hover:bg-white/10 transition-colors disabled:opacity-30"
                        disabled={currentImageIndex === 0}
                      >
                        <Icons.ChevronLeft className="h-5 w-5 text-white" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => Math.min(selectedProduct.images.length - 1, prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 backdrop-blur-xl p-3 border border-white/10 hover:bg-white/10 transition-colors disabled:opacity-30"
                        disabled={currentImageIndex === selectedProduct.images.length - 1}
                      >
                        <Icons.ChevronRight className="h-5 w-5 text-white" />
                      </button>
                    </>
                  )}

                  {/* Image indicators */}
                  {selectedProduct.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProduct.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? "w-6 bg-primary" : "w-2 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Product details */}
                <div className="p-8">
                  <div className="mb-2">
                    <span className="rounded-lg bg-primary/20 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProduct.title}
                  </h3>
                  <p className="text-muted/80 leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Tech stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-white/[0.04] px-4 py-2 text-sm font-medium text-muted/70 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex gap-4">
                    <a
                      href="https://wa.me/6287874722632"
                      className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold"
                    >
                      Start Similar Project
                      <Icons.ArrowUpRight className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="btn-secondary flex items-center justify-center px-6 py-3 rounded-xl font-semibold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}