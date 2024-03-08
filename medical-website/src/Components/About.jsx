import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        we are dedicated to providing compassionate and high-quality healthcare to our community. With a legacy of excellence spanning 21 years, our hospital has become a trusted institution for comprehensive medical services. Our team of skilled and compassionate healthcare professionals is committed to delivering personalized care, utilizing the latest medical advancements and technology.



        </p>
        <p className="text-justify lg:text-start">

        We prioritize transparency in healthcare, ensuring open communication and collaboration between our medical experts and patients. EclipsaCare is not just a healthcare provider; we are a community partner, actively involved in health education and outreach programs.

As we continue to evolve and grow, our unwavering dedication to excellence remains constant. 


Trust us with your health, and let us be your partner in your journey to a healthier, happier life."
          
        </p>
        <p className="text-justify lg:text-start">
        We take pride in our patient-centric approach, fostering a healing environment where every individual is treated with dignity and respect. Our state-of-the-art facilities and cutting-edge medical equipment enable us to offer a wide range of services, from preventive care to advanced treatments and surgeries. At the heart of our mission is a commitment to promoting wellness and enhancing the overall health of our patients.

         
        </p>

        <p>Embracing a patient-first philosophy, we prioritize accessibility and affordability without compromising on quality. Our diverse range of medical specialties ensures that we can address a wide spectrum of healthcare needs, catering to the unique requirements of our diverse community.</p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;