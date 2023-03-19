let input = document.querySelector('#todo');
let add = document.querySelector('#add');
let container = document.querySelector(".container");
let list = document.querySelector('.list')

add.addEventListener("click",todoList);



showStorage = ()=>{
    let items = JSON.parse(localStorage.getItem('items'));
    console.log(items)
    if(items){
        items.forEach((element)=> {
            todoList("",element)
            console.log(element)
        })
    }
}



updateStorage = () =>{
    let todoList = document.querySelectorAll('p');
    let arr = []
    todoList.forEach(Element =>{
        arr.push(Element.innerText);
    })

    localStorage.setItem('items',JSON.stringify(arr));
}



function todoList(a,text = ""){ 
       let message = ""

       if(text) message = text;
       else message = input.value;


       console.log("this is message",message)
        let div = document.createElement('div');
        let insert = `<p>${message}</p><button id="del">Del</button>`;
        div.insertAdjacentHTML("afterbegin",insert);
         
        let del = div.querySelector('#del');
        del.addEventListener("click",()=>{
            div.remove()
            updateStorage()
        })
        
        list.insertAdjacentElement('afterbegin',div);
        updateStorage();
    
}



window.addEventListener('load',()=>{
   showStorage()
})











