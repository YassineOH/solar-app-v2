var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const registerClientRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { client, request } = req.body;
    try {
        yield prisma.client.create({
            data: {
                clientType: client.clientType,
                firstName: client.firstName,
                lastName: client.lastName,
                tel: client.tel,
                business: client.business,
                email: client.email,
                requests: {
                    create: {
                        lat: request.lat,
                        lng: request.lng,
                        monthlyBill: request.monthlyBill,
                        projectType: request.projectType,
                        yearlyYield: request.yearlyYield,
                    },
                },
            },
        });
    }
    catch (error) {
        console.log(error);
        yield prisma.$disconnect();
    }
    res.status(201).json({ msg: "request created" });
});
//# sourceMappingURL=requestController.js.map