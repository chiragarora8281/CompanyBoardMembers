import Heading from "./Heading";
import Image from "./Image";
import JSON from "../data.json";

//Parent of Heading and Image
const Team = () => {
  return (
    <div>
      <Heading />
      <Image data={JSON} />
    </div>
  );
};

export default Team;
