import "./header.css"
import {useState} from "react";
import AppButton from "../../shared/button";
import AppInput from "../../shared/input_control";
export default function AppHeader({
                                      cb,
                                      todo= {title:'', body:''},
                                  }) {
    const [state, setstate] = useState(todo)

    function setProperty(todo){

        const newState = {...state}// скопировали наш state
        newState[todo.target.name] = todo.target.value // обратились к его существующему проперти и заменили на те данные которые к нам прищли
        setstate(newState)  // засетили непосредственно в состояние нашего компонента
    }
    return (
        <>
            <div className="create_todo">
                <AppInput placeholder="Title" name={'title'} value={state.title} onChange={setProperty}></AppInput>
                <AppInput placeholder="Body" name={'body'} value={state.body} onChange={setProperty}></AppInput>
                <AppButton cb={onCreateTodo}>Create Todo</AppButton>

            </div>
        </>
    )
    function onCreateTodo(){
        if (state.title !== '' && state.body !== '' ) {
            cb(state)
            clearInput()
        }
    }
    function clearInput(){
        state.title = ''
        state.body = ''
    }
}