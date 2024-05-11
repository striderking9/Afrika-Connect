import Image from "next/image";

const Block1 = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/images/resource/work-1.png",
      title: "Évaluation gratuite des CV",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.`,
    },
    {
      id: 2,
      icon: "/images/resource/work-2.png",
      title: "Evaluation de l'adéquation à l'emploi",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.`,
    },
    {
      id: 3,
      icon: "/images/resource/work-3.png",
      title: "Une aide à chaque étape du processus",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="work-block col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <div className="inner-box">
            <figure className="image">
              <Image
                width={105}
                height={113}
                src={item.icon}
                alt="how it works"
              />
            </figure>
            <h5>{item.title}</h5>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Block1;
