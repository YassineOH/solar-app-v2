import { ButtonHTMLAttributes } from 'react';
import cx from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  fullWidth?: boolean;
  text: string;
  type: 'submit' | 'button';
}

function Button({
  outline = false,
  fullWidth = false,
  type = 'button',
  disabled,
  text,
  ...props
}: IProps) {
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={cx(
        'cursor-pointer rounded-md px-4 py-2 font-semibold capitalize transition-all duration-200 hover:rounded-[20px]',
        {
          'border border-teal-700 bg-transparent text-teal-700': outline,
          'border-none bg-teal-700 text-white ': !outline,
          'w-full': fullWidth,
          'w-auto': !fullWidth,
          'cursor-not-allowed bg-gray-500 text-white': disabled,
        }
      )}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
}
export default Button;
