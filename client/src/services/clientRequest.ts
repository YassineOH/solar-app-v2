import axios from 'axios';
import { Client, ProjectType } from '@types';

const postClientRequest = async (
  client: Client,
  clientType: 'Professionnel' | 'Particulier',
  projectType: ProjectType,
  lat: number,
  lng: number,
  monthlyBill: number,
  yearlyYield: number
): Promise<'fail' | 'success'> => {
  try {
    await axios.post('/api/v1/client-request', {
      client: { ...client, clientType },
      request: {
        projectType,
        lat,
        lng,
        monthlyBill,
        yearlyYield,
      },
    });

    return 'success';
  } catch (error) {
    console.log(error);
    return 'fail';
  }
};

export default postClientRequest;
