import React from "react";
import "./index.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import aboutMark from "../../asset/mark.png";
import Slider from 'react-slick'

export default function AboutSection() {

  const sliderSettings={
      className: "center",
      centerMode: true,
      infinite: false,
      slidesToShow: 1,
      speed: 500,
      prevArrow:<SamplePrevArrow/>,
      nextArrow:<SampleNextArrow/>
  }
  return (
    <div id='about' className="about_section">
      <div className="about_txt">
        <h4>About us</h4>
        <p>
          We are a team of engineers and security professionals who strive to
          create better products for our users. With experience in a broad range
          of modern technology stacks, we believe security technology can be
          delivered to users with ease and simplicity, just like how we use
          other web applications in our everyday lives.{" "}
        </p>
        <p>
          Etlas is part of the product portfolio of Integrated Security
          Solutions Incorporated in 2000, ISS has a track record of consulting,
          designing, and building security and digital solutions for users in
          multiple industries.
        </p>
        <button>Learn More</button>
      </div>

      <div className="about_boxes_container">

        <Slider {...sliderSettings}>
        <div className="about_box">
          <img alt="" src={aboutMark} />
          <h6>In erat neque, auctor sed semper aced vulpu tate eget.</h6>
          <p>
            Duis accumsan libero suscipit tellus convallis, ac ultr ices leo
            sollici tudin suspendisse et lectus. Morbi malesuada ex ultricies,
            hendre rit augue ut, rhoncus ex. Sed condimentum enim in neque
            sollicitudin, vitae pretium erat tempor. Vivamus non porta odio.
            Duis sit amet convallis sem. Sed et cursus felis.
          </p>
          <div>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
          <h5>John doe</h5>
          <p className="days_span">5 days ago</p>
        </div>

        <div className="about_box ">
          <img alt="" src={aboutMark} />
          <h6>In erat neque, auctor sed semper aced vulpu tate eget.</h6>
          <p>
            Duis accumsan libero suscipit tellus convallis, ac ultr ices leo
            sollici tudin suspendisse et lectus. Morbi malesuada ex ultricies,
            hendre rit augue ut, rhoncus ex. Sed condimentum enim in neque
            sollicitudin, vitae pretium erat tempor. Vivamus non porta odio.
            Duis sit amet convallis sem. Sed et cursus felis.
          </p>
          <div>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
          </div>
          <h5>John doe</h5>
          <p className="days_span">5 days ago</p>
        </div>
        </Slider>

      </div>
    </div>
  );
}


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    > </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{...style}}
    onClick={onClick}
  > </div>
  );
}