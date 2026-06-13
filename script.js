const SCRIPT_URL = 'COLE_AQUI_A_URL_DO_SEU_GOOGLE_APPS_SCRIPT';

const form = document.getElementById('leadForm');
const submitButton = document.getElementById('submitButton');
const formMessage = document.getElementById('formMessage');
const origemInput = document.getElementById('origem');

const urlParams = new URLSearchParams(window.location.search);
const origem = urlParams.get('origem') || 'Direto';
origemInput.value = origem;

function setMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
}

function formatWhatsApp(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, (_, ddd, first, last) => {
      return last ? `(${ddd}) ${first}-${last}` : `(${ddd}) ${first}`;
    });
  }

  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, (_, ddd, first, last) => {
    return last ? `(${ddd}) ${first}-${last}` : `(${ddd}) ${first}`;
  });
}

const whatsappInput = form.querySelector('input[name="whatsapp"]');
whatsappInput.addEventListener('input', event => {
  event.target.value = formatWhatsApp(event.target.value);
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (SCRIPT_URL.includes('COLE_AQUI')) {
    setMessage('Antes de publicar, configure a URL do Google Apps Script no arquivo script.js.', 'error');
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';
  setMessage('', '');

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    form.reset();
    origemInput.value = origem;
    setMessage('Cadastro recebido com sucesso. Nossa equipe vai analisar seu perfil e entrar em contato.', 'success');
  } catch (error) {
    setMessage('Não foi possível enviar agora. Tente novamente em alguns instantes.', 'error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar minha pré-qualificação';
  }
});
