import cx from 'classnames';
import NumOfStep from '@components/NumOfStep';

interface IProps {
  currentStep: number;
}

function ProgressBar({ currentStep }: IProps) {
  return (
    <div className="flex w-full items-center justify-between ">
      <div className="w-10">
        <NumOfStep number={1} currentStep={currentStep} />
      </div>
      <div className="h-1 w-full bg-transparent md:h-2 ">
        <div
          className={cx(
            'h-full w-full origin-left scale-x-0 bg-teal-800 transition-all duration-1000',
            {
              'scale-x-100': currentStep > 1,
            }
          )}
        />
      </div>
      <div className="w-10">
        <NumOfStep number={2} currentStep={currentStep} />
      </div>
      <div className="h-1 w-full bg-transparent md:h-2 ">
        <div
          className={cx(
            'h-full w-full origin-left scale-x-0 bg-teal-800 transition-all duration-1000',
            {
              'scale-x-100': currentStep > 2,
            }
          )}
        />
      </div>
      <div className="w-10">
        <NumOfStep number={3} currentStep={currentStep} />
      </div>
      <div className="h-1 w-full bg-transparent md:h-2 ">
        <div
          className={cx(
            'h-full w-full origin-left scale-x-0 bg-teal-800 transition-all duration-1000',
            {
              'scale-x-100': currentStep > 3,
            }
          )}
        />
      </div>
      <div className="w-10">
        <NumOfStep number={4} currentStep={currentStep} />
      </div>
    </div>
  );
}
export default ProgressBar;
