// Components
import SingleContact from "./SingleContact";

// Hooks
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F6F6F6] py-5 rounded-2xl flex-1 h-full overflow-y-scroll">
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
      <SingleContact />
    </div>
  );
};

export default Contacts;
