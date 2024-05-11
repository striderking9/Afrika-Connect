import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v1";

export const metadata = {
  title: 'Candidats || Africa Connect',
  description:
    'Africa Connect',
  
}


const index = () => {
  return (
    <>
      
      <CandidatesList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
