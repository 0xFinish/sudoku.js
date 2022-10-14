import {
  faTwitter,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  return (
    <div className="Footer">
      <p>Made by @fi9ish</p>
      <span className="Footericons">
        <a clasName="profileLink" href="https://google.com" ><FontAwesomeIcon className="icon" icon={faTwitter} size="xl"></FontAwesomeIcon></a>
        <a clasName="profileLink" href="#"><FontAwesomeIcon className="icon" icon={faTelegram} size="xl"></FontAwesomeIcon></a>
        <a clasName="profileLink" href="#"><FontAwesomeIcon className="icon" icon={faGithub} size="xl"></FontAwesomeIcon></a>
      </span>
    </div>
  );
}

export { Footer };
