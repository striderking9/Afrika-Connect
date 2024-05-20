
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import FormContent2 from "./FormContent2";
import Link from "next/link";
import FormContent3 from "@/components/common/form/login/FormContent3";

const Register2 = () => {
  return (
    <div className="form-inner">
      <h3>Créer un compte</h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Candidat
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Employer
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <FormContent2 />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <FormContent3 />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Avez-vous déjà un compte?{" "}
          <Link href="/login" className="call-modal login">
            Connectez-vous
          </Link>
        </div>
        <div className="divider">
          <span>or</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register2;
