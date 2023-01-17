import { InputHTMLAttributes } from 'react';
import cx from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

function Input({ error = false, ...props }: IProps) {
  return (
    <input
      {...props}
      className={cx(
        'w-full rounded-md border border-teal-500 px-4 py-1 placeholder:text-gray-400 focus:outline-none disabled:bg-gray-100 dark:bg-slate-800 dark:disabled:bg-gray-800',
        {
          'border-red-600': error,
        }
      )}
    />
  );
}
export default Input;
