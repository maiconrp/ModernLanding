# Guia de Deploy do "Domine Suas Finanças" na Hostinger

Este guia apresenta o passo a passo detalhado para hospedar a landing page do ebook "Domine Suas Finanças" na Hostinger, desde a preparação do projeto até a configuração final e verificação.

## Passo 1: Preparação do Projeto

### 1.1. Compilar o projeto para produção

Antes de fazer o upload para a Hostinger, você precisa gerar os arquivos otimizados para produção:

1. No terminal, execute o comando de build:
   ```bash
   npm run build
   ```

2. Isso criará uma pasta `dist` com os arquivos otimizados da aplicação.

3. Verifique se todos os arquivos estão corretamente gerados na pasta `dist`:
   - Arquivos HTML
   - Arquivos CSS e JavaScript compilados e minificados
   - Pasta de assets/imagens

## Passo 2: Criar uma conta e contratar um plano na Hostinger

### 2.1. Registro e escolha do plano

1. Acesse o site da [Hostinger](https://www.hostinger.com.br/) e crie uma conta.
2. Escolha um plano de hospedagem adequado. Para esta landing page, um plano básico de hospedagem compartilhada é suficiente.
3. Escolha ou registre um domínio para o seu site (ex: dominesuasfinancas.com.br).
4. Complete o processo de compra.

### 2.2. Acessar o painel de controle

1. Após a confirmação da compra, faça login no painel de controle da Hostinger (hPanel).
2. Localize a seção de gerenciamento de hospedagem.

## Passo 3: Configurar o ambiente na Hostinger

### 3.1. Criação do banco de dados (se necessário)

Este projeto não utiliza banco de dados para funcionar como landing page estática, então você pode pular esta etapa.

### 3.2. Configurar variáveis de ambiente (se necessário)

Para a integração com Kiwify:

1. No painel da Hostinger, vá para a seção "Avançado" > "Variáveis de ambiente" ou "Configurações PHP".
2. Adicione as variáveis necessárias, como IDs de produtos do Kiwify.

## Passo 4: Fazer upload dos arquivos

### 4.1. Acessar o Gerenciador de Arquivos

1. No hPanel da Hostinger, acesse "Gerenciador de Arquivos" ou "File Manager".
2. Navegue até a pasta `public_html` ou a pasta raiz do seu domínio.

### 4.2. Método 1: Upload via Gerenciador de Arquivos

1. Selecione "Upload" no menu superior.
2. Compacte a pasta `dist` em um arquivo ZIP.
3. Faça o upload do arquivo ZIP.
4. Extraia o arquivo ZIP no servidor.
5. Se necessário, mova os arquivos da pasta extraída para a pasta raiz (`public_html`).

### 4.3. Método 2: Upload via FTP

1. No hPanel, vá para a seção "Arquivos" > "Acesso FTP".
2. Crie um usuário FTP ou use as credenciais existentes.
3. Use um cliente FTP (como FileZilla, WinSCP ou Cyberduck):
   - Host: o endereço do servidor FTP fornecido pela Hostinger
   - Usuário: seu nome de usuário FTP
   - Senha: sua senha FTP
   - Porta: normalmente 21
4. Conecte-se ao servidor e navegue até a pasta `public_html`.
5. Faça upload de todos os arquivos da pasta `dist` para esta pasta.

## Passo 5: Configurar o servidor web

### 5.1. Configuração do Apache (padrão na Hostinger)

Como este é um projeto React com rotas no frontend, você precisa garantir que todas as rotas sejam redirecionadas para o index.html. Crie um arquivo `.htaccess` na raiz do site (pasta `public_html`) com o seguinte conteúdo:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

Isso garante que o roteamento no lado do cliente funcione corretamente.

## Passo 6: Configuração do domínio e SSL

### 6.1. Configurar domínio

Se você registrou um domínio durante a compra do plano, ele já estará configurado. Caso contrário:

1. No hPanel, vá para "Domínios" > "Gerenciar".
2. Siga as instruções para apontar seu domínio para os servidores da Hostinger.

### 6.2. Ativar SSL (HTTPS)

1. No hPanel, vá para "SSL/TLS" ou "Segurança" > "SSL".
2. Procure pela opção de instalar um certificado SSL gratuito (Let's Encrypt).
3. Selecione o domínio e clique em "Instalar".
4. Aguarde a instalação do certificado (pode levar alguns minutos).
5. Ative o redirecionamento HTTP para HTTPS para garantir que todos os visitantes usem a versão segura do site.

## Passo 7: Configuração Específica para Kiwify

### 7.1. Atualização dos IDs de Produtos

1. Acesse o painel da Kiwify e obtenha os IDs dos seus produtos.
2. No gerenciador de arquivos da Hostinger, localize e edite os arquivos que contêm a referência "YOUR_KIWIFY_PRODUCT_ID":
   - Vá para a pasta `public_html` (ou onde seus arquivos estão)
   - Use a função de busca para encontrar arquivos com "YOUR_KIWIFY_PRODUCT_ID"
   - Substitua por seu ID real da Kiwify

### 7.2. Configuração de CORS (se necessário)

Se a API da Kiwify exigir configurações de CORS:

1. Crie ou edite o arquivo `.htaccess` adicionando:

```
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

## Passo 8: Testes e verificação final

### 8.1. Verificação básica do site

1. Abra o seu domínio em um navegador web.
2. Verifique se todas as páginas estão carregando corretamente.
3. Teste a navegação e todas as interações da página.
4. Certifique-se de que as animações e efeitos visuais funcionam como esperado.

### 8.2. Teste de responsividade

1. Teste o site em diferentes dispositivos: desktop, tablet e smartphone.
2. Use ferramentas de desenvolvedor do navegador para simular vários tamanhos de tela.
3. Certifique-se de que o layout se adapta corretamente em todas as resoluções.

### 8.3. Teste de integração com Kiwify

1. Teste o fluxo de compra completo.
2. Clique em cada botão de CTA para verificar se o redirecionamento para o checkout da Kiwify funciona.
3. Complete uma compra de teste para garantir que todo o processo está funcionando.

### 8.4. Teste de desempenho

1. Use ferramentas como Google PageSpeed Insights ou GTmetrix para verificar o desempenho do site.
2. Identifique e corrija possíveis problemas de otimização.

## Passo 9: SEO e Analytics

### 9.1. Configurar Google Analytics

1. Crie uma conta no Google Analytics, se ainda não tiver uma.
2. Configure uma propriedade para seu site.
3. Obtenha o código de rastreamento e adicione-o ao arquivo `index.html`.

### 9.2. Configurar Meta Tags

1. Verifique se o arquivo `index.html` contém as meta tags adequadas para SEO.
2. Adicione descrição, palavras-chave e tags Open Graph para compartilhamento em redes sociais.

### 9.3. Configurar Google Search Console

1. Registre seu site no Google Search Console para monitorar a presença nos resultados de pesquisa.
2. Envie o sitemap, se tiver um.

## Passo 10: Manutenção contínua

### 10.1. Backup regular

1. No hPanel da Hostinger, configure backups automáticos ou faça-os manualmente com regularidade.

### 10.2. Atualização do conteúdo

1. Use o gerenciador de arquivos ou FTP para atualizar o conteúdo conforme necessário.
2. Para atualizações maiores, repita o processo de build localmente e depois faça upload dos novos arquivos.

## Solução de problemas comuns

### Problema: Página em branco após deploy

**Solução**: Verifique se o arquivo `index.html` está na pasta raiz e se o servidor está configurado para servir este arquivo como página padrão.

### Problema: Rotas não funcionam (erro 404)

**Solução**: Certifique-se de que o arquivo `.htaccess` está configurado corretamente para redirecionar todas as rotas para o `index.html`.

### Problema: Não carrega folhas de estilo ou scripts

**Solução**: Verifique se os caminhos nos arquivos HTML estão corretos. Pode ser necessário ajustar caminhos relativos ou absolutos.

### Problema: Botões de checkout não funcionam

**Solução**: Confirme se os IDs de produtos da Kiwify foram atualizados corretamente e se a integração está funcionando conforme esperado.

## Considerações Finais

Após seguir todos estes passos, sua landing page "Domine Suas Finanças" estará funcionando perfeitamente na Hostinger. Lembre-se de monitorar regularmente o desempenho do site e fazer ajustes conforme necessário para garantir a melhor experiência de usuário e taxas de conversão otimizadas.