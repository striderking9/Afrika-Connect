const Notification = () => {
  return (
    <ul className="notification-list">
      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Henry Wilson</strong> a appliqué pour
        <span className="colored"> Product Designer</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Raul Costa</strong> a appliqué pour
        <span className="colored"> Chef de Produit</span>
      </li>
      {/* End li */}

      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Jack Milk</strong> a appliqué pour
        <span className="colored"> Architecte Technique</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Michel Arian</strong>
        a appliqué pour
        <span className="colored"> Ingénieur d'Application</span>
      </li>
      {/* End li */}

      <li>
        <span className="icon flaticon-briefcase"></span>
        <strong>Wade Warren</strong> a appliqué pour
        <span className="colored"> Developpeur Web</span>
      </li>
      {/* End li */}

      <li className="success">
        <span className="icon flaticon-briefcase"></span>
        <strong>Michel Arian</strong>
        a appliqué pour
        <span className="colored"> Ingénieur Logiciel</span>
      </li>
      {/* End li */}
    </ul>
  );
};

export default Notification;
