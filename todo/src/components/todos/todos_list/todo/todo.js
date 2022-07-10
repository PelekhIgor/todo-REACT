import AppButton from "../../../../shared/button";
import "./todo_style.css"


export default function Todo({todo, onEdit, onDelete}){
    return (
        <>
            <div className="user_item">
                <div className='item_content'>
                    <h3>{todo.title}</h3>
                    <div>{todo.body}</div>
                </div>
                <div className="button_container">
                    <AppButton cb={onEdit}>Edit</AppButton>
                    <AppButton cb={onDelete}>Delete</AppButton>
                </div>
            </div>
        </>
    )
}