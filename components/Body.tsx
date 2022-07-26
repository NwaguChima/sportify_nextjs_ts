import React from "react";
import { Search } from "./Search";

interface BodyProps {}

const Body: React.FC<BodyProps> = ({}) => {
  return (
    <section className="bg-black ml24 py-4 space-y-8 md:max-w-6xl  flex-grow md:mr-2.5">
      <Search />
    </section>
  );
};

export default Body;
