let rateBtn = document.querySelectorAll('.rate')
let submitBtn = document.querySelector('#submit-btn')
let mainPage = document.querySelector('main')
let rateSpan = document.querySelector('#rating')
let thanksPage = document.querySelector('.thanks')
let ratedButtonId = null

rateBtn.forEach(button => {
    button.addEventListener('click', function() {
      ratedButtonId = this.id
    })
})

submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    if(ratedButtonId !== null)
        mainPage.style.display = 'none'
        thanksPage.style.display = 'flex'
        rateSpan.innerHTML = ratedButtonId
        
})
