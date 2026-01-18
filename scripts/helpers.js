//todo save user on local storage
const loginUser = () => {
    fetch('user.json')
        .then(res => res.json())
        .then(data => {
            const stringFormat = JSON.stringify(data)
            localStorage.setItem('user', stringFormat)
        });
}

const bottonUser = document.getElementById('save-user')
bottonUser.addEventListener('click', loginUser)

//todo save main gallery data
//todo prepare main data for localStorage´s gallery variable
const saveData = () => {
    fetch('product.json')
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('gallery', JSON.stringify(data))
        });
}

const bottonData = document.getElementById('save-data')
bottonData.addEventListener('click', saveData)