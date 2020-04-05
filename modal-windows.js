
let modalWindow = document.getElementsByClassName('modal-window-nail')[0]
let modalWindow2 = document.getElementsByClassName('modal-window-makeup')[0]
let modalWindow3 = document.getElementsByClassName('modal-window-eyebrows')[0]
let modalWindow4 = document.getElementsByClassName('modal-window-cosmetology')[0]
let modalWindow5 = document.getElementsByClassName('modal-window-hair')[0]
let modalWindow6 = document.getElementsByClassName('modal-window-depilation')[0]

openPriceNails = () => {
  modalWindow.classList.add('modal-window-nail_open') 
}

closePriceNails = () => {
  modalWindow.classList.remove('modal-window-nail_open')
}

openPriceMakeUp = () => {
  modalWindow2.classList.add('modal-window-makeup_open') 
}

closePriceMakeUp = () => {
  modalWindow2.classList.remove('modal-window-makeup_open')
}

openPriceEyebrows = () => {
  modalWindow3.classList.add('modal-window-eyebrows_open') 
}

closePriceEyebrows = () => {
  modalWindow3.classList.remove('modal-window-eyebrows_open')
}

openPriceCosmetology = () => {
  modalWindow4.classList.add('modal-window-cosmetology_open') 
}

closePriceCosmetology = () => {
  modalWindow4.classList.remove('modal-window-cosmetology_open')
}

openPriceHair = () => {
  modalWindow5.classList.add('modal-window-hair_open') 
}

closePriceHair = () => {
  modalWindow5.classList.remove('modal-window-hair_open')
}

openPriceDepilation = () => {
  modalWindow6.classList.add('modal-window-depilation_open') 
}

closePriceDepilation = () => {
  modalWindow6.classList.remove('modal-window-depilation_open')
}