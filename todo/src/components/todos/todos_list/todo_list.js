import Todo from "./todo/todo";


export default function TodosList({todos,edit,onDelete}){
   return (
        <>
            {
                todos.map((t)=> (
                    <Todo key = {t.id} todo={t} onDelete={()=>onDelete(t.id)} onEdit={()=> edit(t)}></Todo>
                ))
            }
        </>
    )
}