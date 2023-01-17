import { useState, useEffect } from 'react';
import Select from '@components/Select';
import {
  structureType,
  electricityProvider,
  networkType,
} from '@utils/parameters';
import { ElectricityProvider, NetworkType, StructureType } from '@types';
import { AppContextType, useGlobalContext } from '@context';
import Input from '@components/Input';
import Switch from '@components/Switch';

function Parameters() {
  const { setParamsSim, projectType } = useGlobalContext() as AppContextType;
  const [structure, setStructure] = useState<StructureType>('roof');
  const [provider, setProvider] = useState<ElectricityProvider>('onee');
  const [bill, setBill] = useState<number>(0);
  const [withBatteries, setBatteries] = useState(false);
  const [network, setNetwork] = useState<NetworkType>(
    projectType === 'domestic' ? 'bt' : 'mt'
  );

  useEffect(() => {
    setParamsSim({
      electricityProvider: provider,
      networkType: network,
      structureType: structure,
      monthlyBill: bill,
      withStorage: withBatteries,
    });
  }, [structure, provider, network, withBatteries, bill]);
  return (
    <div className="mx-auto flex w-full flex-col items-stretch gap-y-4 px-3 xl:w-11/12">
      <div className="flex flex-col items-stretch">
        <span className="mb-1">Facture d&apos;mensuelle en MAD: </span>
        <Input
          type="number"
          onChange={(e) => setBill(Number(e.target.value))}
          min={0}
          step={10}
          value={bill}
        />
      </div>
      <div className="flex flex-col items-stretch">
        <span className="mb-1">Distributeur d&apos;électricité </span>
        <Select<ElectricityProvider>
          options={electricityProvider}
          option={
            electricityProvider.find((value) => value.value === provider) ||
            electricityProvider[0]
          }
          setValue={setProvider}
        />
      </div>
      <div className="flex flex-col items-stretch">
        <span className="mb-1">Mode de pose:</span>
        <Select<StructureType>
          options={structureType}
          option={
            structureType.find((value) => value.value === structure) ||
            structureType[0]
          }
          setValue={setStructure}
        />
      </div>
      <div className="flex flex-col items-stretch">
        <span className="mb-1">Type de raccordement: </span>
        <Select<NetworkType>
          options={networkType}
          option={
            networkType.find((value) => value.value === network) ||
            networkType[0]
          }
          setValue={setNetwork}
        />
      </div>
      {projectType === 'domestic' && (
        <div className="flex flex-col items-stretch">
          <span className="mb-1">Installation avec stockage: </span>
          <Switch isChecked={withBatteries} setIsChecked={setBatteries} />
        </div>
      )}
    </div>
  );
}
export default Parameters;
