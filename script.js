const TITULO_PROMO_DIA = document.querySelector('h1#promo-do-dia');

const IMG_PROMO_DIA = document.querySelector('.s1 aside img');

const DATE = new Date();

const DAY_WEEK = DATE.getDay();

switch(DAY_WEEK) {
  case 0:
    TITULO_PROMO_DIA.innerHTML = 'Promoção de domingo';
    IMG_PROMO_DIA.src = './images/promo-quarta.jpg';
    break;
  case 1:
    TITULO_PROMO_DIA.innerHTML = 'Promoção de segunda';
    IMG_PROMO_DIA.src = './images/promo-quarta.jpg';
    break;
  case 2:
    TITULO_PROMO_DIA.innerHTML = 'Promoção de terça';
    IMG_PROMO_DIA.src = './images/promo-quarta.jpg';
    break;
  case 3:
    TITULO_PROMO_DIA.innerHTML = 'Promoção / Combo do dia:<br /> Batata - Coca 1L - Hambúrguer';
    IMG_PROMO_DIA.src = './images/promo-quarta.jpg';
    break;
  case 4:
    TITULO_PROMO_DIA.innerHTML = 'Prensadão no <br /><del>suvaco</del> capricho<br /> Por apenas R$ 10.00';
    IMG_PROMO_DIA.src = './images/promo-quinta.png';
    IMG_PROMO_DIA.style.height = '250px';
    IMG_PROMO_DIA.style.margin = '150px auto 0 auto';
    break;
  case 5:
    TITULO_PROMO_DIA.innerHTML = '3 hambúrgueres de <del>R$ 25,00</del><br /> Por apenas R$ 15,00';
    IMG_PROMO_DIA.src = './images/promo-sexta.png';
    IMG_PROMO_DIA.style.height = '250px';
    IMG_PROMO_DIA.style.margin = '150px auto 0 auto';
    break;
  case 6:
    TITULO_PROMO_DIA.innerHTML = 'Promoção de sabado';
    IMG_PROMO_DIA.src = './images/promo-quarta.jpg';
    break;
  default:
    console.log('Dia da semana inválido...')
}
