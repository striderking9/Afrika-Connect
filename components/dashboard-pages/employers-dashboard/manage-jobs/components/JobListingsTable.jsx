import Link from "next/link";
import jobs from "../../../../../data/job-featured.js";
import Image from "next/image.js";

const JobListingsTable = () => {
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Nos offres d'emploi</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Derniers 6 mois</option>
            <option>Derniers 12 mois</option>
            <option>Derniers 16 mois</option>
            <option>Derniers 24 mois</option>
            <option>Dernier 5 ans</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Titre</th>
                <th>Applications</th>
                <th>Créé et expiré</th>
                <th>Statut</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {jobs.slice(0, 4).map((item) => (
                <tr key={item.id}>
                  <td>
                    {/* <!-- Job Block --> */}
                    <div className="job-block">
                      <div className="inner-box">
                        <div className="content">
                          <span className="company-logo">
                            <Image
                              width={50}
                              height={49}
                              src={item.logo}
                              alt="logo"
                            />
                          </span>
                          <h4>
                            <Link href={`/job-single-v3/${item.id}`}>
                              {item.jobTitle}
                            </Link>
                          </h4>
                          <ul className="job-info">
                            <li>
                              <span className="icon flaticon-briefcase"></span>
                              Segment
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              London, UK
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="applied">
                    <a href="#">3+ Applied</a>
                  </td>
                  <td>
                    October 27, 2017 <br />
                    April 25, 2011
                  </td>
                  <td className="status">Active</td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <button data-text="Voir la candidature">
                            <span className="la la-eye"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Rejeter la candidature">
                            <span className="la la-pencil"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Supprimer la candidature">
                            <span className="la la-trash"></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
