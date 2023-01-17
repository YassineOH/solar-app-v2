import cx from 'classnames';

import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  response: 'fail' | 'success';
}

function ResponseMsg({ response }: IProps) {
  return (
    <div className="flex flex-col items-stretch gap-y-7">
      <div className="text-center">
        <FontAwesomeIcon
          icon={response === 'fail' ? faCircleXmark : faCircleCheck}
          className={cx('text-7xl', {
            'text-teal-600': response === 'success',
            'text-red-500': response === 'fail',
          })}
        />
      </div>
      <p
        className={cx('rounded-md py-2 px-4 text-center font-bold', {
          'bg-teal-100 text-teal-900': response === 'success',
          'bg-red-100 text-red-500': response === 'fail',
        })}
      >
        {response === 'success'
          ? 'Votre demande a été enregistré'
          : "Une erreur s'est produite veuillez réessayer plus tard"}
      </p>
    </div>
  );
}
export default ResponseMsg;
