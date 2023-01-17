import Button from '@components/Button';
import Input from '@components/Input';
import Map from '@components/Map';
import { useGlobalContext, AppContextType } from '@context';

function GeoPosition() {
  const { coords, setCurrentStep } = useGlobalContext() as AppContextType;
  return (
    <section className="flex h-full w-full flex-col items-stretch gap-y-4 xl:grid xl:grid-cols-2 xl:items-center ">
      <Map />
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-y-4 lg:gap-y-20 xl:w-10/12">
        <div className="w-full space-y-4">
          <div className="grid grid-cols-2 items-center justify-start gap-x-4">
            latitude:
            <Input value={coords.lat} disabled />
          </div>
          <div className="grid grid-cols-2 items-center justify-start gap-x-4">
            longitude:
            <Input value={coords.lng} disabled />
          </div>
        </div>
        <div className="flex h-auto w-full items-center justify-center gap-x-4">
          <Button
            type="button"
            onClick={() => setCurrentStep(1)}
            text="retour"
            outline
            fullWidth
          />
          <Button
            type="button"
            onClick={() => setCurrentStep(3)}
            text="suivant"
            fullWidth
            disabled={coords.lat === 0 && coords.lng === 0}
          />
        </div>
      </div>
    </section>
  );
}
export default GeoPosition;
