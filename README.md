# 💙 DilSeDan — 🇮🇳 India's Transparent Charity Platform on Polygon Blockchain

**DilSeDan** is a human-made, trust-first donation platform designed for India, built with love and technology. It brings **transparency**, **empathy**, and **empowerment** into the donation space using modern UI and blockchain accountability — powered by [Polygon](https://polygon.technology/).

---

## 🌟 Features

- 🇮🇳 Beautiful Indian-style UI in **English & Hindi** (i18n)
- 💰 **Donate with confidence** – see where your money is going
- 📄 **Tax Calculator** for 80G exemption
- 🔍 **Impact Preview** – know your donations made a difference
- 📊 **Admin Dashboard** to track campaigns and analytics
- 🔗 **Polygon Blockchain Integration** (Planned)
  - Immutable Donation Ledger
  - Smart Contracts for Donation & Fund Allocation
- 🎨 Light/Dark themes with beautiful UI components
- 📲 Fully responsive and mobile-optimized

---

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite  
- **State**: Zustand  
- **Styling**: Tailwind CSS  
- **Internationalization**: `i18next` (English, Hindi)  
- **Blockchain**: Polygon + Solidity (Planned)  
- **Build Tools**: PNPM + Turborepo  
- **UI Components**: Custom built + Toasts, Buttons, Progress

---

## 📁 Folder Structure

```bash
DilSeDan/
├── apps/
│   └── frontend/
│       ├── src/
│       │   ├── components/
│       │   │   ├── donation/
│       │   │   │   ├── DonationForm.tsx
│       │   │   │   ├── ImpactPreview.tsx
│       │   │   │   └── TaxCalculator.tsx
│       │   │   ├── layout/
│       │   │   │   ├── Footer.tsx
│       │   │   │   └── Navbar.tsx
│       │   │   └── ui/
│       │   │       ├── button.tsx
│       │   │       ├── progress.tsx
│       │   │       ├── toast.tsx
│       │   │       └── toaster.tsx
│       │   ├── hooks/
│       │   │   └── use-toast.ts
│       │   ├── i18n/
│       │   │   ├── locales/
│       │   │   │   ├── en.json
│       │   │   │   └── hi.json
│       │   │   └── index.ts
│       │   ├── lib/
│       │   │   └── utils.ts
│       │   ├── pages/
│       │   │   ├── HomePage.tsx
│       │   │   ├── DonatePage.tsx
│       │   │   ├── ImpactPage.tsx
│       │   │   ├── TransparencyPage.tsx
│       │   │   ├── AboutPage.tsx
│       │   │   ├── ContactPage.tsx
│       │   │   ├── CampaignsPage.tsx
│       │   │   ├── VolunteerPage.tsx
│       │   │   ├── AdminPage.tsx
│       │   │   └── DashboardPage.tsx
│       │   ├── store/
│       │   │   ├── donationStore.ts
│       │   │   └── themeStore.ts
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css
│       ├── vite.config.ts
│       ├── tailwind.config.js
│       └── package.json
├── contracts/
│   ├── Donation.sol
│   └── FundAllocation.sol
├── pnpm-workspace.yaml
├── turbo.json
├── README.md
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### 🧰 Prerequisites

- Node.js ≥ v18  
- [PNPM](https://pnpm.io) installed globally  
- Git & VS Code

### 🛠 Setup

```bash
git clone https://github.com/Rafi-Luffy/DilSeDan.git
cd DilSeDan
pnpm install
pnpm dev
```

Runs at: [http://localhost:5173](http://localhost:5173)

---

## ⛓️ Polygon Blockchain (Planned Phase)

- 🧠 **Smart Contracts**:
  - `Donation.sol` — Handles secure donations  
  - `FundAllocation.sol` — Tracks where funds are used  

- 🚀 **Features**:
  - Publicly auditable donation history  
  - Transparent fund usage — view every rupee's route  
  - Gas-free UX for donors (read-only transparency)

---

## 📷 Screenshots (coming soon...)

- 🏠 Home Page  
- 💸 Donate Page  
- 📊 Admin Dashboard  
- 🔎 Impact Tracker

---

## 🤝 Contributing

We welcome real humans to contribute 💛

```bash
git checkout -b feature/your-amazing-feature
git commit -m "Added world-changing feature"
git push origin feature/your-amazing-feature
```

Then create a pull request!

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---

## 🙌 Made With Love

By [Rafi-Luffy](https://github.com/Rafi-Luffy) and team — for a more honest, transparent, and hopeful India 🇮🇳

