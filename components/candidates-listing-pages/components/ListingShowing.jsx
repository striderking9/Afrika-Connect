const ListingShowing = () => {
  return (
    <div className="ls-show-more">
      <p>Affichage de 36 sur 497 emplois</p>
      <div className="bar">
        <span className="bar-inner" style={{ width: "40%" }}></span>
      </div>
      <button className="show-more">Afficher plus</button>
    </div>
  );
};

export default ListingShowing;
