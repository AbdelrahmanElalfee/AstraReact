import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";
import './Navigation.Style.scss';

export const Navigation = () => {

    return (
        <Fragment>
            <div className='navigation-container'>
                <Link to='/' className='logo'>
                    Hello Astra Tech!
                </Link>
                <div className='nav-links'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                    <Link to='/form' className='nav-link'>
                        Create User
                    </Link>
                </div>
            </div>

            <Outlet/>
        </Fragment>
    )
}