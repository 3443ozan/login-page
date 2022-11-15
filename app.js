class dataArray {
    constructor(name,pass){
        this.name = name
        this.pass = pass
    }
}
let dataBase = 0
const username = document.getElementById('username')
const password = document.getElementById('password')
const logincClick = document.getElementById('login-btn')
const singupClick = document.getElementById('singup-btn')


singupClick.addEventListener('click',() => {
    dataBase = new dataArray(username.value,password.value)
})

logincClick.addEventListener('click',() => {
    if(dataBase.name == username.value && dataBase.pass == password.value){
        alert('xos geldin ')
    }
    else{
       alert('sehv giris');
    }
})
