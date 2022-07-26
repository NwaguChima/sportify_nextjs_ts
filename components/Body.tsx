import React from "react";
import { Search } from "./Search";

interface BodyProps {}

const Body: React.FC<BodyProps> = ({}) => {
  return (
    <section>
      <Search />
    </section>
  );
};

export default Body;
