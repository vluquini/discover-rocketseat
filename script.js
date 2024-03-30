function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  // lista de classe contidas no documento html
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/black2.jpg")
  }else{
    img.setAttribute("src", "./assets/Chibi cyberpunk Code breaker - bola.jpg")
  }

  
}
