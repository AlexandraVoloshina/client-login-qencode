import React, {useState} from 'react';
import logo from '../images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPass } from '../redux/features/auth/authSlice';

export const ForgotPasswordPage = () => {

    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(forgotPass({ email }))
            setEmail('')
        } catch (error){
            console.log(error)
        }
        
    }

    return (
        <form className='w-full h-60 mx-auto mt-40 md:w-1/3'>
            <div class="flex justify-center items-center">
                <img src={logo} width="200" height="100" />
            </div>
            <h2 className='text text-3xl font-black text-center font-bold mt-10'>Forgot Password?</h2>
            <div className='flex justify-center items-center mt-5'>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                    className='mt-1 mr-2 w-full h-12 w-full rounded-md border text-xs outline-none placeholder:text-gray-400 p-2'/>
            </div>
            <div className='mr-2 mt-5'>
                <button 
                    type="button" 
                    onClick={handleSubmit}
                    class="w-full h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Send
                </button>
            </div>
            <div className='mr-2 mt-5'>
                <button type="button" class="w-full h-12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    Cancel
                </button>
            </div>
        </form>
    )
}