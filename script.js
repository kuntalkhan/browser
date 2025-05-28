const search_input = document.querySelector('.search_input');
const search_btn = document.querySelector('.search_button');
const frame = document.querySelector('.browser_content');

const search_function = ()=> {
    const url = search_input.value.trim();
    const re =/www\.[a-zA-Z0-9-]+\.[a-z]{2,}/g;
    if (re.test(url)){
        if(!url.startsWith('https://')) {
            frame.innerHTML =`
            <h2> ${url}</h2>
            <iframe src="https://${url}" frameborder="0" ></iframe>
            `
        } else{
            frame.innerHTML =`
            <h2> ${url}</h2>
            <iframe src="${url}" frameborder="0" ></iframe>
            `
        }
    } else {
        window.open(`https://www.google.com/search?q=${url}`, '_blank');
        frame.innerHTML = '';
    }
}

search_btn.addEventListener('click', search_function);
search_input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        search_function();
    }
}); 
