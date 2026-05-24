import React, { useState } from 'react'
import './Auth.css'

function Auth({ setIsLoggedIn }) {

    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("isLoggedIn", true);

        setIsLoggedIn(true);
    }

    return (
        <div className='loginMain'>

            <form className='card p-4 shadow authBox' onSubmit={handleSubmit}>

                <h2 className='mb-4 text-center'>
                    {
                        isRegister ? "Register" : "Login"
                    }
                </h2>

                {
                    isRegister &&
                    <input
                        type='text'
                        placeholder='Enter Name'
                        className='form-control mb-3'
                    />
                }

                <input
                    type='email'
                    placeholder='Enter Email'
                    className='form-control mb-3'
                />

                <input
                    type='password'
                    placeholder='Enter Password'
                    className='form-control mb-3'
                />

                <button className='btn btn-warning w-100'>
                    {
                        isRegister ? "Register" : "Login"
                    }
                </button>

                <p
                    className='mt-3 text-center switchText'
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {
                        isRegister
                            ? "Already have account? Login"
                            : "Create New Account"
                    }
                </p>

            </form>

        </div>
    )
}

export default Auth