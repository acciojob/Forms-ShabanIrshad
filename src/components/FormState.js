import React, { useState } from 'react';
import Card from './Card';

const FormState=()=>{
    const [fullName,setFullName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
         const data={
            fullName:fullName,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
        console.log(data);
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <Card>
            <form id='info-form'>
                <input type='text' id='full_name' onChange={(e)=>setFullName(e.target.value)} placeholder='Enter Full Name'/><br>
                </br>
                <input type='email' id='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/><br>
                </br>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} id='password' placeholder='Password'/><br>
                </br>
                <input type='password' onChange={(e)=>setConfirmPassword(e.target.value)} id='password_confirmation' placeholder='Confirm Password'/><br>
                </br>
                <button>Submit</button>
            </form>
            </Card>
        </>
    );
}
export default FormState;