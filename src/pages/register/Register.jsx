import React from 'react'

const Register = () => {
  return (
    <div className={` signIn bg-signin vh-100 `}>
        <div className="container">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-md-5 col-sm-7  bg-white ">
                    <form className='d-flex flex-column p-4'>
                    <h3 className='h6 pb-2 text-primary'>Sign up</h3>
                    <input type="text" className='mb-1 form-control borderinput' placeholder='name' />
                    <input type="email" className='mb-1 form-control borderinput' placeholder='ex@gmail.com' />
                    <input type="password" className='borderinput form-control' placeholder='password' />
                    <button className='mt-3 mb-3 btn borderbuttonSignin text-white '>Sign up</button>
                    {/* <span className='text-center forgetpass fs-6 text-primary'>Forget your password?</span> */}
                    </form>
                    <div className="SIWG d-flex flex-column position-relative align-items-center">
                        <span className='or mb-1'>or use</span>
                        <button className='w-75 borderbutton btn btn-primary'>Sign in with google</button>
                    </div>
                    <p className='ps-4 pt-3 pb-1 fs-6 noaccount text-danger'>Have an account? Sign in</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
