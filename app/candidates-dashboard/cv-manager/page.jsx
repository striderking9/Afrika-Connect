import dynamic from "next/dynamic";
import CvManager from "@/components/dashboard-pages/candidates-dashboard/cv-manager";

export const metadata = {
  title: "Candidates Dashboard || Africa-Connect",
  description: "Africa-Connect",
};

const index = () => {
  return (
    <>
      <CvManager />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
