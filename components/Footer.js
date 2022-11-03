import { FaTelegramPlane } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"
import Image from "next/image";

function Footer(props) {

  const iconSize = 27

  return (
    <div className="Footer">
      <p>Made by @fi9ish</p>
      <span className="Footericons">
        <Image className="profileLink" href="https://twitter.com/FinishMee" alt="photo"><FaTelegramPlane size={iconSize}></FaTelegramPlane></Image>
        <Image className="profileLink" href="https://t.me/fi9ish" alt="photo"><BsTwitter size={iconSize}></BsTwitter></Image>
        <Image className="profileLink" href="https://github.com/fi9ish/" alt="photo"><FiGithub size={iconSize}></FiGithub></Image>
      </span>
    </div>
  );
}

export { Footer };
