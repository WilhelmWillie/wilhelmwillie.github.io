// Initialize 'animation on scroll library'
AOS.init()

// Show bio modal
var buttons = document.querySelectorAll('.modal-button')
buttons.forEach(function(button) {
  button.onclick = function() {
    var modal = this.dataset.modal
    var modalElement = document.getElementById(modal + '-modal')
    var htmlElement = document.querySelector('html')

    modalElement.classList.add('is-active')
    htmlElement.classList.add('is-clipped')
  }
})

// Modal toggle for modal closes
var modalCloses = document.querySelectorAll('.click-to-close-modal')
modalCloses.forEach(function(modalClose) {
  modalClose.onclick = function() {
    var parentNode = modalClose.parentNode
    if (parentNode.classList.contains('is-active')) {
      parentNode.classList.remove('is-active')
    }

    var htmlElement = document.querySelector('html')
    if (htmlElement.classList.contains('is-clipped')) {
      htmlElement.classList.remove('is-clipped')
    }
  }
})

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

// Testing this
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    targetY += 15;

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 10);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
