import { useState } from "react"

export default function Form() {
    let [formData , setFormData] = useState({
        fullName: "",
        userName: ""
    })
    let handleInputChange = (event) => {
        setFormData((currData) => {  
            return{...currData, [event.target.name] : event.target.value}
        })
    }
    return(
        <div>
            <form >
                <label htmlFor="fullName">Full Name</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" 
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleInputChange}
                id="fullName"
                name="fullName"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button>Submit</button>
            </form>
            <br />
            <form >
                <label htmlFor="userName">User Name</label>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" 
                placeholder="Enter your name"
                value={formData.userName}
                onChange={handleInputChange}
                id="userName"
                name="userName"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button>Submit</button>
            </form>
        </div>
    )
} 