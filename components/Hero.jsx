import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const redirect = useNavigate();

  return (
    <div className="bg-[url('https://plus.unsplash.com/premium_photo-1681487863055-6e87ed3c53b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxlJTIwY29tbWVyY2V8ZW58MHx8MHx8fDA%3D')] bg-no-repeat bg-center bg-cover h-[calc(100vh-80px)]">
      <div className="hero min-h-screen container">
        <div className="hero-content flex-col lg:flex-row lg:gap-60 ">
          <img
            src="https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold text-primary">
              IO International Stores
            </h1>
            <p className="py-6  text-primary-light font-900">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => redirect("/register")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
