import { Transition } from '@headlessui/react';
import ResultCard from '@components/ResultCard';
import { useGlobalContext, AppContextType } from '@context';
import resultsArray from '@utils/results';
import { useEffect, useState } from 'react';

function AllResults() {
  const { result } = useGlobalContext() as AppContextType;
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  const allResult = resultsArray(result);

  const transitons: string[] = [
    'transition duration-1000 ease-in-out delay-[100ms]',
    'transition duration-1000 ease-in-out delay-[200ms]',
    'transition duration-1000 ease-in-out delay-[300ms]',
    'transition duration-1000 ease-in-out delay-[400ms]',
  ];
  return (
    <Transition
      show={show}
      className="mx-auto flex w-full flex-col items-stretch gap-y-4 px-3 xl:w-11/12"
    >
      {allResult.map((items, ind) => (
        <Transition.Child
          enter={transitons[ind]}
          key={items.value + items.label}
          enterFrom="translate-x-40 opacity-0"
          enterTo="-translate-x-0 opacity-100"
        >
          {}
          <ResultCard
            unit={items.unit}
            icon={items.icon}
            label={items.label}
            value={items.value}
          />
        </Transition.Child>
      ))}
    </Transition>
  );
}
export default AllResults;
