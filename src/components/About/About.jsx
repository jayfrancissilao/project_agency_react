import aboutImg from "/src/assets/About/about.png";
const About = () => {
  return (
    <div>
      {/* ABOUT TEXT */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          {/* image here */}
          <div>
            <img src={aboutImg} alt="" className="object-none h-48 w-96" />
          </div>
          {/* text here */}
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-nuetralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="md:w-3/4 text-sm text-nuetralDGrey mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Cupiditate sint commodi magni repudiandae debitis, quisquam,
              possimus minima voluptas aliquam consequatur blanditiis itaque non
              tempore explicabo quam expedita deserunt temporibus nostrum?
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* COMPANY STATS HERE */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-nuetralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* text here */}
          <div className="md:w-1/2">
            <h2 className="text-4xl text-nuetralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-sm text-nuetralDGrey mb-8">
              We need here with our hard work and dedication
            </p>
          </div>
          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              {/* one */}
              <div className="flex items-center gap-4">
                <img src="/src/assets/About/icon1.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2, 245 ,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              {/* two */}
              <div className="flex items-center gap-4">
                <img src="/src/assets/About/icon1.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2, 245 ,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* one */}
              <div className="flex items-center gap-4">
                <img src="/src/assets/About/icon1.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2, 245 ,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              {/* two */}
              <div className="flex items-center gap-4">
                <img src="/src/assets/About/icon1.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2, 245 ,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
