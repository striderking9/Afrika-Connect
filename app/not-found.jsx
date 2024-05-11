import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found || Africa-Connect",
  description: "Africa-Connect",
};

const index = () => {
  return (
    <>
      <div
        className="error-page-wrapper "
        style={{
          backgroundImage: `url(/images/404.jpg)`,
        }}
        data-aos="fade"
      >
        <div className="content">
          <div className="logo">
            <Link href="/">
              <Image
                width={154}
                height={50}
                src="/images/logo-2.svg"
                alt="brand"
              />
            </Link>
          </div>
          {/* End logo */}

          <h1>404!</h1>
          <p>La page que vous recherchez n'a pas pu être trouvée.</p>

          <Link className="theme-btn btn-style-three call-modal" href="/">
            RETOUR À L'ACCUEIL
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
