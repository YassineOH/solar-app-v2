import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Spinner() {
  return (
    <div className="flex aspect-square w-10 items-center justify-center">
      <FontAwesomeIcon
        icon={faCircleNotch}
        className="fa-spin text-3xl text-teal-800 dark:text-teal-200"
      />
    </div>
  );
}
export default Spinner;
