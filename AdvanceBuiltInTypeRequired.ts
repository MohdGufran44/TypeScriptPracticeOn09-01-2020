interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo:Todo, fieldsToUpdate:Required<Todo>): Todo {
    return {...todo, ...fieldsToUpdate};
}

const todo1 = {
    title: 'Say Hi! ',
    description: 'To Anas Raza'
}

console.log(todo1);

const todo2 = updateTodo(todo1,{
    title: "Updated",
    description: 'throw out trash',
});
console.log(todo2);

