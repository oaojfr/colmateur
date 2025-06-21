# 🔍 Personal Data Breach Checker

*[Français](../fr/README.md) | [English](../en/README.md) | [**Português**](./README.md)*

Uma ferramenta moderna e segura para verificar se seus endereços de email foram comprometidos em vazamentos de dados conhecidos. Proteja sua identidade digital com conselhos personalizados.

## ✨ Funcionalidades

- **🛡️ Verificação Segura**: Verifique seus emails sem armazenamento de dados
- **⚡ Resultados Instantâneos**: Verificação rápida com as bases de dados mais recentes
- **💡 Conselhos Personalizados**: Recomendações de segurança adaptadas à sua situação
- **🌙 Modo Escuro/Claro**: Interface moderna com suporte a temas
- **📱 Responsivo**: Design otimizado para mobile e desktop
- **🔒 Foco na Privacidade**: Nenhum dado pessoal é armazenado

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o projeto:
```bash
git clone <repo-url>
cd personal-data-breach-checker
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **API**: Route handlers do Next.js

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/check-breach/     # API para verificação de vazamentos
│   ├── globals.css           # Estilos globais
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/
│   └── BreachChecker.tsx     # Componente principal de verificação
```

## 🔧 Configuração da API

Para usar a API real do HaveIBeenPwned (recomendado para produção):

1. Obtenha uma chave de API em [HaveIBeenPwned](https://haveibeenpwned.com/API/Key)
2. Crie um arquivo `.env.local`:
```env
HIBP_API_KEY=sua_chave_api_aqui
```
3. Descomente e use a função `checkBreachesReal` em `src/app/api/check-breach/route.ts`

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do seu código para o GitHub
2. Conecte seu repositório ao [Vercel](https://vercel.com)
3. Deploy automático

### Outras plataformas

```bash
npm run build
npm start
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer fork do projeto
2. Criar uma branch para sua funcionalidade
3. Fazer commit das suas mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

Veja [CONTRIBUTING.md](../../CONTRIBUTING.md) para diretrizes detalhadas.

## 📄 Licença

Este projeto está licenciado sob a Licença Apache 2.0. Veja o arquivo `LICENSE` para detalhes.

## ⚠️ Aviso Legal

Esta ferramenta é fornecida para fins educacionais e de conscientização sobre segurança. Use-a de forma responsável e respeite os termos de serviço de APIs de terceiros.

---

**Lembrete de Segurança**: Altere suas senhas regularmente e ative a autenticação de dois fatores sempre que possível! 🔐
