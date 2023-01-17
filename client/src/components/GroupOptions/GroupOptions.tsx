import { RadioGroup } from '@headlessui/react';

import Option from '../Option';
import { useGlobalContext, AppContextType } from '../../context';

import type { Option as OptionType, ProjectType } from '../../types';

interface IProps {
  options: OptionType[];
}

function GroupOptions({ options }: IProps) {
  const { setProjectType, projectType } = useGlobalContext() as AppContextType;

  const handleChange = (value: ProjectType) => {
    setProjectType(value);
  };

  return (
    <RadioGroup
      value={projectType || ''}
      onChange={(e: ProjectType) => handleChange(e)}
    >
      <div className="mx-auto flex h-full w-full flex-col gap-y-4 xl:w-10/12">
        {options.map((opt) => (
          <RadioGroup.Option key={opt.value} value={opt.value}>
            {({ checked }) => (
              <Option img={opt.img} text={opt.text} checked={checked} />
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
export default GroupOptions;
