import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location.state)

    const handleLogin = (e) =>{
        e.preventDefault();
        const from = new FormData(e.currentTarget)
        const email = from.get('email')
        const password = from.get('password')
        console.log(email, password)

        // sign in user
        signInUser(email,password)
        .then(result=>{
            console.log('sign in user from log in page', result.user)

            navigate(location?.state ? location.state : '/')
        })
        .catch(error=>{
            console.error(error);
        })
       
    }

   
    return (
        <div className="bg-[#F3F3F3]">
            <div className=" mx-28">
                <Navbar className="bg-[#F3F3F3]"></Navbar>

                <div className="card rounded-md shadow-2xl bg-base-100 w-[752px] mx-auto py-16 px-20 mt-20">
                    <h2 className="text-center text-4xl font-semibold">Login your account</h2>
                    <hr className="border mt-10" />
                    <form onSubmit={handleLogin}>
                        <div className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email address</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="input input-bordered bg-[#F3F3F3]" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                className="input input-bordered bg-[#F3F3F3]" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white  w-full bg-[#403F3F] hover:text-black border-2 normal-case hover:border-black">Login</button>
                            </div>
                            <h2 className="text-center my-6">Do not Have An Account ? <Link to='/register' className="text-[#f05555] underline font-bold">Register</Link></h2>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Login;