import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faChildren } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div>
      <div className="feature-boxes">
        <div className="learn">
          <h1 className="iconn"><FontAwesomeIcon icon={faGraduationCap} /></h1>
          <h3>Learn</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
            praesentium molestiae ut obcaecati fuga necessitatibus saepe eum at
            rerum.
          </p>
        </div>
        <div className="play">
          <h1 className="iconn"><FontAwesomeIcon icon={faChildren} /></h1>
          <h3>play</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
            praesentium molestiae ut obcaecati fuga necessitatibus saepe eum at
            rerum.
          </p>
        </div>
        <div className="meal">
          <h1 className="iconn"><FontAwesomeIcon icon={faBowlFood} /></h1>
          <h3>meal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
            praesentium molestiae ut obcaecati fuga necessitatibus saepe eum at
            rerum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
