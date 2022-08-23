import React from 'react'
import "../css/login.css"

const SignInApp = () => {
  return (
    
<div className='container mt-5'>

    <div className='row div-contenedor contain'>
    <div className="overlay-panel col-md-6 col-sm-12">
		<form className='form'>
			<h1>Create Account</h1>
			<div className="social-container">
				<a href="#" className="a"><i class="fa fa-facebook" aria-hidden="true"></i></a>
				<a href="#" className="a"><i class="fa fa-google" aria-hidden="true"></i></a>
				<a href="#" className="a"><i class="fa fa-github-square" aria-hidden="true"></i></a>
			</div>
			<span className='span'>or use your email for registration</span>
			<input className='input' type="text" placeholder="Name" />
			<input className='input' type="email" placeholder="Email" />
			<input className='input' type="password" placeholder="Password" />
			<button className='button'>Sign Up</button>
		</form>
	</div>
    <div className='overlay-panel col-md-6 col-sm-12 background-welcome'>
        <div className='p'>
            <h1>Welcome</h1>
            <p>algo</p>
            <button className='button'>SignIn</button>
        </div>
    </div>
    </div>
</div>
    
    )
}

export default SignInApp