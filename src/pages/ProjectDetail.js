import { useParams } from 'react-router-dom';
import ButtonGitHub from '../components/buttonGitHub/ButtonGitHub';
import { projects } from '../helpers/projectList';

import img from './../img/projects/01-big.jpg';

const ProjectDetail = () => {
    const {id} = useParams();
    const project = projects[id]

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt="" className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    <ButtonGitHub link={project.gitHubLink} />

                </div>
            </div>
        </main>
    );
}
 
export default ProjectDetail;