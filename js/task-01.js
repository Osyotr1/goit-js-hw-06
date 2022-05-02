const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}, 
Numbers: ${el.lastElementChild.children.length}`);
});


