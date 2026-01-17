# Zyne Labs Studio — Premium Portfolio

Versi ini dibuat supaya tampilan lebih **premium** tanpa menghapus identitas desain inti (GIF FX, stack icons, layout utama). Animasi menggunakan **GSAP + ScrollTrigger** (lebih aman untuk Next.js App Router).

## Jika sebelumnya muncul error `createContext is not a function`
Error itu umumnya terjadi karena salah satu dari ini:
- Ada **sisa build / install lama** (`.next`, `node_modules`) yang bentrok.
- Ada dependency (mis. `framer-motion`) yang kepanggil di **Server Component (RSC)**.
- Ada **React versi dobel** di dependency tree.

> Catatan: Project pada zip ini **tidak memakai `framer-motion`**. Kalau kamu pernah install `framer-motion` di project lama, pastikan clean install seperti langkah di bawah.

## Cara jalanin (Clean Install)
1) Pastikan Node.js LTS terpasang.
2) Di folder project:

```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules, .next -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

npm install
npm run dev
```

Kalau kamu pakai CMD:
```bash
rmdir /s /q node_modules .next
del package-lock.json
npm install
npm run dev
```

## Struktur penting
- `src/app/page.tsx` : landing page
- `src/components/usePatrickMotion.ts` : animasi GSAP (client-only)
- `public/fx/*` : GIF FX
- `public/tech/*` : icon stack

---
Kalau kamu mau aku samain 1:1 dengan "website terbaru" kamu, kirim screenshot/link referensinya—nanti aku adjust spacing, typography scale, dan micro-interactions biar persis.
