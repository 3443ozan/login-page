let dataBase = [
    {
        name: 'vahid',
        pass: 'valorant'
    },
    {
        name:'ozan',
        pass:'chamber'
    },
    {
        name:'bind',
        pass:'reyna'
    },
    {
        name:'mother',
        pass:'child'
    }
]
const username = document.getElementById('username')
const password = document.getElementById('password')
const logincClick = document.getElementById('login-btn')

logincClick.addEventListener('click',()=>{
    if(dataBase.find(element => element.name == username.value) && dataBase.find(element => element.pass == password.value)){
        alert('salam')
    }
    else{
        alert('yanlis')
    }
})
