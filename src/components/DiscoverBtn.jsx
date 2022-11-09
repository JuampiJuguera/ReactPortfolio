import React from "react";
import { Buttons } from "./Buttons";

// TODO: hacer botones genericos (size, label)

const DiscoverBtn = () => {
  /*if ((size = Size.M))
    return <button className="btn btn__discover diagonal">DISCOVER</button>;
*/
  return <Buttons size={"M"} label="DISCOVER" url="#about"></Buttons>;
};

export { DiscoverBtn };
