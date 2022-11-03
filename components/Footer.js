import { FaTelegramPlane } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FiGithub } from "react-icons/fi"

function Footer(props) {

  const iconSize = 27

  return (
    <div className="Footer">
      <p>Made by @fi9ish</p>
      <span className="Footericons">
        <a className="profileLink" href="https://twitter.com/FinishMee" ><FaTelegramPlane size={iconSize}></FaTelegramPlane></a>
        <a className="profileLink" href="https://t.me/fi9ish"><BsTwitter size={iconSize}></BsTwitter></a>
        <a className="profileLink" href="https://github.com/fi9ish/"><FiGithub size={iconSize}></FiGithub></a>
      </span>
    </div>
  );
}

export { Footer };
