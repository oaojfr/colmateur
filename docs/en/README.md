# 🔍 Personal Data Breach Checker

*[Français](../fr/README.md) | [**English**](./README.md) | [Português](../pt/README.md)*

A modern and secure tool to check if your email addresses have been compromised in known data breaches. Protect your digital identity with personalized advice.

## ✨ Features

- **🛡️ Secure Verification**: Check your emails without data storage
- **⚡ Instant Results**: Fast verification with the latest databases
- **💡 Personalized Advice**: Security recommendations tailored to your situation
- **🌙 Dark/Light Mode**: Modern interface with theme support
- **📱 Responsive**: Optimized design for mobile and desktop
- **🔒 Privacy-Focused**: No personal data is stored

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm or bun

### Installation

1. Clone the project:
```bash
git clone <repo-url>
cd personal-data-breach-checker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: Next.js Route handlers

## 📁 Project Structure

```
src/
├── app/
│   ├── api/check-breach/     # API for breach verification
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Main layout
│   └── page.tsx              # Homepage
├── components/
│   └── BreachChecker.tsx     # Main verification component
```

## 🔧 API Configuration

To use the real HaveIBeenPwned API (recommended for production):

1. Get an API key from [HaveIBeenPwned](https://haveibeenpwned.com/API/Key)
2. Create a `.env.local` file:
```env
HIBP_API_KEY=your_api_key_here
```
3. Uncomment and use the `checkBreachesReal` function in `src/app/api/check-breach/route.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy automatically

### Other platforms

```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the Apache 2.0 License. See the `LICENSE` file for details.

## ⚠️ Disclaimer

This tool is provided for educational and security awareness purposes. Use it responsibly and respect third-party API terms of service.

---

**Security Reminder**: Regularly change your passwords and enable two-factor authentication wherever possible! 🔐
