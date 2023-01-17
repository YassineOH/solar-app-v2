import { AppContextType, useGlobalContext } from '@context';
import GroupOptions from '@components/GroupOptions';
import projectOptions from '@utils/options';
import infos from '@utils/infos';
import InfoCard from '@components/InfoCard';
import Button from '@components/Button';

function ProjectType() {
  const { projectType, setCurrentStep } = useGlobalContext() as AppContextType;
  return (
    <section className="flex h-full w-full flex-col items-stretch gap-y-4 xl:grid xl:grid-cols-2 xl:items-center ">
      <GroupOptions options={projectOptions} />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center  gap-y-12 xl:w-10/12">
        {projectType && <InfoCard infos={infos(projectType)} />}
        <div className="mx-auto w-1/2 text-center">
          <Button
            text="Commencer"
            type="button"
            fullWidth
            onClick={() => setCurrentStep(2)}
            disabled={!projectType}
          />
        </div>
      </div>
    </section>
  );
}
export default ProjectType;
