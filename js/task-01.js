const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

const listEl = document.querySelectorAll('#categories>li');
listEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}, 
Numbers: ${el.lastElementChild.children.length}`);
});


