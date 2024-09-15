
import '../../Styles/TextInput.css'
export default function TextInput({label, type, placeholder, value, setValue}){

    return(
        <div className="input-field-container">
            {/* <label className="text-xl font-semibold">{label}</label> */}
            <input 
                type={type} 
                placeholder={placeholder}
                className="input-field"
                value={value} // input fields value will be send to the value of state from where this component is called 
                onChange={(e)=>{
                    setValue(e.target.value)  // whenever there is change in value of input field, send it to the state asap
                }}
            />
        </div>
    )
}