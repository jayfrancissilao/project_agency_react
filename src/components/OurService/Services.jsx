const Services = () => {
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-nuetralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-nuetralDGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/ServicesLogo/Logo_1.png" alt="" />
          <img src="/src/assets/ServicesLogo/Logo_2.png" alt="" />
          <img src="/src/assets/ServicesLogo/Logo_3.png" alt="" />
          <img src="/src/assets/ServicesLogo/Logo_4.png" alt="" />
          <img src="/src/assets/ServicesLogo/Logo_5.png" alt="" />
          <img src="/src/assets/ServicesLogo/Logo_6.png" alt="" />
          <img src="/src/assets/ServicesLogo/Logo_7.png" alt="" />
        </div>
      </div>
      {/* services card */}
      <div></div>
    </div>
  );
};

export default Services;
