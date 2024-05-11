import dynamic from "next/dynamic";
import AppliedJobs from "@/components/dashboard-pages/candidates-dashboard/applied-jobs";

export const metadata = {
  title: "Applied Job || Africa-Connect",
  description: "Africa-Connect",
};

const index = () => {
  return (
    <>
      <AppliedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
