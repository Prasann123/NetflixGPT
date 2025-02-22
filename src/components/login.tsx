import React from "react";
import Header from "./header";

const Login: React.FC = () => {

    const [isSignUPClicked, setIsSignUPClicked] = React.useState(true);

    const handleSignup = () => {
        setIsSignUPClicked(!isSignUPClicked);
    }
  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-black/55">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative flex h-96 min-h-screen items-center justify-center">
        <form
          className="z-10 mt-25 flex w-3/12 flex-col rounded bg-black/50 pt-10"
          style={{ width: "472px", height: "657px" }}
        >
          <header className="mb-2 ml-14 text-4xl font-bold text-white">
            {isSignUPClicked ? "Sign In" : "Sign Up"}
          </header>

          <div className="flex flex-col items-center">
         { !isSignUPClicked &&<input
              type="text"
              placeholder="First Name"
              style={{ width: "362px" }}
              className="border-white-500 bg-black-800 placeholder-white-500 m-5 h-14 rounded border p-1 text-white placeholder:p-2"
            />}
            <input
              type="text"
              placeholder="Email or mobile number"
              style={{ width: "362px" }}
              className="border-white-500 bg-black-800 placeholder-white-500 m-5 h-14 rounded border p-1 text-white placeholder:p-2"
            />
            <input
              type="password"
              placeholder="Password"
              style={{ width: "362px" }}
              className="border-white-500 bg-black-800 placeholder-white-500 m-5 h-14  rounded border p-1 text-white placeholder:p-2"
            />
            <button
              style={{ width: "362px" }}
              className="m-4 flex h-10 w-2xs items-center justify-center rounded bg-red-600 p-4 font-bold text-white"
            >
               {!isSignUPClicked ?"Sign up":"Sign in"} 
            </button>
            <h1 className="text-1xl text-white">OR</h1>
            <button
              style={{ width: "362px" }}
              className="m-4 flex h-10 w-2xs items-center justify-center rounded bg-gray-700 p-4 font-bold text-white"
            >
              Use a sign-In Code
            </button>
            <a href="#" className="text-white underline">
              Forgot Password?
            </a>
          </div>
          <div className="display mt-5 ml-12 flex items-center">
            <input type="checkbox" className="m-4 scale-170 transform" />
            <label className="text-white">Remember me</label>
          </div>
          <p className="mt-5 ml-14 text-white">
           {!isSignUPClicked ? "Already Registered":"New to Netflix?"}
            <a href="#" onClick={handleSignup} className="!important font-bold hover:underline">
             {!isSignUPClicked ?"Sign in Now":"Sign up now"} 
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
