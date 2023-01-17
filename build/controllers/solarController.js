var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export const getYearlyYield = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.body;
    const { lat, lng, tilt } = params;
    try {
        const result = yield axios.get(`https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?lat=${lat}&lon=${lng}&peakpower=1&angle=${tilt}&loss=10&outputformat=json`);
        res.json({ data: result.data.outputs.totals.fixed.E_y });
    }
    catch (error) {
        const err = error;
        console.log(err.message);
    }
});
//# sourceMappingURL=solarController.js.map