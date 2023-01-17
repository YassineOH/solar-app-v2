import axios, { AxiosError } from "axios";
import type { Response, Request } from "express";
import type { Root } from "../types/index.js";

export const getYearlyYield = async (req: Request, res: Response) => {
  const params = req.body;

  const { lat, lng, tilt } = params;
  try {
    const result = await axios.get<Root>(
      `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?lat=${lat}&lon=${lng}&peakpower=1&angle=${tilt}&loss=10&outputformat=json`
    );
    res.json({ data: result.data.outputs.totals.fixed.E_y });
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
  }
};
