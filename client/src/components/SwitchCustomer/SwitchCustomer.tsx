import { Dispatch, SetStateAction } from 'react';
import { RadioGroup } from '@headlessui/react';
import Option from '@components/Option';

const options = [
  {
    text: 'Particulier',
    checked: false,
  },
  {
    text: 'Professionnel',
    checked: false,
  },
];

interface IProps {
  value: 'Professionnel' | 'Particulier';
  setClientType: Dispatch<SetStateAction<'Professionnel' | 'Particulier'>>;
}

function SwitchCustomer({ setClientType, value }: IProps) {
  const handleChange = (customerType: 'Professionnel' | 'Particulier') => {
    setClientType(customerType);
  };

  return (
    <RadioGroup
      value={value}
      onChange={(e: 'Professionnel' | 'Particulier') => handleChange(e)}
    >
      <div className="mx-auto my-4 grid grid-cols-2 gap-x-4">
        {options.map((opt) => (
          <RadioGroup.Option key={opt.text} value={opt.text}>
            {({ checked }) => <Option text={opt.text} checked={checked} />}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}
export default SwitchCustomer;
