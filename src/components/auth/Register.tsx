import React, { useState } from 'react';
import { Link } from 'react-router-dom';;

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [createPassword, setCreatePassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', createPassword);
      };
  
      const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
      };

  return (
    <>
        <header className='lg:hidden w-full bg-black text-white text-center font-black text-3xl p-4 rounded-b-md'>thriftly</header>
        <div className='h-screen flex flex-row bg-[#F8F4F0]'>
            <div className='hidden lg:block max-w-1/2 relative'>
                <img src={"/assets/images/Sidebar.svg"} alt="" className="h-full p-6" />
                <p className="absolute top-4 left-4 text-white text-2xl font-bold p-8">thriftly</p>
                <div className='absolute bottom-4 left-4 max-w-[500px] space-y-4 p-8'>
                    <p className=" text-white font-bold text-2xl">Keep track of your money and save for your future</p>
                    <p className='text-white text-sm'>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>  
                </div>
            </div>


            <div className='flex flex-1 justify-center items-center '>
                <div className='shadow-xl rounded-lg h-fit flex flex-col min-w-[400px] w-2/3 space-y-10 p-8 bg-white'>
                    <h2 className='font-bold text-2xl'>Sign Up</h2>
                    <form className='space-y-8' onSubmit={handleRegister}>
                    <div className="flex flex-col space-y-1">
                        <label className='text-gray-500' htmlFor="name">Name</label>
                        <input className='border border-black rounded-md opacity-100 p-3 outline-black' type="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className='text-gray-500' htmlFor="email">Email</label>
                        <input className='border border-black rounded-md opacity-100 p-3 outline-black' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="flex flex-col space-y-1 relative">
                        <label className='text-gray-500' htmlFor="createPassword">Password</label>
                        <input className='border border-black rounded-md opacity-100 p-3 outline-black' type={showPassword ? "text" : "password"} id="password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} required />
                        <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={togglePasswordVisibility}>
                        {showPassword ? <img src={'/assets/icons/Eye-slash.svg'} className='h-5 w-5 text-gray-500' alt="eye-slash" /> : <img src={'/assets/icons/Eye.svg'} className='h-5 w-5 text-gray-500' alt="eye" />}
                        </div>
                        <p className='text-gray-500 flex justify-end'>Passwords must be at least 8 characters</p>
                    </div>
                    
                    <div><button className='w-full text-white bg-black rounded-md p-2 ' type="submit">Create Account</button></div>

                    </form>
                    <p className='text-center text-gray-500'>
                    Already have an account? <span className='text-bold text-black underline underline-offset-4'><Link to="/">Login</Link></span> 
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register