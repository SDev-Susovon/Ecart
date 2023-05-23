import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogin, userSignup } from '../services/slices/AuthSlice'


const initState = {
  firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" })
  const [signup, setSignup] = useState(initState)

  const navigate = useNavigate()
  const {error, msg, token} = useSelector( state => state.auth)
  const dispatch = useDispatch()

  const handleChangeLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleChangeSignup = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }

  useEffect(()=>{
    if(token){
      alert(msg || error)
      navigate("/")
    }
  },[token,msg, error, navigate])

  const validateLogin = ()=>{
    if(login.email && login.password){
      dispatch(userLogin(login))
      setLogin({ email: "", password: "" })
    }
  }

  const validateSignup = ()=>{
    if(signup.password === signup.confirmPassword){
      if(signup.firstName && signup.lastName && signup.email && signup.password && signup.confirmPassword){
        dispatch(userSignup(signup))
        setSignup(initState)
        alert(msg || error)
        navigate("/")
      }
    }else{
      alert("Password Did not Matched !!")
    }
  }

  // useEffect(()=>{

  // },[token])

  return (
    <div>
      {/* <!--form--> */}

      <section id="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-1">

              {/* <!--login form--> */}

              <div className="login-form">
                <h2>Login to your account</h2>

                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name='email'
                    value={login.email}
                    onChange={handleChangeLogin}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={login.password}
                    onChange={handleChangeLogin}
                  />

                  {/* <span>
                    <input
                      type="checkbox"
                      className="checkbox" />
                    Keep me signed in
                  </span> */}

                  <button className="btn btn-default" onClick={validateLogin}>Login</button>
                </form>
              </div>

              {/* <!--/login form--> */}

            </div>
            <div className="col-sm-1">
              <h2 className="or">OR</h2>
            </div>
            <div className="col-sm-4">

              {/* <!--sign up form--> */}

              <div className="signup-form">
                <h2>New User Signup!</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="First Name"
                    name='firstName'
                    value={signup.firstName}
                    onChange={handleChangeSignup}
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    name='lastName'
                    value={signup.lastName}
                    onChange={handleChangeSignup}
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    name='email'
                    value={signup.email}
                    onChange={handleChangeSignup}
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={signup.password}
                    onChange={handleChangeSignup}
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name='confirmPassword'
                    value={signup.confirmPassword}
                    onChange={handleChangeSignup}
                  />

                  <button className="btn btn-default" onClick={validateSignup}>Signup</button>
                </form>
              </div>

              {/* <!--/sign up form--> */}

            </div>
          </div>
        </div>
      </section>

      {/* <!--/form--> */}

    </div>
  )
}

export default Login