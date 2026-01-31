import React from 'react';
import Card from './Card';

const Form=()=>{
    return (
        <>
            <Card>
                <form id='info-form'>
                <input type='text' id='full_name' placeholder='Enter Full Name'/><br>
                </br>
                <input type='email' id='email' placeholder='Enter Email'/><br>
                </br>
                <input type='password' id='password' placeholder='Password'/><br>
                </br>
                <input type='password' id='password_confirmation' placeholder='Confirm Password'/><br>
                </br>
                <button>Submit</button>
                </form>
            </Card>
        </>
    );
}
export default Form;