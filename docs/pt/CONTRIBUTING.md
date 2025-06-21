# Guia de Contribuição

*[Français](../fr/CONTRIBUTING.md) | [English](../en/CONTRIBUTING.md) | [**Português**](./CONTRIBUTING.md)*

Obrigado pelo seu interesse em contribuir para o Personal Data Breach Checker! 🎉

## Como Contribuir

### Reportar um Bug 🐛

1. Verifique se o bug já não foi reportado nas [Issues](../../issues)
2. Crie uma nova issue com:
   - Um título descritivo
   - Passos para reproduzir o bug
   - Comportamento esperado vs observado
   - Seu ambiente (SO, navegador, versão do Node.js)

### Sugerir uma Funcionalidade 💡

1. Verifique [Issues](../../issues) e [Discussions](../../discussions) existentes
2. Crie uma nova discussão ou issue para discutir a ideia
3. Aguarde feedback antes de começar o desenvolvimento

### Desenvolvimento 🛠️

#### Configuração do Ambiente

1. Faça fork do projeto
2. Clone seu fork:
```bash
git clone https://github.com/seu-usuario/personal-data-breach-checker.git
cd personal-data-breach-checker
```

3. Instale as dependências:
```bash
npm install
```

4. Crie uma branch para sua funcionalidade:
```bash
git checkout -b feature/minha-nova-funcionalidade
```

5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

#### Convenções de Código

- **TypeScript**: Use TypeScript para todos os novos arquivos
- **ESLint**: Siga as regras do ESLint (`npm run lint`)
- **Prettier**: O código será formatado automaticamente
- **Commits**: Use mensagens de commit claras e descritivas

#### Estrutura de Commits

```
type(scope): descrição

- feat: nova funcionalidade
- fix: correção de bug
- docs: documentação
- style: formatação, ponto e vírgula faltando, etc.
- refactor: refatoração de código
- test: adição ou modificação de testes
- chore: manutenção

Exemplos:
feat(api): adicionar suporte para API v2 do HaveIBeenPwned
fix(ui): corrigir exibição mobile do componente BreachChecker
docs(readme): atualizar instruções de instalação
```

#### Testes e Qualidade

Antes de submeter seu PR:

```bash
# Verificar linting
npm run lint

# Testar compilação
npm run build

# Testar localmente
npm run dev
```

### Submeter um Pull Request 📤

1. Faça push da sua branch para seu fork
2. Crie um Pull Request para a branch `main`
3. Preencha o template do PR com:
   - Descrição das mudanças
   - Tipos de mudanças (bug fix, feature, etc.)
   - Checklist de verificação
   - Screenshots se aplicável

## Diretrizes de Segurança 🔒

- Nunca faça commit de chaves de API reais
- Use `.env.example` para documentar variáveis de ambiente
- Sempre valide entradas do usuário
- Siga as melhores práticas de segurança web

## Recursos Úteis 📚

- [Documentação Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Manual TypeScript](https://www.typescriptlang.org/docs/)
- [API HaveIBeenPwned](https://haveibeenpwned.com/API/v3)

## Dúvidas? 🤔

- Crie uma [Discussion](../../discussions) para perguntas gerais
- Crie uma [Issue](../../issues) para bugs ou funcionalidades específicas

Obrigado por contribuir para a segurança digital! 🙏
