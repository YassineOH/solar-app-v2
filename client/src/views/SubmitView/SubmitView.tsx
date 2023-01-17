import { RefObject, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import AllResults from '@components/AllResults';
import Button from '@components/Button';
import Modal from '@components/Modal';
import { useGlobalContext, AppContextType } from '@context';

import SwitchCustomer from '@components/SwitchCustomer';
import ClientForm from '@components/ClientForm';
import Spinner from '@components/Spinner';
import ResponseMsg from '@components/ResponseMsg';

function SubmitView() {
  const { setCurrentStep, projectType, requestClientResponse, isFetching } =
    useGlobalContext() as AppContextType;
  const [parent] = useAutoAnimate();

  const [openForm, setOpenForm] = useState(false);
  const [clientType, setClientType] = useState<'Professionnel' | 'Particulier'>(
    () =>
      ['domestic', 'pumping'].includes(projectType || '')
        ? 'Particulier'
        : 'Professionnel'
  );

  return (
    <>
      <section className="flex h-full w-full flex-col items-stretch gap-y-4 xl:grid xl:grid-cols-2 xl:items-center ">
        <AllResults />
        <div className="mx-auto flex h-full w-full flex-col items-center justify-center  gap-y-12 xl:w-10/12">
          <div className="mx-auto w-1/2 space-y-4 text-center">
            <Button
              text="Demander un devis"
              type="button"
              fullWidth
              onClick={() => setOpenForm(true)}
            />
            <Button
              text="recommencer"
              type="button"
              fullWidth
              outline
              onClick={() => setCurrentStep(1)}
            />
          </div>
        </div>
      </section>
      <Modal show={openForm} closeModal={() => setOpenForm(false)}>
        {!requestClientResponse && !isFetching && (
          <SwitchCustomer value={clientType} setClientType={setClientType} />
        )}
        <div ref={parent as RefObject<HTMLDivElement>}>
          {!requestClientResponse &&
            (isFetching ? (
              <div className="flex w-full items-center justify-center text-center">
                <Spinner />
              </div>
            ) : (
              <ClientForm clientType={clientType} />
            ))}
          {requestClientResponse && (
            <ResponseMsg response={requestClientResponse} />
          )}
        </div>
      </Modal>
    </>
  );
}
export default SubmitView;
