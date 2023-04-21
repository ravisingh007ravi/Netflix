import { useState } from 'react'
import logo from '../Images/logo.png';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function SignUp() {

  const navigate = useNavigate();

  const [data, setData] = useState({ fName: "", lName: "", email: "", password: "" });

  const signUpData = (e) => {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitSignupdata = async (e) => {
    e.preventDefault()
    try {

      const url = 'http://localhost:5000/SignUp';

      const user = await axios.post(url, data)
      if (user.status === false) window.alert("invalid data")
      else { navigate('/') }
    }
    catch (err) { window.alert(err.response.data.msg) }
  }


  return (

    <div className="bbtt relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src={logo} alt="logo" className="h-11" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-1 lg:max-w-2/5 lg:max-w-md rounded-md w-full ">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign up</h2>
            <div className='flex flex-col gap-4'>

              <input
                className=" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
                id='FirstName'
                name='fName'
                onChange={signUpData}
                type="text"
                placeholder="Enter First Name"
              />

              <label
                htmlFor="FirstName"
                className="absolute text-md text-zinc-400 duration-150  transform  -translate-y-3  scale-75  top-4  z-10  origin-[0]  left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
              </label>

              <input
                className=" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
                id='LastName'
                name='lName'
                onChange={signUpData}
                type="text"
                placeholder="Enter Last Name"
              />

              <label
                htmlFor="LastName"
                className="absolute text-md text-zinc-400 duration-150  transform  -translate-y-3  scale-75  top-4  z-10  origin-[0]  left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
              </label>

              <input
                className=" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
                id='emailId'
                name='email'
                onChange={signUpData}
                type="text"
                placeholder="Enter Email"
              />

              <label
                htmlFor="emailId"
                className="absolute text-md text-zinc-400 duration-150  transform  -translate-y-3  scale-75  top-4  z-10  origin-[0]  left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
              </label>

              <input
                className=" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
                id='password'
                name='password'
                onChange={signUpData}
                type="password"
                placeholder="Enter Password"
              />

              <label
                htmlFor="password"
                className="absolute text-md text-zinc-400 duration-150  transform  -translate-y-3  scale-75  top-4  z-10  origin-[0]  left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
              </label>


            </div>

            <button onClick={submitSignupdata} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 trasition'>
              Sign up
            </button >

            

            <p className="text-neutral-500 mt-12">
              Don't have an account yet?
              <span className='text-white ml-1 hover:underline cursor-pointer'>
                <Link to='/LogIn'>Log In</Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUp
