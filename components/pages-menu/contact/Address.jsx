import Image from "next/image";

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Adresse",
      text: (
        <>
          Bamako, Mali
          <br /> Avenu Inconnu, ACI 2000.
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Numéro de téléphone",
      text: (
        <>
          <a href="tel:+22300000000" className="phone">
            + 223 00 00 00 00
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          {" "}
          <a href="#">contact.london@example.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div
          className="contact-block col-lg-4 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className="inner-box">
            <span className="icon">
              <Image
                width={51}
                height={51}
                src={`/images/icons/${item.iconName}.svg`}
                alt="icon"
              />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Address;
