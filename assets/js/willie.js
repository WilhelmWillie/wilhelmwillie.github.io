// Initialize 'animation on scroll library'
AOS.init()

// Controls hero header type effect
var heroSubtitle = document.querySelector('#hero-subtitle')

var subtitleText = [
  'Developer',
  'Photographer',
  'Creative',
  'Product Manager',
  'Entrepreneur',
  'Designer',
  'Engineer'
]

var subtitleTextIndex = 0

var isClearing = true
var newText = ''

function updateSubtitle() {
  var text = heroSubtitle.innerHTML

  if (isClearing) {
    // Clear off text
    if (text !== '|') {
      var updatedText = text.substring(0, text.length - 1)

      if (updatedText === '') {
        updatedText = '|';
        heroSubtitle.innerHTML = updatedText

        setTimeout(updateSubtitle, 1500)
      } else {
        heroSubtitle.innerHTML = updatedText

        setTimeout(updateSubtitle, 75)
      }
    } else {
      // Makes sure that the new subtitle text is unique 
      var newSubtitleTextIndex = subtitleTextIndex

      while (newSubtitleTextIndex === subtitleTextIndex) {
        newSubtitleTextIndex = Math.floor(Math.random() * subtitleText.length)
      }

      subtitleTextIndex = newSubtitleTextIndex
      newText = subtitleText[newSubtitleTextIndex]
      isClearing = false

      setTimeout(updateSubtitle, 75)
    }
  } else {
    // Add text back to our subtitle
    if (text !== newText) {
      // Add characters back to our subtitle
      if (text === '|') {
        heroSubtitle.innerHTML = newText[0]       
      } else {
        heroSubtitle.innerHTML = newText.substring(0, text.length + 1)
      }

      setTimeout(updateSubtitle, 75)
    } else {
      // Text is complete; set state so we clear text on next call for updateSubtitle
      isClearing = true
      setTimeout(updateSubtitle, 1500)
    }
  }
}

setTimeout(updateSubtitle, 1500)