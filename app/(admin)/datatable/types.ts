export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "endorsed" | "rejected"
    email: string
    user: string
    organization: string
    facility: string
    dateTimeStart: string
    dateTimeEnd: string
  }
  
  
  export const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "endorsed",
      email: "ken9999999@yahoo.com",
      user: "Phillip Hufana",
      organization: "SPARCS",
      facility: "ATRIUM BABY",
      dateTimeStart: "2:00PM",
      dateTimeEnd: "5:00PM"
    },
    
    {
      id: "3u1reuv4",
      amount: 242,
      status: "endorsed",
      email: "yawa@gmail.com",
      user: "string",
      organization: "string",
      facility: "string",
      dateTimeStart: "string",
      dateTimeEnd: "string"
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "processing",
      email: "Monserrat44@gmail.com",
      user: "string",
      organization: "string",
      facility: "string",
      dateTimeStart: "string",
      dateTimeEnd: "string"
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "endorsed",
      email: "Silas22@gmail.com",
      user: "string",
      organization: "string",
      facility: "string",
      dateTimeStart: "string",
      dateTimeEnd: "string"
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "rejected",
      email: "carmella@hotmail.com",
      user: "wgaar",
      organization: "string",
      facility: "string",
      dateTimeStart: "string",
      dateTimeEnd: "string"
    },
  ]
  