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
        <a className="profileLink" href="https://twitter.com/FinishMee" ><FontAwesomeIcon className="icon" icon={faTwitter} size="xl"></FontAwesomeIcon></a>
        <a className="profileLink" href="https://t.me/fi9ish"><FontAwesomeIcon className="icon" icon={faTelegram} size="xl"></FontAwesomeIcon></a>
        <a className="profileLink" href="https://github.com/fi9ish/"><FontAwesomeIcon className="icon" icon={faGithub} size="xl"></FontAwesomeIcon></a>
      </span>
    </div>
  );
}

export { Footer };
