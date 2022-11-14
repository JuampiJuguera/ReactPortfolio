import React from "react";
import { Button } from "./Buttons";

const DiscoverBtn = () => {
  /*if ((size = Size.M))
    return <button className="btn btn__discover diagonal">DISCOVER</button>;
*/
  return <Button size={"M"} label="DISCOVER" url="#about" />;
};

export { DiscoverBtn };
