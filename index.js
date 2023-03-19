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
            todoList("",element)  // here iam using 2 parameter 1st parameter will send empty string, and 2nd parameter will send element value
          
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



function todoList(a,text = ""){      // as i said in the above comment when it comes here 1st parameter will have object pointer value and 2nd parameter will have 
                                     //element value that's why i used 2 paramters here (1 to hold the object pointer and 2 to hold element value)
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











