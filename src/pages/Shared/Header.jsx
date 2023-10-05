import moment from 'moment/moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center space-y-2  py-4'>
            <img className=' mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;