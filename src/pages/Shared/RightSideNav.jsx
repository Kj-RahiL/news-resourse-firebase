import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="border px-3 py-1 space-y-2 mb-2">
                <h2 className=" text-2xl font-bold">Login With</h2>
                <button className="btn w-full border-2 normal-case">
                    <FaGoogle></FaGoogle>
                    <p>Login with Google </p>
                </button>
                <button className=" btn w-full normal-case">
                    <FaGithub></FaGithub>
                    <p>Login with Github</p>
                </button>
            </div>
            <div className="px-3 py-1 mb-5">
                <h2 className="py-5 text-2xl font-bold">Find Us On</h2>
                <a className=" border rounded-t-lg p-4 font-medium flex items-center text-[#706F6F]" href="">
                    <FaFacebook className="mr-2"></FaFacebook>
                    Facebook
                </a>
                <a className=" border-x p-4 font-medium flex items-center text-[#706F6F]" href="">
                    <FaTwitter className="mr-2"></FaTwitter>
                    Twitter
                </a>
                <a className=" border rounded-b-lg p-4 font-medium flex items-center text-[#706F6F]" href="">
                    <FaInstagram className="mr-2"></FaInstagram>
                    Instagram
                </a>

            </div>
            <div className=" bg-[#F3F3F3]  px-3 py-1 space-y-5 mb-2">
                <h2 className="text-xl font-semibold">Q-Zone</h2>
                <img src={qZone} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;