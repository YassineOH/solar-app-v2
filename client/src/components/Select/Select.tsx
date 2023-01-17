import { Dispatch, SetStateAction, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {
  faChevronUp,
  faChevronDown,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SelectOption } from '@types';

interface IProps<T> {
  options: SelectOption<T>[];
  option: SelectOption<T>;
  setValue?: Dispatch<SetStateAction<T>>;
}

function Select<T>({ options, option, setValue }: IProps<T>) {
  const [downIcon, setDownIcon] = useState(true);
  return (
    <Listbox value={option.value} onChange={setValue}>
      <Listbox.Button
        onClick={() => setDownIcon(!downIcon)}
        className="flex w-full items-center justify-between rounded-md border border-teal-500 px-4 py-1 shadow-sm "
      >
        <span>{option.text}</span>
        <FontAwesomeIcon icon={downIcon ? faChevronDown : faChevronUp} />
      </Listbox.Button>
      <Transition
        as="div"
        className="relative"
        leave="origin-top transition ease-in-out duration-300"
        enter="origin-top transition ease-in-out duration-300"
        enterFrom="scale-y-0"
        enterTo="scale-y-100"
        leaveFrom="scale-y-100"
        leaveTo="scale-y-0"
      >
        <Listbox.Options
          as="div"
          className="absolute top-1 z-50 flex w-full flex-col gap-y-2 rounded-md border border-teal-500 bg-white py-2 dark:bg-slate-800"
        >
          {options.map((opt) => (
            <Listbox.Option
              as="div"
              key={opt.text}
              value={opt.value}
              className="flex w-full items-center justify-start gap-x-3 px-4 hover:bg-teal-800/25"
            >
              <FontAwesomeIcon
                icon={faCheck}
                className="invisible text-teal-800 ui-selected:visible dark:text-teal-100"
              />
              {opt.text}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
export default Select;
