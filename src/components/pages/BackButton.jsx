import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

export default function BackButton() {
  const history = useHistory();

  return (
    <button className="back-button" onClick={history.goBack}>
      <FontAwesomeIcon icon={faCaretLeft} />
      <span>Back</span>
    </button>
  );
}
