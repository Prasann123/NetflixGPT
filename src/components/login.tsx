import React from "react";
import Header from "./header";

const Login: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black/55 ">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="h-96  relative flex min-h-screen items-center justify-center">
        <form className="z-10 w-3/12 pt-10 rounded bg-black/50 flex flex-col" style={{ width: '462px', height: '657px' }}>
       
          <header className="ml-20 mb-2 text-4xl font-bold  text-white">Sign In</header>

      
          <div className="  flex flex-col items-center">
            <input
              type="text"
              placeholder="Email or mobile number"
              className="m-5 h-14 w-2xs rounded border  border-white-500 bg-black-800 p-1 text-white placeholder-white-500 placeholder:p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="m-5 h-14 w-2xs rounded border border-white-500 bg-black-800 p-1 text-white placeholder-white-500 placeholder:p-2"
            />
            <button className="m-4 w-2xs rounded bg-red-600 p-4 text-white">
              Sign In
            </button>
            <h1 className="text-white text-1xl">OR</h1>
            <button className="m-4 w-2xs rounded bg-gray-700 p-4 text-white font-bold">
              Use a sign-In Code
            </button>
            <a href ="#" className="text-white underline">Forgot Password?</a>
         
          

          </div>
          <div className="ml-20 mt-5 display flex items-center">
            <input type="checkbox" className="m-4 transform scale-170"/>
            <label className="text-white">Remember me</label>
          
            </div>
            <p className="text-white ml-22 mt-5">
                New to Netflix? <a href="#" className="font-bold hover:underline !important ">Sign up now</a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
