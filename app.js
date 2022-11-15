let dataArray = []
const username = document.getElementById('username')
const password = document.getElementById('password')
const logincClick = document.getElementById('login-btn')
const singupClick = document.getElementById('singup-btn')


singupClick.addEventListener('click',() => {
    dataArray.push(username.value,password.value)
})

logincClick.addEventListener('click',() => {
    if(dataArray.find((element) => element == username.value && element == password.value)){
        alert('xos geldin ')
    }
    else{
       alert('sehv giris');
    }
})