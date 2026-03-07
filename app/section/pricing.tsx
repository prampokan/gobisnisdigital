import PricingCard from "@/components/pricing-card";

const PRICING = [
  {
    badge: "Bisnis Personal",
    title:
      "Cocok untuk personal brand, freelancer, UMKM kecil, atau bisnis yang baru mulai go digital.",
    price: "Rp 1.000.000",
    description:
      "Dengan paket ini, kamu sudah bisa memiliki landing page profesional untuk memperkenalkan bisnis dan mengarahkan calon pelanggan langsung ke WhatsApp.",
    features: [
      "Landing Page Profesional",
      "Desain modern & clean",
      "Mobile friendly",
      "Integrasi tombol WhatsApp",
      "Struktur halaman siap closing",
      "Setup hosting & deploy",
      "1x revisi",
    ],
  },
  {
    badge: "Bisnis Perusahaan",
    title:
      "Cocok untuk perusahaan, brand yang sedang berkembang, atau bisnis yang ingin terlihat lebih profesional dan kredibel.",
    price: "Rp 2.000.000",
    description:
      "Landing page akan dibuat lebih lengkap dengan struktur yang mendukung marketing dan meningkatkan kepercayaan pelanggan.",
    features: [
      "Landing Page Premium",
      "Desain lebih eksklusif",
      "Mobile optimized",
      "Struktur marketing & conversion",
      "Integrasi WhatsApp / form leads",
      "Basic SEO",
      "Setup hosting & deploy",
      "2x revisi",
    ],
  },
  {
    badge: "Bisnis Custom",
    title:
      "Untuk bisnis yang membutuhkan fitur khusus atau kebutuhan yang lebih kompleks.",
    price: "Contact Us",
    description:
      "Kami akan membantu merancang solusi website yang sesuai dengan kebutuhan bisnis kamu.",
    features: [
      "Landing page lebih dari 1 halaman",
      "Integrasi payment gateway",
      "Integrasi automation / CRM",
      "Sistem booking / reservation",
      "Dashboard admin",
      "Integrasi API atau sistem lain",
    ],
  },
];
export default function Pricing() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center gap-y-5">
        <h1 className="text-xl sm:text-4xl font-semibold tracking-tighter text-accent-foreground text-start sm:text-center">
          Mulai Dengan 1 Juta Rupiah!
        </h1>

        <p className="text-center max-w-2xl text-lg text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ducimus
          fugiat est laudantium officiis doloremque, sunt inventore dolorum quo,
          cum ea ipsum architecto nulla nemo deleniti, animi dicta tempora
          veritatis!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6 mt-10">
          {PRICING.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
