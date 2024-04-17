

import React, { useState, useContext } from 'react'
import Users from '../Components/Users';
import {appContext} from '../App'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
const context = useContext(appContext)

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in both fields.');
            return;
        } else if(username == 'admin' && password == 'admin'){
             
            context.updateValue(username)
             
        }else{
            setError('Username not available')
        }
       
        
    };
    
    return (
        <>
            <section className="h-screen">
                <div className="h-full">
                 
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                           {/* <!-- Left column container--> */}
                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-10/12 md:shrink-0 lg:w-6/12 xl:w-8/12">
                            <img
                                src="../images/output-without.gif"
                                className="w-full h-full opacity-20"
                                alt="Sample image"
                            />
                        </div>


                        {/* <!-- Right column container --> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-4/12 xl:w-3/12">
                            <div><img src="../images/logo-im.png"  alt="" className='-m-[10px]' /></div>
                           
                           <div className='bg-blue-950 inline-block px-10 py-6 pb-8 mt-5 border-custom'>
                         
                            <form onSubmit={handleFormSubmit} className='flex flex-col'>
                                <h1 className='text-white text-2xl'>Login</h1>
                                <div>
                                    
                                  <div>  <input
                                        type="text"
                                        id="username"
                                        className={`p-3 pl-10 my-2 rounded text-black input-user text-white text-base ${error ? "err-border" : "" }`} 
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder='User Name'
                                    />
                                    </div>
                                <span className='error-msg'>{error}</span>
                                </div>

                                <div>
                                    
                                    <input
                                        type="password"
                                        id="password"
                                        className='p-3  pl-10 my-2 rounded text-black input-password text-white text-base' 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='grid items-center mx-2.5'> 
                                    <p><a href="#" className="text-white col-start-1 col-end-4 forgot-cta font-normal text-sm underline">Forgot Password ?</a></p>
                                <button type="submit" className='y-button px-5px py-10px rounded px-4 col-end-6 font-normal text-sm'>Log In</button>
                                </div>
                                
                            </form>
                            </div>
                        </div>
                    </div>
                    <p className='text-white absolute opacity-35 text-center w-full bottom-0'>Powered by Optimas.ai</p>
                </div>
               
            </section>

        

        </>

    )
}


export default Login;