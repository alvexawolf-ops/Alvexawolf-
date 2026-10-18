/* ALVEXA WOLF store starter
   Before publishing, replace the placeholder with your WhatsApp number:
   country code + number, digits only. Example format for India: 919876543210
*/
const WHATSAPP_NUMBER = '91XXXXXXXXXX';
const BRAND_NAME = 'ALVEXA WOLF';

function openWhatsApp(message) {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER) || WHATSAPP_NUMBER.includes('X')) {
    alert('Website setup reminder: add your WhatsApp number in script.js before using order buttons.');
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

document.querySelectorAll('.product-order').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    openWhatsApp(`Hello ${BRAND_NAME}, I am interested in the ${product}. Please share the available sizes, actual photos, price and delivery details.`);
  });
});

document.getElementById('whatsappMain').addEventListener('click', event => {
  event.preventDefault();
  openWhatsApp(`Hello ${BRAND_NAME}, I would like to know more about your collection.`);
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.product-card').forEach(card => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
