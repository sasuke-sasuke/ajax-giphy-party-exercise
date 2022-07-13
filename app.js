const key = 'lUYEJyM599TyaWKkCdP7TgyU9uQ7swtV'
const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
const deleteBtn = document.querySelector('#delete');

async function getGif(){
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${input.value}`);
    const randNum = Math.floor(Math.random() * 24);
    const firstGif = res.data.data[`${randNum}`].images.original.url;
    return firstGif;
}

async function renderGif(){
    const container = document.querySelector('.container');
    const gif = document.createElement('img');
    gif.src = await getGif(); 
    container.appendChild(gif);
}

const deleteButton = () => {
    const allGifs = document.querySelectorAll('img');
    for(let gif of allGifs){
        gif.remove();
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    renderGif();
    input.value = '';
})

deleteBtn.addEventListener('click', deleteButton);