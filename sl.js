const todoinput=document.querySelector('.todo_input')
const todobutton=document.querySelector('.btn')
const todolist=document.querySelector('.list')


todobutton.addEventListener('click', Add)

todolist.addEventListener('click',Delete)

function Add(event){
    

 event.preventDefault()
 if(todoinput.value==""){
    alert("please enter a todo")
}
else{
 const tododiv=document.createElement('div')
 tododiv.classList.add('todo')
 const newtodo=document.createElement('li')
 
 newtodo.innerHTML = todoinput.value
 newtodo.classList.add('todo-item')
 
 tododiv.appendChild(newtodo)
 const donebtn = document.createElement('button')
 donebtn.innerHTML ='✔'
 donebtn.classList.add('donebtn')
 tododiv.appendChild(donebtn)
 const trashbtn = document.createElement('button')
 trashbtn.innerHTML ='delete'
 trashbtn.classList.add('trashbtn')
 tododiv.appendChild(trashbtn)
 todolist.appendChild(tododiv)
 todoinput.value=""
 
}
}
function Delete(e) {
    item=e.target
    
    if(item.classList.contains('trashbtn')){
    const parent=item.parentElement
    parent.remove()
}
if(item.classList.contains('donebtn')){
    const parent=item.parentElement
    
    item.classList.add('donebtn2')
    
}


}
