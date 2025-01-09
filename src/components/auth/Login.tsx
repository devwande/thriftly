import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  return (
    <>
    <header className='lg:hidden w-full bg-black text-white text-center font-black text-3xl p-4 rounded-b-md'>thriftly</header>
        <div className='h-screen flex flex-row'>
            <div className='hidden lg:block max-w-1/2 relative bg-[#F8F4F0]'>
                <img src={"src/assets/images/Sidebar.svg"} alt="" className="h-full p-6" />
                <p className="absolute top-4 left-4 text-white text-2xl font-bold p-8">thriftly</p>
                <div className='absolute bottom-4 left-4 max-w-[500px] space-y-4 p-8'>
                    <p className=" text-white font-bold text-2xl">Keep track of your money and save for your future</p>
                    <p className='text-white text-sm'>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>  
                </div>
            </div>


            <div className='flex flex-1 justify-center items-center bg-[#F8F4F0]'>
                <div className='shadow-xl rounded-lg h-fit flex flex-col w-2/3 space-y-10 p-8 bg-white'>
                    <h2 className='font-bold text-2xl'>Login</h2>
                    <form className='space-y-8' onSubmit={handleLogin}>
                        <div className="flex flex-col space-y-2">
                            <label className='text-gray-500' htmlFor="email">Email</label>
                            <input className='border border-black rounded-md opacity-100 p-3 outline-black' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>

                        <div className="flex flex-col space-y-2 relative">
                            <label className='text-gray-500' htmlFor="password">Password</label>
                            <input className='border border-black rounded-md opacity-100 p-3 outline-black' type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <div className='absolute inset-y-0 top-6 right-0 pr-3 flex items-center cursor-pointer' onClick={togglePasswordVisibility}>
                            {showPassword ? <img src={'src/assets/icons/eye-slash.svg'} className='h-5 w-5 text-gray-500' alt="eye-slash" /> : <img src={'src/assets/icons/eye.svg'} className='h-5 w-5 text-gray-500' alt="eye" />}
                            </div>
                        </div>
                        
                        <div>
                            <button onClick={() => navigate('/overview')} className='w-full text-white bg-black rounded-md p-2 ' type="submit">Login</button>
                        </div>
                    </form>
                    <p className='text-center text-gray-500'>
                    Need to create an account? <span className='text-bold text-black underline underline-offset-4'><Link to="/register">Sign up</Link></span> 
                    </p>
                </div>
            </div>
        </div>
    </>
  );
};

export default Login;