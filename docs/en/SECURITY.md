# Security Policy

*[Français](../fr/SECURITY.md) | [**English**](./SECURITY.md) | [Português](../pt/SECURITY.md)*

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please report it responsibly.

### How to Report

1. **DO NOT** create a public issue for security vulnerabilities
2. Send a detailed email to [your-email@domain.com] with:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fixes if possible

### What We Commit To

- Acknowledge receipt of your report within 48 hours
- Provide an estimated timeline for fixes
- Keep you informed of progress
- Credit you for the discovery (if desired)

## Supported Versions

| Version | Security Support |
| ------- | ---------------- |
| 1.x.x   | ✅ Supported     |
| < 1.0   | ❌ Not supported |

## Security Best Practices

### For Users

- Never share your real passwords during testing
- Use test emails for demonstrations
- Always verify the URL before entering sensitive information

### For Developers

- Always validate user inputs
- Use HTTPS in production
- Never log sensitive information
- Respect third-party API rate limits
- Follow the principle of least privilege

## Dependencies

This project uses third-party dependencies. We recommend:

- Keeping dependencies up to date
- Using `npm audit` regularly
- Monitoring GitHub security alerts

## Contact

For non-urgent security questions, you can also create a discussion in the project's Discussions tab.
