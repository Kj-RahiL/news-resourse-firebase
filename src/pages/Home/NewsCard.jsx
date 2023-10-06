import { BsBookmark, BsEye, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { author, title, thumbnail_url, details, _id, rating, total_view } = news
    return (
        <div className="card bg-base-100 shadow-md rounded-md mb-8">
            <div className="">
                <div className="flex justify-between items-center bg-[#F3F3F3] p-3 w-full rounded-t-md">
                    <div className="flex gap-5">
                        <img className="w-10 h-10 rounded-full" src={author.img} alt="author img" />
                        <div>
                            <h2>{author.name}</h2>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <BsBookmark></BsBookmark>
                        <BsShare></BsShare>
                    </div>
                </div>
                <div className="card-body">
                    <h2>{title}</h2>
                    <img className="h-72" src={thumbnail_url} alt="" />
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="underline text-blue-800">read more</Link></p>
                            : <p>{details}</p>
                    }
                    <hr className="border" />
                    <div className="flex justify-between">
                        <div className="rating flex gap-2">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <p>{rating?.number}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <BsEye></BsEye>
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

