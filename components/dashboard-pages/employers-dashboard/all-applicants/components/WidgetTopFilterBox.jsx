const WidgetTopFilterBox = () => {
  return (
    <div className="chosen-outer">
      <select className="chosen-single form-select chosen-container">
        <option>Selectionner tout</option>
        <option>Derniers 12 mois</option>
        <option>Derniers 16 mois</option>
        <option>Derniers 24 mois</option>
        <option>Derniers 5 ans</option>
      </select>
      {/* <!--Tabs Box--> */}

      <select className="chosen-single form-select chosen-container">
        <option>Tout les états</option>
        <option>Derniers 12 mois</option>
        <option>Derniers 16 mois</option>
        <option>Derniers 24 mois</option>
        <option>Derniers 5 ans</option>
      </select>
      {/* <!--Tabs Box--> */}
    </div>
  );
};

export default WidgetTopFilterBox;
