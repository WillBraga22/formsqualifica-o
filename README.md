# Formulário de Pré-Qualificação | X Capital

Projeto estático para subir na Vercel e enviar respostas para uma planilha do Google via Google Apps Script.

## Como usar

1. Crie uma planilha no Google Sheets.
2. Crie uma aba chamada `Leads`.
3. Cole na primeira linha os títulos das colunas abaixo:

Data de envio | Nome completo | WhatsApp | Cidade/Estado | Perfil profissional | Faturamento anual | Objetivo principal | Contribuição mensal possível | Prazo para iniciar | Conhecimento sobre consórcio | Melhor horário para contato | Origem do lead

4. No Google Sheets, vá em Extensões > Apps Script.
5. Cole o código do arquivo `google-apps-script.js`.
6. Publique como Aplicativo da Web.
7. Em `script.js`, substitua `COLE_AQUI_A_URL_DO_SEU_GOOGLE_APPS_SCRIPT` pela URL do Apps Script.
8. Suba os arquivos no GitHub.
9. Importe o repositório na Vercel.

## Origem do lead

Você pode usar o link assim:

`https://seudominio.vercel.app/?origem=instagram`

Ou:

`https://seudominio.vercel.app/?origem=romu-pizzaria`

Se não tiver origem no link, a planilha receberá `Direto`.
