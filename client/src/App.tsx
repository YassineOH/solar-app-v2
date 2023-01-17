import { RefObject, Suspense, lazy } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import ProgressBar from '@components/ProgressBar';
import Navbar from '@components/Navbar';
import { useGlobalContext, AppContextType } from '@context';
import Spinner from '@components/Spinner';

const ProjectType = lazy(() => import('@views/ProjectType'));
const GeoPosition = lazy(() => import('@views/GeoPosition'));
const SettingParams = lazy(() => import('@views/SettingParams'));
const SubmitView = lazy(() => import('@views/SubmitView'));

function App() {
  const { currentStep } = useGlobalContext() as AppContextType;
  const [parent] = useAutoAnimate();
  return (
    <>
      <Navbar />
      <main className="container mx-auto mb-12 flex h-full w-full flex-col justify-around scroll-auto">
        <div className="mx-auto mt-10 w-10/12 lg:mt-14">
          <ProgressBar currentStep={currentStep} />
        </div>
        <div
          className="lg:mt-30 mx-auto mt-20 h-auto w-full rounded-md border p-3 px-3 shadow-lg lg:w-3/4 lg:border-2 lg:border-teal-500 xl:h-[30rem]"
          ref={parent as RefObject<HTMLDivElement>}
        >
          <Suspense
            fallback={
              <div className="flex h-full w-full items-center justify-center text-center">
                <Spinner />
              </div>
            }
          >
            {currentStep === 1 && <ProjectType />}
            {currentStep === 2 && <GeoPosition />}
            {currentStep === 3 && <SettingParams />}
            {currentStep === 4 && <SubmitView />}
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default App;
