const search_input = document.querySelector('.search_input');
const search_btn = document.querySelector('.search_button');
const frame = document.querySelector('.browser_content');

search_btn.addEventListener('click', () => {
    console.log(search_input.value.trim());
});