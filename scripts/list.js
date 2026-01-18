//todo row div html element
const row = document.querySelector('.row')

//todo Card html element
const card_item = (item) => {
return `<div class="col-sm-6 col-lg-4 col-xxl-3 mb-3">
    <div class="card" id="${item.pk}">
        <img src=${item.img} class="card-img-top p-3" alt="${item.slug}-image" height="250">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Price - ${item.price}</p>
            <p class="card-text">Brand - ${item.brand}</p>
            <h5 class="card-subtitle">About item</h5>
            <p class="card-text">${item.description}</p>
            <button class="btn btn-primary fw-bold">Add to cart</button>
        </div>
    </div>
</div>`
}

//todo write main content for your row html container
gallery = localStorage.getItem('gallery')
gallery = JSON.parse(gallery)

for(let item of gallery){
    row.innerHTML += card_item(item)
}

//todo sava items for user´s cart
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const card = e.target.closest('.card');
        let pk = card.id
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        for(let item of gallery){
            if (pk == item.pk){
                user.cart.push(item)
            }
        }
        localStorage.setItem('user', JSON.stringify(user))
    }
});