import { Item } from "./models.js"

//todo main gallery
let gallery = localStorage.getItem('gallery')
gallery = JSON.parse(gallery)
//* Additional functions
//todo random integer
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//todo save default data
const saveGalleryData = () => {
    fetch('product.json')
        .then(res => res.json())
        .then(data => {
            const constData = [...data]
            let gallery = []
            constData.forEach(item => {
                const product = new Item(item.pk, item.fields.name, item.fields.price, item.fields.brand, item.fields.img, item.fields.description, item.fields.categories)
                gallery.push(product)
            })
            gallery = JSON.stringify(gallery)
            localStorage.setItem('gallery', gallery)
        });
}
//todo update current data
const updateCurrentData = (data) => {
    let saveData = [...data]
    saveData = JSON.stringify(saveData)
    localStorage.setItem('gallery', saveData)
}
//todo udd user
const addUser = (user) => {
    let userArray = localStorage.getItem('users')
    if(userArray){
        userArray = JSON.parse(userArray)
    }else{
        localStorage.setItem('users','[]')
        userArray = localStorage.getItem('users')
        userArray = JSON.parse(userArray)
    }
    userArray.push(user)
    userArray = JSON.stringify(userArray)
    localStorage.setItem('users', userArray)
}
//todo user array
const returnUserList = () => {
    let userArray = localStorage.getItem('users')
    userArray = JSON.parse(userArray)
    return userArray
}
//todo get user
const returnUser = () => {
    let returnedUser = localStorage.getItem('user')
    returnedUser = JSON.parse(returnedUser)
    return returnedUser
}
//todo updated user
const updateUser = (user) => {
    const newUser = JSON.stringify(user)
    localStorage.setItem('user', newUser)
}
//todo html card
const cardItem = (item, stockCart=0) => {
    //! <p class="card-text min-h-50">Categories - ${item.categories.join(', ')}</p>
    //! <p class="card-text">${item.description.slice(0, 120)}...</p>
    return `<div class="col-sm-6 col-lg-4 col-xxl-3 mb-3">
                <div class="card">
                    <img src=${item.img} class="card-img-top py-3 px-5" alt="${item.slug}-image" height="180">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">Price - $${Number(item.price).toLocaleString('en-US')}</p>
                        <p class="card-text">Stock cart - ${stockCart}</p>
                        <p class="card-text">Stock gallery - ${item.stock}</p>
                        <p class="card-text min-h-50">Brand - ${item.brand}</p>
                        <button class="btn btn-primary ${item.pk} me-3" data-bs-target="#exampleModal" data-bs-toggle="modal">Add to cart</button>
                        <button class="btn btn-primary ${item.pk}">Add one item</button>
                    </div>
                </div>
        </div>`
}
//todo accordion item html
//! <p class="text-bg-light p-3 w-75">Categories - ${(item.categories).join(', ')}</p>
const accordionItem = (item, state='') => {
    return `<div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-secondary-subtle" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${item.pk}" aria-expanded="false" aria-controls="flush-collapse${item.pk}" id="accordion-button-${item.pk}">
                ${item.name}
            </button>
        </h2>
        <div id="flush-collapse${item.pk}" class="accordion-collapse collapse ${state}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body bg-dark-subtle">
                <p class="text-bg-light p-3">${item.description}</p>
                <p class="text-bg-light p-3 w-75">Brand - ${item.brand}</p>
                <p class="text-bg-light p-3 w-50">Price - $${Number(item.price).toLocaleString('en-US')}</p>
                <p class="text-bg-light p-3 w-25">Stock - ${item.stock}</p>
                <button class="btn btn-danger ${item.pk}">Delete item(s)</button>
                <button class="btn btn-danger ${item.pk}">Remove item</button>
                <button class="btn btn-danger ${item.pk}" data-bs-target="#exampleModal" data-bs-toggle="modal">Remove item(s)</button>
                <button class="btn btn-success ${item.pk}">Buy item(s)</button>
                <button class="btn btn-success ${item.pk}">Buy item</button>
                <button class="btn btn-success ${item.pk}" data-bs-target="#exampleModal" data-bs-toggle="modal">Choose amount</button>
            </div>
        </div>
    </div>`
}
//todo accordion sub item html
const accordionSubItem = (item, state='') => {
    return `<div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed bg-secondary-subtle " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${item.pk}" aria-expanded="false" aria-controls="flush-collapse${item.pk}" id="sub-accordion-button-${item.pk}">
                ${item.name}
            </button>
        </h2>
        <div id="flush-collapse${item.pk}" class="accordion-collapse collapse ${state}" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body bg-dark-subtle">
                <p class="text-bg-light p-3">${item.description}</p>
                <p class="text-bg-light p-3 w-75">Categories - ${(item.categories).join(', ')}</p>
                <p class="text-bg-light p-3 w-75">Brand - ${item.brand}</p>
                <p class="text-bg-light p-3 w-25">Stock - ${item.stock}</p>
            </div>
        </div>
    </div>`
}
//* wrtie an accordion main content
const accordionContent = (listItems, accordionRef, htmlItem) => {
    if(listItems.length > 0){
        accordionRef.innerHTML = ''
        listItems.forEach((item, index) => {
            if (index === 0) {
                accordionRef.innerHTML += htmlItem(item, 'show')
            }
            else{
                accordionRef.innerHTML += htmlItem(item)
            }
        })
    }
    else{
        accordionRef.innerHTML = '<h2 class="text-warning">Not selected items yet.</h2>'
    }
}

export {saveGalleryData, cardItem, accordionContent, accordionItem, accordionSubItem, returnUser, updateUser, addUser, returnUserList, randomInt, updateCurrentData, gallery}