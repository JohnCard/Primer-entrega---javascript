// id global counter
let idCounter = 1
// types
const overEarHeadphones = 'Over-ear headphones'
const laptop = 'Laptop'
const desktopPC = 'Desktop PC'
const ipad = 'iPad'
const mp3 = 'MP3 devices'
const tv = 'TV'

const book = 'Book'

// technology categories
const entertainment = 'Entertainment'
const reading = 'Reading'
const technology = 'Technology'
const job = 'Job'
const videogames = 'Videogames'
const music = 'Music'
const develop = 'Develop'
const portable = 'Portable'
const college = 'College'
// Brands
const apple = 'Apple'
const samsung = 'Samsung'
const dell = 'DELL'
const amazon = 'Amazon'
const steren = 'Steren'
const intel = 'Intel'
const tesla = 'Tesla'
const nvidia = 'Nvidia'
// Novel store
const novelStore = 'Novel store'

let items = [
    {
        id: idCounter++,
        name: 'MacBook Laptop Air',
        price: 13000,
        discount: .30,
        stock: 35,
        onSale: true,
        brand: apple,
        type: laptop,
        categories: [technology, job, reading, develop, college],
        date: '06-07-2023',
        description: 'The MacBook Air is a sleek and lightweight laptop designed for everyday use, offering powerful performance in a compact form. Featuring Apple’s M1 chip, it delivers impressive speed, efficiency, and battery life, making it ideal for both work and leisure. With a Retina display, fast SSD storage, and a quiet fanless design, the MacBook Air is perfect for students, professionals, and casual users alike. Its thin, durable aluminum body ensures portability without sacrificing power.'
    },
    {
        id: idCounter++,
        name: 'MacBook Desktop PC',
        price: 26000,
        discount: .25,
        stock: 20,
        onSale: true,
        brand: apple,
        type: desktopPC,
        categories: [technology, job, develop, reading],
        date: '08-09-2023',
        description: 'The MacBook Desktop, specifically the 2021 24-inch iMac with the M1 chip, combines stunning performance with a sleek, vibrant design. Featuring a high-resolution 4.5K Retina display, it offers vivid colors and crisp details, perfect for creative tasks, media consumption, or work. Powered by Apple´s M1 chip, it ensures smooth multitasking, enhanced graphics, and excellent energy efficiency. With a variety of color options and an ultra-thin profile, the iMac is ideal for both home and office use, delivering powerful performance in a compact all-in-one design'
    },
    {
        id: idCounter++,
        name: 'Smart TV 2025',
        price: 8500,
        discount: .35,
        stock: 32,
        onSale: true,
        brand: samsung,
        type: 'TV',
        categories: [technology, entertainment],
        date: '03-05-2021',
        description: 'The Samsung Smart TV offers an exceptional viewing experience with vibrant colors, sharp details, and sleek design. Equipped with 4K resolution and powered by Quantum Dot technology, it delivers stunning picture quality with enhanced contrast and brightness. Its smart features allow easy access to popular streaming apps, voice control, and seamless connectivity with other devices. With a slim, modern frame and multiple size options, this TV is perfect for elevating your home entertainment setup, providing both style and performance.'
    },
    {
        id: idCounter++,
        name: 'Apple Tablet - 2024 model (limited edition)',
        price: 4500,
        discount: .25,
        stock: 37,
        onSale: true,
        brand: apple,
        type: ipad,
        categories: [technology, ipad, entertainment, college],
        date: '05-07-2022',
        description: 'The Apple iPad Air (2020) combines performance, portability, and style in a sleek design. Featuring a 10.9-inch Liquid Retina display, it offers vibrant colors and sharp clarity for all types of content. Powered by the A14 Bionic chip, it handles multitasking, gaming, and creative apps with ease. The iPad Air supports the Apple Pencil and Smart Keyboard, making it ideal for productivity and creativity on the go. With Touch ID for security, a thin profile, and various color options, the iPad Air is a versatile device for both work and play.'
    },
    {
        id: idCounter++,
        name: 'Apple Airphones - 2024 model (limited edition)',
        price: 1600,
        discount: .30,
        stock: 0,
        onSale: false,
        brand: apple,
        type: overEarHeadphones,
        categories: [technology, music, entertainment],
        date: '03-08-2025',
        description: 'The Apple AirPods Pro (2nd generation) deliver an immersive audio experience with active noise cancellation and a customizable fit for superior comfort. Featuring Apple’s H2 chip, they offer enhanced sound quality, clearer calls, and improved spatial audio with dynamic head tracking. The AirPods Pro are sweat and water-resistant, making them ideal for workouts or outdoor activities. With a longer battery life and a sleek, compact design, they offer seamless integration with Apple devices, providing a premium listening experience whether you´re at home, on the go, or working out.'
    },
    {
        id: idCounter++,
        name: 'IT (Stephen King´s)',
        price: 300,
        discount: .15,
        stock: 0,
        onSale: false,
        brand: novelStore,
        type: book,
        categories: [entertainment, reading],
        date: '15-09-1986',
        description: 'It by Stephen King is a horror novel centered around a shape-shifting entity that preys on the children of Derry, Maine. The story follows a group of misfit kids who band together to confront the creature, which manifests as their worst fears, including the terrifying Pennywise the Clown. Set in two timelines—one during their childhood and the other when they´re adults—the novel explores themes of fear, friendship, and the power of memory. It´s a chilling tale of an ancient evil and the bond that can defeat it.'
    }
]

const returnCategoryList = () => {
    const categoryList = []
    while (true){
        let category = prompt('Type category name: ')
        categoryList.push(category)
        let asnwer = confirm('Wanna continue applying categories?')
        if (asnwer == true){
            continue
        }else{
            break
        }
    }
    return categoryList
}

const requestProps = () => {
    const name = prompt('Type item name: ')
    const price = Number(prompt('Type item price: '))
    const discount = Number(prompt('Type item discount: '))
    const stock = Number(prompt('Type stock: '))
    const brand = prompt('Type item brand: ')
    const type = prompt('Type item type: ')
    const categories = returnCategoryList()
    const date = prompt('Type assignment date: ')
    const description = prompt('Type item description: ')

    return [name, price, discount, stock, brand, type, categories, date, description]
}

const addItem = () => {

    let [name, price, discount, stock, brand, type, categories, date, description] = requestProps()

    const item = {
        name: name,
        price: price,
        discount: discount,
        stock: stock,
        brand: brand,
        type: type,
        categories: categories,
        date: date,
        description: description
    }
    // Apply id property
    item['id'] = idCounter++
    // Apply onSale property
    if(stock > 0) {
        item['onSale'] = true
    }else{
        item['onSale'] = false
    }

    let answer = confirm(`Are you sure to add the ${name} item?`)
    if (answer == true){
        items.push(item)
        alert(`The ${name} item was applied succesfully!`)
    }else{
        alert('Cancelled operation!')
    }
}

const updateItem = (id) => {

    
    items.forEach(item => {
        if (item['id'] == id){
            const asnwer = confirm(`Are you sure to update the ${item['name']} item?`)
            if (asnwer == true){
                let [name, price, discount, stock, brand, type, categories, date, description] = requestProps()
                item['name'] = name
                item['price'] = price
                item['discount'] = discount
                item['stock'] = stock
                item['brand'] = brand
                item['type'] = type
                item['categories'] = categories
                item['date'] = date
                item['description'] = description
                // Apply onSale property
                if(stock > 0) {
                    item['onSale'] = true
                }else{
                    item['onSale'] = false
                }
                alert(`Updated ${name} succesfully!`)
            }else{
                alert('Cancelled operation!')
            }
        }
    })
}

const deleteItem = (id) => {
    items = items.filter(item => item['id'] != id)
}

const showItem = (id) => {
    items.forEach(item => {
        if (item['id'] == id){
            console.log(`
                Selected item id - ${item['id']}
                name - ${item['name']}
                price - ${item['price']}
                discount - ${item['discount']}
                stock - ${item['stock']}
                brand - ${item['brand']}
                type - ${item['type']}
                category list - ${item['categories']}
                date - ${item['date']}
`)
        }
    })
}

const get = () => {
    for (let item of items) {
        console.log(`
            id - ${item['id']}
            name - ${item['name']}
            price - ${item['price']}
            discount - ${item['discount']}
            stock - ${item['stock']}
            brand - ${item['brand']}
            type - ${item['type']}
            category list - ${item['categories']}
            date - ${item['date']}
            -------`)
    }
}

const filterCategory = (category) => {
    let filterArray = items.filter(item => {
        if (item['categories'].includes(category)) return item
        })
    return filterArray
}

// addItem examples
// addItem('MacBook Laptop Pro - 2025 model edition', 25000, .20, 10, apple, laptop, technology, '09-02-2025', `The MacBook Pro (2021) with Apple’s M1 Pro or M1 Max chip is a powerhouse designed for professionals who need exceptional performance.`)

// addItem('Kindle - 2024 model Pro edition', 900, .20, 15, amazon, ipad, technology, '04-05-2016', 'A Kindle is a lightweight, portable e-reader designed for enjoying digital books with a paper-like screen that´s easy to read even in sunlight, long battery life, and the convenience of carrying an entire library in one device.')

// updateItem example
// updateItem(1, 'MacBook Laptop (Air model)', 12500, .25, 20, apple, laptop, technology, '05-09-2024', 'The MacBook Air (2023) powered by the M2 chip offers an ultra-portable, high-performance laptop perfect for everyday use.')