const botao = document.getElementById('tema');
const icone = botao.querySelector('i');

const salvarTema = localStorage.getItem('theme');

if(salvarTema === 'dark'){
    document.body.classList.add('dark-mode');

    icone.classList.replace('fa-moon', 'fa-sun');
}

botao.addEventListener('click', () => {
    document.body.classList.toggle('drak-mode');

    const dark = document.body.classList.containers('dark-mode');

    if (dark){
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else{
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});