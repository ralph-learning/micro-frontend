import faker from 'faker';

export function mount(el) {
  if(!el) {
    console.error('The element does not exist.');
    return;
  }

  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  if (el) {
    mount(el);
  }
}

