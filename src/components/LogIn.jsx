import logo from '../Images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

function LogIn({isUserAuthentication}) {

  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const changeLogInData = (e) => {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const submitLogInData = async (e) => {
    e.preventDefault()
    try {
      const url = 'http://localhost:5000/logIn';

      let logInUser = await axios.post(url, data)

      let token = logInUser.data.token;
      let UserId = logInUser.data.UserId;
      if (logInUser.status === false) window.alert("invalid data");

      else {
        sessionStorage.setItem('AcessToken', token);
        sessionStorage.setItem('UserId', UserId);
        isUserAuthentication(true)
        navigate('/');
      }
    }
    catch (err) { window.alert(err.response.data.msg) }
  }

  return (

    <div className="bbtt relative h-full w-full bg-no-repeat bg-center bf-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Link to='/'>
            <img src={logo} alt="logo" className="h-11" />
          </Link>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-2/5 lg:max-w-md rounded-md w-full ">
            <h2 className="text-white text-4xl mb-8 font-semibold">Log in</h2>
            <div className='flex flex-col gap-4'>

              <input
                className=" block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer invalid:border-b-1"
                id='emailId'
                name='email'
                onChange={changeLogInData}
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
                onChange={changeLogInData}
                type="password"
                placeholder="Enter Password"
              />

              <label
                htmlFor="password"
                className="absolute text-md text-zinc-400 duration-150  transform  -translate-y-3  scale-75  top-4  z-10  origin-[0]  left-6 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0  peer-focus:scale-75 peer-focus:-translate-y-3">
              </label>


            </div>

            <button onClick={submitLogInData} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 trasition'>
              Login
            </button >
            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>

              <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FcGoogle size={30} />
              </div>

              <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FaGithub size={30} />
              </div>

            </div>
            <p className="text-neutral-500 mt-12">
              Already on FIXMOVIES ?
              <span className='text-white ml-1 hover:underline cursor-pointer'>
                <Link to='/SignUp'>Create an account</Link>
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn
