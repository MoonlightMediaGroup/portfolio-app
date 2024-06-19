import './style.css';
import gitHub from './gitHub-black.svg';

const ButtonGitHub = (props) => {
    return (
        <a href={props.link} className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub repo
        </a>
    );
}
 
export default ButtonGitHub;