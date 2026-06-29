# HANDOFF TÉCNICO — projeto.aodigital.net.br

> **Para:** sessão Cowork + Lovable que vai criar a página **`/questionario`**.
> **Objetivo deste doc:** descrever exatamente o estado do GitHub/deploy e **como anexar a página `projeto.aodigital.net.br/questionario` SEM quebrar a conexão e o deploy atuais**, usando **o mesmo pipeline**.

---

## 0. Repositório (instalado e em produção)

- **GitHub:** https://github.com/midiai9/projetoaodigital  → **público**
- **Domínio:** https://projeto.aodigital.net.br  (Plesk · servidori9.com.br)
- **Branches:**
  - **`main`** = código-fonte (Vite + React 18 + TypeScript + Tailwind 3 + Framer Motion).
  - **`deploy`** = saída **buildada** (HTML/CSS/JS estáticos). **Gerada automaticamente — nunca editar/commitar à mão.**
- Estado atual (no momento deste handoff): `main` em `e2a4d7d`, `deploy` em `d054c76`.

---

## 1. Como o deploy funciona (NÃO alterar este fluxo)

```
push na main → GitHub Action (.github/workflows/deploy.yml)
   → npm ci && npm run build  (gera ./dist)
   → publica ./dist na branch `deploy`  (peaceiris/actions-gh-pages@v4, force_orphan:false)
   → webhook avisa o Plesk → Plesk faz PULL da branch `deploy` no docroot → site no ar
```

Fatos que importam para você:

1. **Tudo que é servido vem do `dist`** (publicado na `deploy`). Se um arquivo não está no `dist`, ele **não existe** no site. → A página `/questionario` **precisa fazer parte do build deste repo** (ver §3).
2. **`base: '/'`** no `vite.config.ts` (assets na raiz do `dist`).
3. **`.htaccess` (SPA fallback)** em `public/.htaccess`, copiado para `dist/.htaccess`:
   ```apache
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```
   → Reescreve para a LP **só quando o caminho NÃO é arquivo (`-f`) nem pasta (`-d`) real**.
   → **Uma pasta real `/questionario/` com `index.html` é servida diretamente** e **não** colide com a LP. ✅
4. **Plesk puxa via HTTPS público sem credencial.** Se o repo virar **privado**, o pull quebra (`could not read Username`). Manter **público** ou configurar **deploy key (SSH)**.

---

## 2. ⛔ NÃO FAÇA (quebra o deploy atual)

- ❌ Não commitar direto na branch **`deploy`**, nem fazer **`push --force`** nela (Plesk só faz fast-forward; força → para de atualizar **em silêncio**).
- ❌ Não mudar `force_orphan` para `true` no workflow.
- ❌ Não mudar o `base` do app principal nem reescrever o `.htaccess` raiz.
- ❌ Não mexer no repositório Git do Plesk nem no webhook.
- ❌ Não fazer o **Lovable empurrar direto na `main` deste repo** (o Lovable “dona” a raiz do projeto e conflitaria com o app Vite existente). Traga apenas a **saída estática** (ver §3).
- ❌ Não apagar/renomear a LP principal (`index.html`, `assets/`, `src/`).

---

## 3. ✅ COMO ADICIONAR `/questionario` (método recomendado — mesmo deploy)

A página do questionário entra como **arquivos estáticos dentro do mesmo repo**, em `public/questionario/`. O Vite copia `public/**` verbatim para `dist/**`, então vira `dist/questionario/**` → publicado na `deploy` → servido em `https://projeto.aodigital.net.br/questionario/`. **Um único pipeline, zero config nova, não toca na LP.**

### Passo a passo

1. **Construa o questionário no Lovable** como um app próprio (form das 7 perguntas, integração SharpSpring etc.).
2. **Configure o base path do build do Lovable para `/questionario/`** (no Vite do Lovable: `base: '/questionario/'`). Isso faz os assets apontarem para `/questionario/assets/...`.
3. **Gere o build de produção** do Lovable (saída estática: `index.html` + `assets/`).
4. **Copie essa saída para este repo** em `public/questionario/`:
   ```
   public/questionario/
     index.html
     assets/...
     .htaccess        (ver passo 5, só se o questionário tiver rotas client-side)
   ```
5. **Se o questionário for SPA com rotas próprias**, crie `public/questionario/.htaccess` (fallback isolado, NÃO mexe no da LP):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /questionario/
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /questionario/index.html [L]
   </IfModule>
   ```
   (Se for **uma página só**, este `.htaccess` é dispensável — o arquivo real já é servido.)
   > Obs.: o Vite copia dotfiles de `public/`. Se após o build o `dist/questionario/.htaccess` não aparecer, adicione no workflow uma linha `cp -f public/questionario/.htaccess dist/questionario/.htaccess` (adição segura).
6. **Commit + push na `main`:**
   ```bash
   git add public/questionario
   git commit -m "feat: pagina /questionario (Lovable)"
   git push origin main
   ```
7. O **mesmo Action** builda, publica na `deploy`, o Plesk puxa → **`/questionario` no ar** junto com a LP, sem afetar nada.

### Verificação
```bash
curl -s -o /dev/null -w "%{http_code} %{content_type}\n" https://projeto.aodigital.net.br/questionario/
# esperado: 200 text/html
curl -s -o /dev/null -w "%{content_type}\n" https://projeto.aodigital.net.br/questionario/assets/<arquivo>.js
# esperado: application/javascript (confirma que o base /questionario/ está certo)
```
E confirme que a **LP principal continua intacta**: `https://projeto.aodigital.net.br/` deve seguir servindo o `index.html` da landing.

---

## 4. Alternativa (só se quiser deploy automático a partir do repo do Lovable)

Se preferir que o Lovable **auto-publique do próprio repositório** (em vez de copiar arquivos), dá para criar **um segundo repositório Git no Plesk** apontando para o repo do Lovable e **implantando na subpasta** `httpdocs/questionario` (modo Automático).

- ✅ Vantagem: Lovable empurra no repo dele e publica sozinho.
- ⚠️ Cuidado: garanta que a implantação do repo **principal** (branch `deploy` → docroot) **não remova** a subpasta `/questionario` (não habilitar “remover arquivos excluídos” no repo principal). Por isso o **método da §3 é o mais seguro** e é o que atende “usar o mesmo deploy”.

---

## 5. Resumo do que já foi feito no GitHub (contexto)

- Repo criado e publicado (`midiai9/projetoaodigital`), branch `main` (fonte) + `deploy` (build).
- GitHub Action de CI/CD (build → publica `deploy`).
- Webhook GitHub → Plesk (pull automático da `deploy`).
- LP principal "Índice Always On de Vazamento de Valor" construída em Vite/React/TS/Tailwind/Framer Motion, identidade Always On, com seções animadas e nav lateral.
- SSL Let's Encrypt emitido para o domínio.
- Histórico relevante: correção de YAML do workflow, `force_orphan:false`, ajuste da branch do Plesk para `deploy`, favicon/símbolo "on", overhaul de conteúdo (Always On, Composer, Bento & ABEMD, 7 perguntas, versão pública).

> **Regra de ouro:** a página `/questionario` é **adição estática dentro do mesmo build**. Não altere o pipeline, a branch `deploy`, o `.htaccess` raiz, nem a conexão Plesk↔GitHub.
