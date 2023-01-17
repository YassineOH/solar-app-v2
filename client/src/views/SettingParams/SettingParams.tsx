import { useState } from 'react';
import Button from '@components/Button';
import { AppContextType, useGlobalContext } from '@context';
import startSimulation from '@utils/sizing';
import Parameters from '@components/Parameters';
import Spinner from '@components/Spinner';

function SettingParams() {
  const [simFinish, setSimFinish] = useState(false);
  const {
    projectType,
    setCurrentStep,
    parametersSim,
    setIsFetching,
    setResult,
    isFetching,
    coords,
  } = useGlobalContext() as AppContextType;

  const handleStart = async () => {
    setIsFetching(true);
    const result = await startSimulation(parametersSim, projectType, coords);
    setResult(result);
    setSimFinish(true);
    setIsFetching(false);
  };

  return (
    <section className="flex h-full w-full flex-col items-stretch gap-y-4 xl:grid xl:grid-cols-2 xl:items-center">
      <Parameters />
      <div className="mx-auto w-1/2 space-y-4 text-center">
        {isFetching ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            {simFinish ? (
              <Button
                text="afficher les résultats"
                type="button"
                fullWidth
                onClick={() => setCurrentStep(4)}
                disabled={(parametersSim.monthlyBill || 0) <= 500}
              />
            ) : (
              <Button
                text="calculer"
                type="button"
                fullWidth
                onClick={handleStart}
                disabled={(parametersSim.monthlyBill || 0) <= 500}
              />
            )}

            <Button
              text="retour"
              type="button"
              fullWidth
              outline
              onClick={() => setCurrentStep(2)}
            />
          </>
        )}
      </div>
    </section>
  );
}
export default SettingParams;
