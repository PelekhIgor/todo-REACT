import "./button_style.css"

export default function AppButton({children,cb}){
    return <button onClick={cb}>{children}</button>
}