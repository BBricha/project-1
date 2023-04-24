
/*
class TodoList {
    
    constructor() {
      this.items = []
    }


    render() {
        const list = document.getElementById('todo-list')
        list.innerHTML = '';
        this.items.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', () => {
                this.delete(index)})
            list.appendChild(li)
        })
    }   
    delete(index) {
        this.items.splice(index, 1);
        this.render()
      }
    add(item) {
      this.items.push(item);
      this.render()
    }
  
   
}
  
const todoList = new TodoList()
  
const form = document.querySelector('form')
const input = document.getElementById('todo-input')
const button = document.getElementById('todo-button')
  
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim()
    if (value !== '') {
      todoList.add(value);
      input.value = ''
    }
})
  
*/