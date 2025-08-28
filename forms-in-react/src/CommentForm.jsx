import { useState } from "react"
import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
 
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   } 
   
   return errors;
}
export default function CommentForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username : "",
    //     remarks:"",
    //     rating:5
    // })

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            addNewComment(values); // <-- Call the function passed as prop
            resetForm(); // <-- Optionally reset the form after submit
        },
        // onSubmit: values => {
        //     alert(JSON.stringify(values, null, 2));
        // },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {...currData, [event.target.name] : event.target.value}
    //     })
    // }

    // let handleSummit = (event) => {
    //     console.log(formData)
    //     event.preventDefault();
    //     addNewComment(formData)
    //     setFormData({
    //         username: "",
    //         remarks:"",
    //         rating: 5
    //     })
    // }


    return(
        <div>
            <h3>Give a comment !</h3>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                &nbsp;&nbsp;
                <input  
                type="text"  
                value={formik.values.username}
                id="username"
                onChange={formik.handleChange}
                name="username"/>
                {formik.errors.username ? <p style={{color : "red"}}>{formik.errors.username}</p> : null}
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                &nbsp;&nbsp;
                <textarea 
                id="remarks"
                name="remarks" 
                cols="20" rows="3"
                onChange={formik.handleChange}
                value={formik.values.remarks}></textarea>
                <br /><br />

                <label htmlFor="rating">Rating </label>
                &nbsp;&nbsp;
                <input  
                type="number" 
                min={1} max={5} 
                onChange={formik.handleChange}
                value={formik.values.rating}
                id="rating"
                name="rating"/>
                <br /><br />

                <button type="submit">Add comment</button>
            </form>
        </div>
    )
}