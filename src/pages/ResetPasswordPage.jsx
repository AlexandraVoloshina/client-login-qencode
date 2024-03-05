import React, {useState} from 'react';
import logo from '../images/logo.svg';
import visibility from '../images/visibility.png';
import { useDispatch } from 'react-redux';
import { resetPass } from '../redux/features/auth/authSlice';

export const ResetPasswordPage = () => {

    const [password, setPass] = useState('')
    const [passDublicate, setPassDublicate] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if(password === passDublicate){
            try {
                dispatch(resetPass({ email: 'test@gmail.com' }))
                setPass('')
                setPassDublicate('')
            } catch (error){
                console.log(error)
            }
        }
    }

    return (
        <form className='w-full h-60 mx-auto mt-40 md:w-1/3'>
            <div class="flex justify-center items-center">
                <img src={logo} width="200" height="100" />
            </div>
            <h2 className='text text-3xl font-black text-center font-bold mt-10'>Create new Password?</h2>
            <div className='flex justify-center items-center mt-5'>
                <label className='mt-5 mr-2 w-full text-xs'>
                    Password
                    <input type="text"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder='Password'
                        className='w-full h-12 mt-2 rounded-md border text-xs outline-none placeholder:text-gray-400 p-2'/>
                    <div className='flex justify-end mt-[-35px] mr-[10px]'><img src={visibility} className="w-[20px] opacity-30"/></div>
                </label>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <label className='mt-5 mr-2 w-full text-xs'>
                    Confirm Password
                    <input type="text"
                        value={passDublicate}
                        onChange={(e) => setPassDublicate(e.target.value)}
                        placeholder='Password'
                        className='w-full h-12 mt-2 rounded-md border text-xs outline-none placeholder:text-gray-400 p-2'/>
                    <div className='flex justify-end mt-[-35px] mr-[10px]'><img src={visibility} className="w-[20px] opacity-30"/></div>
                </label>
            </div>
            <div className='mr-2 mt-10'>
                <button 
                    type="button" 
                    onClick={handleSubmit}
                    class="w-full h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Reset Password
                </button>
            </div>
        </form>
    )
}