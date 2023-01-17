import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

interface IProps {
  img?: string;
  text: string;
  checked: boolean;
}

function Option({ text, img, checked }: IProps) {
  return (
    <div
      className="d ark:bg-slate-800 flex w-full cursor-pointer items-center justify-start gap-x-2 rounded-md border border-gray-200 p-3 shadow-sm 
      ui-checked:border-teal-500 ui-checked:bg-teal-700 ui-checked:text-white 
      ui-active:ring-4 ui-active:ring-teal-500/50  dark:text-white dark:ui-checked:bg-teal-700"
    >
      {img && (
        <img
          src={img}
          alt="logo"
          loading="lazy"
          className="aspect-square w-6"
        />
      )}
      <h3 className="w-full text-lg font-bold">{text}</h3>
      <FontAwesomeIcon
        icon={faCircleCheck}
        className={cx('text-lg text-white', {
          'visible block': checked,
          'invisible block': !checked,
        })}
      />
    </div>
  );
}
export default Option;
