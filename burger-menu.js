window.onload = () => {
  let burgerMenu = document.getElementsByClassName('home__nav-bar__menu__nav')['0']
  let menuState = false

  openCloseMenu = () => {
    return menuState = !menuState
  }

  openBurgerMenu = () => {
    let state = openCloseMenu()
    if (state === true) {
      burgerMenu.classList.add('home__nav-bar__menu__nav_open')
    }
    else if (state === false) {
      burgerMenu.classList.remove('home__nav-bar__menu__nav_open')
    }
  }
}