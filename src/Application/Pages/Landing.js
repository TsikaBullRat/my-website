import { MdInfo, MdComputer, MdLocalPhone, MdHome } from 'react-icons/md'
import { RiBook3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';

export const Landing = () =>{
  return (
    <div className="main-body">
      <div className="still">
        <Link to="/home" className="block blockA" >
          <MdHome size={40} color="#fff" />
        </Link>
        <Link to="/programming" className="block blockB">
          <MdComputer size={40} color="#fff" />
        </Link>
        {/* <Link to="/poetry" className="block blockA">
          <RiBook3Fill size={40} color="#fff" />
        </Link> */}
        <Link to="/about" className="block blockA">
          <MdInfo size={40} color="#fff" />
        </Link>
        <Link to="/contact" className="block blockB">
          <MdLocalPhone size={40} color="#fff" />
        </Link>
      </div>
    </div>
  );
}