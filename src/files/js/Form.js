import React from "react";
import '../styles/Form.css';

function Form() 
{
    return (
        <div className="form">
            <h2 className="title"> ADMISSION FORM </h2>
            <form className="details">
                <input type="text" placeholder="Name " className="input" required />
                <input type="email" placeholder="Email" className="input" required/>
                <input type="Phonenumber" placeholder="Phonenumber" className="input" required/>
                <input type="text" placeholder="Address" className="input" required/>
                <button type="submit" className="submit" > submit </button>
                </form>
                </div>
                );
}
export default Form;                                                                                                        