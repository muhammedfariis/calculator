let not = document.querySelector('#far')
let yes = document.querySelector('#away')


function numberss(work){
    not.innerText = not.innerText + work

}

function calculated(){
    
    let numbercalculated = not.innerText

    let numberchanged = numbercalculated.replaceAll('x','*')
    yes.innerText = eval(numberchanged)
    let num = numbercalculated.replaceAll('/','/')
    yes.innerText = eval(num) 
    
}

function cleared() {
    not.innerHTML = ""
    yes.innerHTML = ""
}

function persentage(){
    let pesentagespliting = not.innerText
    let changing = pesentagespliting.split('x')
    let numm = changing[1]/100
    yes.innerText = changing[0]*numm
    numberss('%')

}


