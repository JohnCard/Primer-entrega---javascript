//todo save user on local storage
const loginUser = () => {
    fetch('user.json')
        .then(res => res.json())
        .then(data => {
            const stringFormat = JSON.stringify(data)
            localStorage.setItem('user', (stringFormat))
        });
}

//todo save main gallery data
//todo prepare main data for localStorage´s gallery variable
const saveData = () => {
    let gallery = []
    gallery = JSON.stringify(gallery)
    localStorage.setItem('gallery', gallery)
    gallery = localStorage.getItem('gallery')
    gallery = JSON.parse(gallery)
    fetch('product.json')
        .then(res => res.json())
        .then(data => {
            for(let item of data){
                gallery.push({
                    pk: item.pk,
                    name: item.fields.name,
                    price: item.fields.price,
                    slug: item.fields.slug,
                    brand: item.fields.brand,
                    img: item.fields.img,
                    description: item.fields.description,
                })
            }
        });
    gallery = JSON.stringify(gallery)
    localStorage.setItem('gallery', gallery)
}