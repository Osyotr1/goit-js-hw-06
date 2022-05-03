const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('ul.gallery');

const imageEl = images.map(el => {
  const listEl = document.createElement('li');
  listEl.insertAdjacentHTML("afterbegin", `<img src="${el.url}" alt="${el.alt}" width="200" height="100">`);
  galleryEl.append(listEl);
})

galleryEl.style.cssText = `display: grid;
  grid-template-columns: 300px 300px 300px;
`