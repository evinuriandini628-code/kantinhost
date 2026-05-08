# KantinHost

KantinHost adalah client area dan dashboard manager untuk layanan hosting berbasis Pterodactyl.

## Struktur Project

```txt
/
├── public/
│   └── assets/         # Taruh Logo KH, Maskot Fox/Serigala, & Server Iso di sini
├── components/         # Komponen Glassmorphism seperti Navbar, Card, Layout, dll
├── pages/              # Halaman dashboard, auth, billing, server manager, dll
├── styles/             # Tailwind & Global CSS
├── next.config.js
├── tailwind.config.js  # Konfigurasi warna neon & glass
└── package.json
```

## Fitur Awal

- Dashboard client area
- List server user
- Detail server Pterodactyl
- Claim/link server dengan token
- Billing dan invoice
- Support ticket
- Tampilan dark neon glassmorphism

## Asset

Letakkan asset di folder:

```txt
public/assets/
```

Rekomendasi nama file:

```txt
kantinhost-logo.png
kantinhost-icon.png
kh-fox-default.png
kh-fox-avatar.png
server-iso.png
```
