import './style.css';

import vk_icon from './../../img/icons/vk.svg';
import gitHub_icon from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="#!"><img src={vk_icon} alt="Link" /></a></li>
                      <li className="social__item"><a href="#!"><img src={gitHub_icon} alt="Link" /></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2022 frontend-dev.com</p>
                  </div>
              </div>
          </div>
      </footer>
    );
}
 
export default Footer;