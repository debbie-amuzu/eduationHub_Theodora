import heroimg3 from "../assets/image/heroimg3.png";

const About = () => {
  return (
    <div className="about">
      <div className="us">
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          accusantium a fuga, odit at eligendi accusamus dolor suscipit libero
          in.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="numbers">
        <div>
          <h1>4000+</h1>
          students
        </div>
        <div>
          <h1>49</h1>
          teachers
        </div>
        <div>
          <h1>12</h1>
          Awards
        </div>
      </div>
      </div>
      <div className="pic">
        <img src={heroimg3} alt="" srcset="" />
      </div>
    </div>
  );
};
export default About;
