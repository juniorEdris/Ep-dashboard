import { Link } from 'react-router-dom';
import './header.css'

const Header = (props) => {
    return (
        <div className={`header container-fluid`}>
            <div className={`row flex_container`}>
                <div className={`col-2 p-0 text-center logo_wrapper`}>
                    <Link to='/'>

                            eftekar_raghib

                    </Link>
            </div>
            </div>
        </div>
     );
}
 
export default Header;