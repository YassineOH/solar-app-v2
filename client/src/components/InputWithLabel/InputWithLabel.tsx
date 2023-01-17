import Input from '@components/Input';
import { FieldInputProps } from 'formik';

interface IProps extends FieldInputProps<any> {
  label: string;
  error?: string | false;
}

function InputWithLabel({ name, label, error, ...props }: IProps) {
  return (
    <div className="flex flex-col items-stretch gap-y-2">
      <label htmlFor={name} className="capitalize">
        {label}:
      </label>
      <Input id={name} {...props} error={(error || '').length !== 0} />
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </div>
  );
}
export default InputWithLabel;
