import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

function Footer(props) {
  const iconSize = 27;

  return (
    <div className="Footer">
      <p>Made by @fi9ish</p>
      <span className="Footericons">
        <Link href="https://github.com/fi9ish/" alt="photo">
          <FiGithub className="FootericonSingle" size={iconSize}></FiGithub>
        </Link>
        <Link href="https://twitter.com/FinishMee" alt="photo">
          <BsTwitter className="FootericonSingle" size={iconSize}></BsTwitter>
        </Link>
        <Link href="https://t.me/fi9ish" alt="photo">
          <FaTelegramPlane
            className="FootericonSingle"
            size={iconSize}
          ></FaTelegramPlane>
        </Link>
      </span>
    </div>
  );
}

export { Footer };
