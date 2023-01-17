import cx from 'classnames';

interface IProps {
  currentStep: number;
  number: number;
}

function NumOfStep({ currentStep, number }: IProps) {
  return (
    <div
      className={cx(
        'flex aspect-square w-10 items-center justify-center rounded-full border-2  transition-all duration-1000 ease-in-out md:border-4',
        {
          'border-teal-800': currentStep >= number,
          'border-gray-400': currentStep < number,
        }
      )}
    >
      <span
        className={cx(
          'text-xl font-normal transition-all duration-300 ease-in-out md:font-bold',
          {
            'text-teal-800': currentStep >= number,
            'text-gray-400': currentStep < number,
          }
        )}
      >
        {number}
      </span>
    </div>
  );
}
export default NumOfStep;
