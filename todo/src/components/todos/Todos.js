import React from "react";
import AppHeader from "../header/header";
import './todos_style.css'
import TodoEdit from "./todos_edit/todos_edit";
import TodosList from "./todos_list/todo_list";
const todos = [
    {
        id: 1,
        title: 'morning',
        body: 'find my iron man suit',
    },
    {
        id: 2,
        title: 'noon',
        body: 'liberate Ukraine from russian troops',
    },
    {
        id: 3,
        title: 'afternoon',
        body: 'drink cold beer on the southern coast of Crimea',
    },

]


export default class TodosComponent extends React.Component {
    constructor(props) {
        super(props); // ссылка на конструктор родительского класса
        this.state = {
            currentTodo: null,
            todos,
            isEditeMode: false,


        }
        this.onNewTodoCreate = this.onNewTodoCreate.bind(this)
        this.onTodoDelete = this.onTodoDelete.bind(this)
        this.onTodoEdit = this.onTodoEdit.bind(this)
        this.onTodoCreated = this.onTodoCreated.bind(this)
    }

    //единственный обязательный метод в классовом компоненте = render()
    // этот метод будет вызивать сам react когда изменится state
    render() {
        return ( // При передаче методов объекта в качестве колбэков, возникает проблема – потеря this.
            <>
                <AppHeader cb={this.onNewTodoCreate}></AppHeader>
                <div className='main_container'>
                    <div className='todos_container'>
                        <TodosList todos={this.state.todos} onDelete={this.onTodoDelete}
                                   edit={this.onTodoEdit}></TodosList>

                    </div>
                    {
                        this.renderTodoContent()
                    }
                </div>
            </>
        )
    }

    renderTodoContent() {
        if (this.state.isEditeMode) {
            return (<TodoEdit
                cb={this.onTodoCreated}
                todo={this.state.currentTodo ? this.state.currentTodo : {title: '', body: ''}}
            ></TodoEdit>)

        }
    }

    onTodoDelete(id) {
        this.setState({...this.state, todos: this.state.todos.filter(t => t.id !== id)})
    }

    onTodoEdit(todo) {
        this.setState({...this.state, currentTodo: todo, isEditeMode: true})
    }

    onTodoCreated(todo) {
        this.setState({
            ...this.state, todos: [...this.state.todos.map((t) => (t.id === todo.id ? todo : t))],
            isEditeMode: false,

        })
    }

    onNewTodoCreate(todo) {
        if (!todo.id) {
            this.setState({
                ...this.state, todos: [...this.state.todos, {...todo, id: Date.now()}],

            })
        }
    }
}

