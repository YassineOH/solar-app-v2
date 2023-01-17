import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

interface Client {
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  clientType: string;
  business?: string;
}

interface ClientRequest {
  projectType: string;
  lat: number;
  lng: number;
  monthlyBill: number;
  yearlyYield: number;
}

interface RequestBoyd {
  client: Client;
  request: ClientRequest;
}

interface TypedRequestBody extends Request {
  body: RequestBoyd;
}

export const registerClientRequest = async (
  req: TypedRequestBody,
  res: Response
) => {
  const { client, request } = req.body;

  try {
    await prisma.client.create({
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
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }

  res.status(201).json({ msg: "request created" });
};
