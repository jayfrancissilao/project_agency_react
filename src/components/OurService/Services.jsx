const Services = () => {
  // services card
  const services = [
    {
      id: 1,
      title: "Membership Organization",
      description:
        "Our Membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/ServicesLogo/service_1.png",
    },
    {
      id: 2,
      title: "Membership Organization",
      description:
        "Our Membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/ServicesLogo/service_2.png",
    },
    {
      id: 3,
      title: "Membership Organization",
      description:
        "Our Membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/ServicesLogo/service_3.png",
    },
  ];
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
      <div className="text-center mt-20 md:w-1/2 mx-auto">
        <h2 className="text-4xl text-nuetralDGrey font-semibold mb-3">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-nuetralDGrey">Who is nextcent suitable for?</p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <div>
                {/* iamges */}
                <div className="bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                  <img src={service.image} alt="" className="-ml-1" />
                </div>

                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
