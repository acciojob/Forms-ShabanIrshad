import React, { useRef } from 'react';
import Card from './Card';

const FormRef=()=>{
    const fullName=useRef();
    const email=useRef();
    const password=useRef();
    const confirmPassword=useRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            fullName:fullName.current.value,
            email:email.current.value,
            password:password.current.value,
            confirmPassword:confirmPassword.current.value
        }
        console.log(data);
        fullName.current.value='';
        email.current.value='';
        password.current.value='';
        confirmPassword.current.value='';
        
    }

    return (
        <>
            <Card>
            <form id='info-form' onSubmit={handleSubmit}>
                <input type='text' ref={fullName} id='full_name' placeholder='Enter Full Name'/><br>
                </br>
                <input type='email' ref={email} id='email' placeholder='Enter Email'/><br>
                </br>
                <input type='password' ref={password} id='password' placeholder='Password'/><br>
                </br>
                <input type='password' ref={confirmPassword} id='password_confirmation' placeholder='Confirm Password'/><br>
                </br>
                <button>Submit</button>
            </form>
            </Card>
        </>
    );
}
export default FormRef;