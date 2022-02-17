function Conf(){
    if(confirm('Salam') == true && document.getElementById('body').style.backgroundColor == "white")
    {
        document.getElementById('body').style.backgroundColor = 'black';
        document.getElementById('info').style.color = 'red';
        document.getElementById('info').style.backgroundColor = 'white';
    }
    else{
        document.getElementById('body').style.backgroundColor = 'white';
        document.getElementById('info').style.backgroundColor = 'black';
        document.getElementById('info').style.Color = 'red';
    }
}

function Input(){
    while(true){
        var x = prompt('Yasivizi daxil edin')
    if(x.length <= 0 || x.indexOf(' ') >= 0){
        alert('Bos ola bilmez')
    }
    else if(isNaN(x)){
        alert('reqem daxil edin')
    }
    else if(x < 18){
        alert('Yasiniz 18-den azdir')
    }
    else{
        alert('Qeydiatdan ugurla kecdiniz')
        break;
    }
    }
    
}

class Persons{
    constructor(info){
        this.name = info.name
        this.surname = info.surname
        this.password = info.password
    }
    show() {
        return `${this.name} ${this.surname}`
    }
}

const person = new Persons({
    name: 'Mayil',
    surname: 'Kerimov',
    password: 'qwerty'
})

var item = person.show()

document.getElementById('info').innerHTML = item.toUpperCase();
