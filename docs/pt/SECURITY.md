# Política de Segurança

*[Français](../fr/SECURITY.md) | [English](../en/SECURITY.md) | [**Português**](./SECURITY.md)*

## Relatando Vulnerabilidades de Segurança

Se você descobrir uma vulnerabilidade de segurança neste projeto, por favor reporte de forma responsável.

### Como Reportar

1. **NÃO** crie uma issue pública para vulnerabilidades de segurança
2. Envie um email detalhado para [seu-email@domain.com] com:
   - Descrição da vulnerabilidade
   - Passos para reproduzir o problema
   - Impacto potencial
   - Sugestões de correção se possível

### Nosso Compromisso

- Confirmar o recebimento do seu relatório em 48 horas
- Fornecer uma estimativa de tempo para correções
- Mantê-lo informado do progresso
- Creditá-lo pela descoberta (se desejado)

## Versões Suportadas

| Versão  | Suporte de Segurança |
| ------- | -------------------- |
| 1.x.x   | ✅ Suportada         |
| < 1.0   | ❌ Não suportada     |

## Boas Práticas de Segurança

### Para Usuários

- Nunca compartilhe suas senhas reais durante testes
- Use emails de teste para demonstrações
- Sempre verifique a URL antes de inserir informações sensíveis

### Para Desenvolvedores

- Sempre valide entradas do usuário
- Use HTTPS em produção
- Nunca registre informações sensíveis em logs
- Respeite os limites de taxa de APIs de terceiros
- Siga o princípio do menor privilégio

## Dependências

Este projeto usa dependências de terceiros. Recomendamos:

- Manter as dependências atualizadas
- Usar `npm audit` regularmente
- Monitorar alertas de segurança do GitHub

## Contato

Para questões de segurança não urgentes, você também pode criar uma discussão na aba Discussions do projeto.
