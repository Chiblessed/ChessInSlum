import React, { useState } from "react";
import Data from "../components/Data";
import Card from "../components/Card";
import Buttons from "../components/Buttons";

const Blog = () => {
  const [items, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat);
    setItems(newItems);
  };

  return (
    <>
      <div>
        <div className="mx-10 md:mx-3 mt-20 sm:mx-0 lg:mx-24">
          <Buttons
            menuItems={menuItems}
            filterItems={filterItems}
            setItems={setItems}
          />
          <Card items={items} />
        </div>
      </div>
    </>
  );
};

export default Blog;
