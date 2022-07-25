const todo1 = document.getElementById("todos");
const listParent = document.getElementById("list-parent");
const span = document.createElement("span");
todo1.addEventListener("change", function(event){
  const list = document.createElement("li");
  list.appendChild(span);
  const todos = todo1.value;
  list.classList = "list-group-item";
  listParent.append(list);
  list.innerHTML = todos;
  list.appendChild(span)

});

document.addEventListener("keyup", function(event){
if(event.keyCode === 13){
  todo1.value = "";
}else{
  todo1.value;
}
});

listParent.addEventListener("click", event=>{
  if(event.target.tagName === "li"){
    event.target.classList.toggle("checked");
  }else{
    false;
  }
 event.target.closest('li').classList.toggle('highlight');
});
