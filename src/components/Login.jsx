import backgroundImage from "../images/overlay-1.png";
import imageSrc from "../images/auth.png";
import logoImg from "../images/logo-dark.png";
import { BiLogoFacebook, BiLogoGithub } from "react-icons/bi";
import { BsGoogle } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div
        className="min-h-screen min-w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-center justify-center">
          <img src={logoImg} className="w-auto h-auto p-14 pb-1" alt="" />
          <p className="text-slate-500 text-sm text-center">
            User Experience & Interface Design Strategy Saas Solution
          </p>
          <div className="hidden sm:flex w-full justify-center my-10">
            <div className="flex flex-col sm:flex-row">
              <div className="bg-custom-primary bg-opacity-100 w-full sm:w-[500px] rounded-l">
                <img src={imageSrc} className="w-full h-auto" alt="" />
              </div>
              <div className="bg-white w-full sm:w-[480px] rounded-r">
                <div className="mt-12">
                  <form>
                    <h4 className="font-bold text-center text-lg">
                      Welcome Back !
                    </h4>
                    <p className="text-slate-400 text-center">
                      Sign in to continue to Tocly.
                    </p>
                    <div className="relative mx-5 mt-7">
                      <input
                        type="text"
                        id="username"
                        className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none placeholder-gray-700"
                        required
                        placeholder="Enter username"
                      />
                      <label
                        htmlFor="username"
                        className="absolute left-2 -top-3 px-1 bg-white text-sm font-semibold text-gray-600"
                      >
                        Username
                      </label>
                    </div>
                    <div className="relative mx-5 mt-7">
                      <input
                        type="password"
                        id="password"
                        className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none placeholder-gray-700"
                        required
                        placeholder="Enter password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-2 -top-3 px-1 bg-white text-sm font-semibold text-gray-600"
                      >
                        Password
                      </label>
                    </div>
                    <div className="mx-5 mt-4 flex items-center gap-1">
                      <input type="checkbox" id="checkbox" className="" />
                      <label
                        htmlFor="checkbox"
                        className="text-sm font-semibold"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="flex justify-center mt-5 max-w-[460px] mx-auto">
                      <Link to={'/'}>
                        <button className="bg-[#0c768a] text-white py-2 text-sm px-4 rounded w-full flex-shrink-0">
                          Sign In
                        </button>
                      </Link>
                    </div>
                    <div className=" mt-24 pt-2 relative">
                      <hr className="w-[300px] mt-1 ms-24 me-4" />
                      <p className="absolute top-0.5 left-1/2 bg-white text-sm font-semibold transform -translate-x-1/2">
                        Sign In with
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center items-center mt-10">
                      <button className="bg-[#0c768a] px-2 py-2 text-xl rounded text-white">
                        <BiLogoFacebook />
                      </button>
                      <button className="bg-red-500 px-2 py-2 text-xl rounded text-white">
                        <BsGoogle />
                      </button>
                      <button className="bg-black px-2 py-2 text-xl rounded text-white">
                        <BiLogoGithub />
                      </button>
                      <button className="bg-blue-500 px-2 py-2 text-xl rounded text-white">
                        <IoLogoTwitter />
                      </button>
                    </div>
                    <div className="flex gap-1 mx-5 mt-7 justify-center items-center">
                      <p className="text-center text-sm text-slate-600">{`already have an account?`}</p>
                      <Link to={"/register"}>
                        <p className="text-[#0c768a] text-sm font-semibold">
                          Register
                        </p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            {/* Content for phone screens */}
            <form>
              <h4 className="font-bold text-center text-lg">Welcome Back !</h4>
              <p className="text-slate-400 text-center">
                Sign in to continue to Tocly.
              </p>
              <div className="relative mx-5 mt-7">
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none placeholder-gray-700"
                  required
                  placeholder="Enter username"
                />
                <label
                  htmlFor="username"
                  className="absolute left-2 -top-3 px-1 bg-white text-sm font-semibold text-gray-600"
                >
                  Username
                </label>
              </div>
              <div className="relative mx-5 mt-7">
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 rounded-md py-3 px-4 w-full focus:outline-none placeholder-gray-700"
                  required
                  placeholder="Enter password"
                />
                <label
                  htmlFor="password"
                  className="absolute left-2 -top-3 px-1 bg-white text-sm font-semibold text-gray-600"
                >
                  Password
                </label>
              </div>
              <div className="mx-5 mt-4 flex items-center gap-1">
                <input type="checkbox" id="checkbox" className="" />
                <label htmlFor="checkbox" className="text-sm font-semibold">
                  Remember me
                </label>
              </div>

              <div className="w-full mt-5">
                <button className="bg-[#0c768a] text-white py-2 text-sm px-4 rounded mx-20">
                  Sign In
                </button>
              </div>
              <div className="mt-4 pt-2 relative">
                <hr className=" w-0 md:w-full mt-1 mx-4" />
                <p className="absolute top-0.5 left-1/2 bg-transparent md:bg-white text-sm font-semibold transform -translate-x-1/2">
                  Sign In with
                </p>
              </div>
              <div className="flex gap-2 justify-center items-center mt-10">
                <button className="bg-[#0c768a] px-2 py-2 text-xl rounded text-white">
                  <BiLogoFacebook />
                </button>
                <button className="bg-red-500 px-2 py-2 text-xl rounded text-white">
                  <BsGoogle />
                </button>
                <button className="bg-black px-2 py-2 text-xl rounded text-white">
                  <BiLogoGithub />
                </button>
                <button className="bg-blue-500 px-2 py-2 text-xl rounded text-white">
                  <IoLogoTwitter />
                </button>
              </div>
              <div className="flex gap-1 mx-5 mt-14 justify-center items-center">
                <p className="text-center text-sm text-slate-600">{`already have an account?`}</p>
                <Link to={"/register"}>
                  <p className="text-[#0c768a] text-sm font-semibold">
                    Register
                  </p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <p className="text-center text-sm font-semibold text-slate-400 md:text-slate-600">
          &copy; 2023 Team-L. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Register;
