import Social from "../social/Social";

const CompanyInfo = () => {
  return (
    <ul className="company-info">
      <li>
      Secteur d'activité principal :<span>Application</span>
      </li>
      <li>
        Taille de l'entreprise :<span>501-1,000</span>
      </li>
      <li>
        Créer en: <span>2011</span>
      </li>
      <li>
        Téléphone : <span>+ 223 00 00 00 00</span>
      </li>
      <li>
        Email: <span>info@gmail.com</span>
      </li>
      <li>
        Location: <span>London, UK</span>
      </li>
      <li>
        Réseaux sociaux:
        <Social />
      </li>
    </ul>
  );
};

export default CompanyInfo;
