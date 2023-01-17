import { Dispatch, SetStateAction } from 'react';
import { Switch as SwitchUI } from '@headlessui/react';

interface IProps {
  isChecked: boolean;
  setIsChecked?: Dispatch<SetStateAction<boolean>>;
}

function Switch({ isChecked, setIsChecked }: IProps) {
  return (
    <div className="flex items-center gap-x-4">
      <SwitchUI
        checked={isChecked}
        onChange={setIsChecked}
        className="inline-flex h-4 w-12 items-center rounded-full bg-gray-400 ui-checked:bg-teal-800"
      >
        <span className="z-20 inline-flex aspect-square h-6 origin-center -translate-x-1 items-center justify-center rounded-full border-2  bg-white transition-all duration-300 ease-in-out ui-checked:translate-x-7 ui-checked:border-teal-800" />
      </SwitchUI>
    </div>
  );
}
export default Switch;
