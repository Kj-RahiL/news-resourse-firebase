
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className=' flex items-center bg-[#F3F3F3] p-2'>
            <button className=' py-2 px-3 bg-[#D72050] text-white'>Latest</button>
            <Marquee speed={100}>
                <p className=' text-lg font-semibold'>Match Highlights: Germany Vs Spain - as it happen!!!</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;