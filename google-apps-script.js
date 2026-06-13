const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error('A aba Leads não foi encontrada. Crie uma aba chamada Leads.');
    }

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.nome || '',
      data.whatsapp || '',
      data.cidade || '',
      data.perfil || '',
      data.faturamento || '',
      data.objetivo || '',
      data.contribuicao || '',
      data.prazo || '',
      data.conhecimento || '',
      data.horario || '',
      data.origem || 'Direto'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Lead cadastrado com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Formulário X Capital ativo')
    .setMimeType(ContentService.MimeType.TEXT);
}
