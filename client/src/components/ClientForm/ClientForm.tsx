/* eslint-disable import/no-extraneous-dependencies */
import { RefObject } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputWithLabel from '@components/InputWithLabel';
import Button from '@components/Button';
import { Client } from '@types';
import { useGlobalContext, AppContextType } from '@context';
import postClientRequest from '../../services/clientRequest';

interface IProps {
  clientType: 'Professionnel' | 'Particulier';
}

function ClientForm({ clientType }: IProps) {
  const {
    coords,
    projectType,
    parametersSim,
    result,
    setIsFetching,
    isFetching,
    setClientRequestResponse,
  } = useGlobalContext() as AppContextType;
  const [parent] = useAutoAnimate();

  const sendData = async (value: Client) => {
    setIsFetching(true);
    const response = await postClientRequest(
      value,
      clientType,
      projectType,
      coords.lat,
      coords.lng,
      parametersSim.monthlyBill as number,
      result.yearlyYield
    );
    setClientRequestResponse(response);
    setIsFetching(false);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        tel: '',
        email: '',
        business: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('champ obligatoire'),
        lastName: Yup.string().required('champ obligatoire'),
        address: Yup.string().required('champ obligatoire'),
        tel: Yup.string().required('champ obligatoire'),
        email: Yup.string().email('invalid email'),
        business:
          clientType === 'Particulier'
            ? Yup.string()
            : Yup.string().required('champ obligatoire'),
      })}
      onSubmit={(value) => sendData(value)}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-stretch gap-y-4"
          ref={parent as RefObject<HTMLFormElement>}
        >
          {clientType === 'Professionnel' ? (
            <InputWithLabel
              label="Entreprise"
              {...getFieldProps('business')}
              error={touched.business && errors.business}
            />
          ) : null}

          <InputWithLabel
            label="prénom"
            {...getFieldProps('firstName')}
            error={touched.firstName && errors.firstName}
          />
          <InputWithLabel
            label="Nom"
            {...getFieldProps('lastName')}
            error={touched.lastName && errors.lastName}
          />
          <InputWithLabel
            label="adresse"
            {...getFieldProps('address')}
            error={touched.address && errors.address}
          />
          <InputWithLabel
            label="tél"
            {...getFieldProps('tel')}
            error={touched.tel && errors.tel}
          />
          <InputWithLabel
            label="email"
            {...getFieldProps('email')}
            error={touched.email && errors.email}
          />
          <Button type="submit" text="envoyer" disabled={isFetching} />
        </form>
      )}
    </Formik>
  );
}
export default ClientForm;
