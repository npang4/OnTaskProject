import React from "react";
import ReactDom from "react-dom";
import "./jia.css";
import Logo from "./jia.png";

function Jia() {
  return (
    <div className="mydes">
      <div className="coverphoto">
        <img className="img" src={Logo} alt="" />
      </div>
      <div className="myinfo">
        <p>Jia Li - FrontEnd Lead</p>
        <p>
          Hi guys! I'm Jia Li. I'm a senior at San Francisco University with a
          computer science major.
        </p>
        <p>
          My passion to become a computer science major stems from my love for
          video games and the increased use in technology growing up
        </p>

        <p>
          My favorate part about computer science would be database management.
          The first database elective class I have taken fall semester of 2021
          was the very few classes that I have truly enjoyed learning.
        </p>

        <p>
          My life philosophy is the same as my parents, "living a healthy life
          equates to a happy life, one step at a time." Especially in fields
          such as computer science, it's quite often that one may be stressed
          and overworked. It's important that we stay healthy in what we do as
          that will dictate the longevity of what we love doing.
        </p>

        <p>
          Although in this project I will be focused more on frontend, I hope to
          learn much more about backend through the help of my peers and
          professors
        </p>

        <p>Thank you for your time!</p>
      </div>
    </div>
  );
}

// ReactDom.render(<Jia />, document.getElementById("root"));
export default Jia;
