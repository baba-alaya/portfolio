
import { Link } from "react-router-dom";

function Links({about}) {
  return (
    <ul className={`flex flex-col w-fit ${about ? "m-0" : "m-auto"}  `}>
      <Link>Linkdin</Link>
      <Link>Twitter</Link>
      <Link>Github</Link>
      <Link>Email</Link>
    </ul>
  );
}

export default Links;
