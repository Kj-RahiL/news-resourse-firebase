import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";


const News = () => {
    const newsLoad = useLoaderData()
    const { id } = useParams()

    const news = newsLoad.find(news => news?._id === id)
    console.log(news)
    return (
        <div className="mt-10 mx-28">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-10">
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold py-2">Dragon News</h2>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="p-8">
                            <figure><img src={news.image_url} alt="Shoes" /></figure>
                            <div className='space-y-4 mt-5'>
                                <h2 className="card-title text-2xl font-bold">{news.title}</h2>
                                <p>{news.details}</p>
                            </div>
                            <div className="py-4 justify-start">
                                <button className="btn bg-[#D72050] text-white hover:text-gray-800 ">All news in this category</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;