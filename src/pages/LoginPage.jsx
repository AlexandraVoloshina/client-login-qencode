import React, {useState} from 'react';
import logo from '../images/logo.svg';
import googleLogo from '../images/icons8-google-48.png';
import githubLogo from '../images/icons8-github-32.png';
import visibility from '../images/visibility.png';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/features/auth/authSlice';
import validator from "validator";

export const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [validPass, setValidPass] = useState(true)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(validator.isEmail(email) && password.length > 8){
            try {
                dispatch(loginUser({ email, password }))
                setEmail('')
                setPassword('')
            } catch (error){
                console.log(error)
            }
        } else {
            if(!validator.isEmail(email))
                setValidEmail(false)
            if(password.length < 8)
                setValidPass(false)
        }
        
    }

    return (
        <form 
            onSubmit={(e) => e.preventDefault()}
            className='w-full h-60 mx-auto mt-40 md:w-1/3'>
            <div className="flex justify-center items-center">
                <img src={logo} width="200" height="100" />
            </div>
            <h2 className='text text-3xl font-black text-center font-bold mt-10'>Log in to your account</h2>
            <div className='flex justify-between items-center mt-10 flex-row'>
                <button 
                    className='flex justify-center w-[192px] h-12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                        <img src={googleLogo} className="w-[20px] flex justify-center items-center"/>
                        <span className='flex justify-center items-center ml-2 mt-[2px]'>Google</span>
                </button>
                <button 
                    className='flex justify-center w-[192px] h-12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    >
                        <img src={githubLogo} className="w-[20px] flex justify-center items-center"/>
                        <span className='flex justify-center items-center ml-2 mt-[2px]'>Github</span>
                </button>
            </div>
            <div className='flex items-center mt-3'>
               <hr className='w-[190px] mr-2'></hr>
               <span className='text-sm text-gray-400'>OR</span>
               <hr className='w-[190px] ml-2'></hr>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Work email'
                    className='mt-1 mr-2 w-full h-12 w-full rounded-md border text-xs outline-none placeholder:text-gray-400 p-2'/>
            </div>
            {!validEmail && <span className='text-sm'>Email is not valid</span>}
            <div className='flex justify-center items-center mt-5'>
                <label className='mt-1 mr-2 w-full'>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className='w-full h-12 rounded-md border text-xs outline-none placeholder:text-gray-400 p-2'/>
                    <div className='flex justify-end mt-[-35px] mr-[10px]'><img src={visibility} className="w-[20px] opacity-30"/></div>
                </label>
            </div>
            {!validPass && <div className='text-sm mt-4'>The password fields should be at least 8 characters long.</div>}
            <div className='flex justify-end mt-5 text-sm font-medium text-blue-600 mr-2'>Forgot your password?</div>
            <div className='mr-2 mt-5'>
                <button 
                    type="button" 
                    onClick={handleSubmit}
                    class="w-full h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Log in to Qencode
                </button>
            </div>
            <div className='flex justify-center items-center font-normal mr-2 mt-5 text-[15px]'>
                <span className='font-normal leading-4'>Is your company new to Qencode? <a href="/" className='text-blue-600'>Sign up</a></span>
            </div>
        </form>
    )
}