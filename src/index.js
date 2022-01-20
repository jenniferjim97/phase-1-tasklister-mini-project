document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    (e).preventDefault();
    handleNewTask(e.target.new_task_description.value);
    form.reset();
  })
});
function handleNewTask(list){
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click',handleDelete)
  btn.textContent = "x"
  li.textContent = `${list} `;
  li.appendChild(btn);
  console.log(li);
  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
e.target.parentNode.remove();
}