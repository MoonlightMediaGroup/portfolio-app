import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode';
import './style.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const activeLinkClass = 'nav-list__link nav-list__link--active';
    const normalLinkClass = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to='/' className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <ButtonDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className={({isActive}) =>{
                                return isActive ? activeLinkClass : normalLinkClass
                            }}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/projects' className={({isActive}) =>{
                                return isActive ? activeLinkClass : normalLinkClass
                            }}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/contacts' className={({isActive}) =>{
                                return isActive ? activeLinkClass : normalLinkClass
                            }}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;