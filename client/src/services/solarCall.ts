import axios from 'axios';

interface Response {
  data: number;
}

const getYearlyProduction = async (
  lat: number,
  lng: number,
  tilt: number
): Promise<number> => {
  try {
    const result = await axios.post<Response>('/api/v1/yearly-yield', {
      lng,
      tilt,
      lat,
    });

    return result.data.data;
  } catch (error) {
    console.log(error);
    return 1650;
  }
};

export default getYearlyProduction;
