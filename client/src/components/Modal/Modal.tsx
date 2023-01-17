import { Dialog, Transition } from '@headlessui/react';

import { Fragment, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  show: boolean;
  closeModal: () => void;
}

function Modal({ children, show, closeModal }: IProps) {
  return (
    <Transition show={show}>
      <Dialog onClose={() => closeModal()} open={show}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="absolute top-0 right-0 flex h-screen w-screen items-center justify-center bg-gray-800/20 dark:bg-gray-50/20 "
            aria-hidden="true"
          >
            <Transition.Child
              as={Fragment}
              enter="transition duration-300 ease-in-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-1 scale-100"
              leave="transition duration-300 ease-in-out"
              leaveFrom="opacity-1 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="h-auto w-11/12 rounded-md border border-teal-500 bg-white p-6 text-black shadow-md dark:bg-slate-800 dark:text-white lg:w-[34rem]">
                <Dialog.Title className="py-2 text-lg font-semibold">
                  Remplir la formulaire
                </Dialog.Title>
                <Dialog.Panel>{children}</Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
export default Modal;
