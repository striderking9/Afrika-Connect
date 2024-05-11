const WidgetToFilterBox = () => {
  return (
    <div className="chosen-outer">
      {/* <!--search box--> */}
      <div className="search-box-one">
        <form method="post" action="blog.html">
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search-field"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      {/* End searchBox one */}

      {/* <!--Tabs Box--> */}
      <select className="chosen-single form-select chosen-container">
        <option>Nouveau</option>
        <option>Derniers 12 mois</option>
        <option>Derniers 16 mois</option>
        <option>Derniers 24 mois</option>
        <option>Derniers 5 ans</option>
      </select>
    </div>
  );
};

export default WidgetToFilterBox;
