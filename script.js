function toggleMode() {
  const html = document.documentElement
  // lista de classe contidas no documento html
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else
  //   html.classList.add('light')

  html.classList.toggle("light")
}
