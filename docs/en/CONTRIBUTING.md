# Contributing Guide

*[Français](../fr/CONTRIBUTING.md) | [**English**](./CONTRIBUTING.md) | [Português](../pt/CONTRIBUTING.md)*

Thank you for your interest in contributing to Personal Data Breach Checker! 🎉

## How to Contribute

### Reporting a Bug 🐛

1. Check that the bug hasn't already been reported in [Issues](../../issues)
2. Create a new issue with:
   - A descriptive title
   - Steps to reproduce the bug
   - Expected vs observed behavior
   - Your environment (OS, browser, Node.js version)

### Suggesting a Feature 💡

1. Check existing [Issues](../../issues) and [Discussions](../../discussions)
2. Create a new discussion or issue to discuss the idea
3. Wait for feedback before starting development

### Development 🛠️

#### Environment Setup

1. Fork the project
2. Clone your fork:
```bash
git clone https://github.com/your-username/personal-data-breach-checker.git
cd personal-data-breach-checker
```

3. Install dependencies:
```bash
npm install
```

4. Create a branch for your feature:
```bash
git checkout -b feature/my-new-feature
```

5. Start the development server:
```bash
npm run dev
```

#### Code Conventions

- **TypeScript**: Use TypeScript for all new files
- **ESLint**: Follow ESLint rules (`npm run lint`)
- **Prettier**: Code will be formatted automatically
- **Commits**: Use clear and descriptive commit messages

#### Commit Structure

```
type(scope): description

- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting, missing semicolons, etc.
- refactor: code refactoring
- test: adding or modifying tests
- chore: maintenance

Examples:
feat(api): add support for HaveIBeenPwned API v2
fix(ui): fix mobile display of BreachChecker component
docs(readme): update installation instructions
```

#### Testing and Quality

Before submitting your PR:

```bash
# Check linting
npm run lint

# Test compilation
npm run build

# Test locally
npm run dev
```

### Submitting a Pull Request 📤

1. Push your branch to your fork
2. Create a Pull Request to the `main` branch
3. Fill out the PR template with:
   - Description of changes
   - Types of changes (bug fix, feature, etc.)
   - Verification checklist
   - Screenshots if applicable

## Security Guidelines 🔒

- Never commit real API keys
- Use `.env.example` to document environment variables
- Always validate user inputs
- Follow web security best practices

## Useful Resources 📚

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [HaveIBeenPwned API](https://haveibeenpwned.com/API/v3)

## Questions? 🤔

- Create a [Discussion](../../discussions) for general questions
- Create an [Issue](../../issues) for specific bugs or features

Thank you for contributing to digital security! 🙏
