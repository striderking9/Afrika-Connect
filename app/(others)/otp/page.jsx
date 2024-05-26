import dynamic from "next/dynamic";

import Otp from "@/components/pages-menu/otp";

export const metadata = {
  title: 'Otp || Confirmation',
  description:
  'Afrika-Connect',
  
}



const index = () => {
  return (
    <>
      
      <Otp />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
