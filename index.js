const btnToggle = document.getElementById('btnToggle')

btnToggle.onclick = (event) => {
    event.preventDefault()

    const isLight = document.body.classList.toggle('light')
    document.getElementById('btnToggle').classList.toggle('dark', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
};

const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'light') {
    document.body.classList.add('light')
    
}else {
    document.body.classList.remove('light')
   
}