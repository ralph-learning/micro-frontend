import faker from 'faker';

export function mount(el) {
  if(!el) {
    console.error('The element does not exist.');
    return;
  }

  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

  el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

