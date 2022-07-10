import {useState} from "react";
import AppButton from "../../../shared/button";
import AppInput from "../../../shared/input_control";
import "./edit_style.css"



export default function TodoEdit({
                                       cb,
                                       todo= {title:'', body:''},
                                   }){
    const [state, setstate] = useState(todo)

    function setProperty(e){
        const newState = {...state}// скопировали наш state
        newState[e.target.name] = e.target.value // обратились к его существующему проперти и заменили на те данные которые к нам прищли
        setstate(newState)  // засетили непосредственно в состояние нашего компонента
    }

    return (
        <div className="edit_container">

            <AppInput placeholder="Title" name={'title'} value={state.title} onChange={setProperty}></AppInput>
            <AppInput placeholder="Body" name={'body'} value={state.body} onChange={setProperty}></AppInput>
            <AppButton cb={() => cb(state) }>Edit Todo</AppButton>
        </div>
    )

}