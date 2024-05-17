function setActiveButton(button) {
  const buttons = document.querySelectorAll('.button-nav')

  buttons.forEach((button) => {
    // if (button !== this) {
    button.classList.remove('active')
    // }
  })

  button.classList.add('active')
}

function setActiveSubPage(subPage) {
  const subPages = document.querySelectorAll('.sub-page')
  console.log(subPage)
  subPages.forEach((ele) => {
    // if (ele !== this) {
    ele.classList.remove('active')
    // }
  })
  subPage.classList.add('active')
}

function initializeWebsite() {
  const home = document.getElementById('home')
  const contact = document.getElementById('contact')
  const menu = document.getElementById('menu')
  const buttons = document.querySelectorAll('.button-nav')
  console.log(home, contact, menu)

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) return
      setActiveButton(btn)

      if (btn.classList.contains('button-home')) setActiveSubPage(home)
      if (btn.classList.contains('button-menu')) setActiveSubPage(menu)
      if (btn.classList.contains('button-contact')) setActiveSubPage(contact)
    })
  })
}

initializeWebsite()
