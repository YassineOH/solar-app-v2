import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
  icon: IconDefinition;
  label: string;
  unit: string;
  value: number;
}

function ResultCard({ icon, label, unit, value }: IProps) {
  return (
    <div className="flex w-full items-center justify-start gap-x-4 rounded-md border border-teal-500">
      <div className="flex aspect-square  w-20 items-center justify-center">
        <FontAwesomeIcon
          icon={icon}
          className="fa-beat-fade text-5xl text-teal-500 delay-1000 dark:text-teal-200 "
        />
      </div>
      <div className="flex h-full flex-col items-stretch justify-start gap-y-0">
        <span className="text-sm uppercase italic">{label}</span>
        <h6 className="text-bold  text-2xl">
          {new Intl.NumberFormat('Fr-fr', {
            maximumFractionDigits: 2,
          }).format(value)}{' '}
          {` ${unit}`}
        </h6>
      </div>
    </div>
  );
}
export default ResultCard;
