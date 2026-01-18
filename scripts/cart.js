//todo get accordion html container
const accordion = document.getElementById('accordionFlushExample')

//todo accordion item html element
const accordionItem = (item, state='') => {
    return `
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${item.pk}" aria-expanded="false" aria-controls="flush-collapse${item.pk}">
                ${item.fields.name}
            </button>
        </h2>
        <div id="flush-collapse${item.pk}" class="accordion-collapse collapse ${state}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body bg-dark-subtle">
                <p class="text-bg-light p-3">${item.fields.description}</p>
                <p class="text-bg-light p-3">Brand - ${item.fields.brand}</p>
                <p class="text-bg-light p-3">${item.fields.price}</p>
            </div>
        </div>
    </div>
    `
}

//todo pull user object from localStorage
let user = localStorage.getItem('user')
user = JSON.parse(user)

//todo User´s cart property
const cart = user.cart

//todo total payment
let total = 0
cart.forEach(item => total += parseFloat(item.fields.price))

//todo wrtie main data for accordion container based on user´s cart items
cart.forEach((item, index) => {
  if (index === 0) {
    accordion.innerHTML += accordionItem(item, 'show')
  }
  else{
    accordion.innerHTML += accordionItem(item)
  }
});

//todo User´s info card
//? img
const img = document.querySelectorAll('img')[1]
img.src = user.img
//? card title
const cardTitle = document.querySelector('h3')
cardTitle.innerText = user.username
//? card text elements
const cardTextList = document.querySelectorAll('.card-text')
//? Type username
const cardTextFirst = cardTextList[0]
cardTextFirst.innerText = user.name
//? Type date string format
let date = new Date()
date = date.toISOString().split('T')[0]
const cardTextSecond = cardTextList[1]
cardTextSecond.innerText = date
//? Type total amount
const cardTextThird = cardTextList[2]
cardTextThird.textContent = `$ ${total.toLocaleString('en-US')}`
//? Type total items
const cardTextFourth = cardTextList[3]
cardTextFourth.textContent = `Total selected items - ${cart.length}`
//? Type user balance
const cardTextFifth = cardTextList[4]
cardTextFifth.textContent = `User´s balance - $ ${user.credit}`
//? Enough user´s credit
const cardTextSixth = cardTextList[5]
if(user.credit > total){
    cardTextSixth.textContent = 'Enough credit'
    cardTextSixth.classList.add('text-success')
}else{
    cardTextSixth.textContent = 'Not enough credit'
    cardTextSixth.classList.add('text-danger')
}