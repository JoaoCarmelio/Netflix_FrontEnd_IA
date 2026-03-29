// salva nome + imagem do perfil selecionado no localStorage ao clicar antes de ir ao catálogo
const PROFILE_NAME_KEY = 'perfilAtivoNome'
const PROFILE_IMG_KEY = 'perfilAtivoImagem'

// cada link de perfil deve ter data-profile-name/data-profile-img no HTML
document.querySelectorAll('a.Perfil').forEach((link) => {
    link.addEventListener('click', () => {
        const name = link.dataset.profileName?.trim() || link.querySelector('figcaption')?.textContent?.trim()
        const img = link.dataset.profileImg || link.querySelector('img')?.src

        if (name) localStorage.setItem(PROFILE_NAME_KEY, name)
        if (img) localStorage.setItem(PROFILE_IMG_KEY, img)
    })
})
