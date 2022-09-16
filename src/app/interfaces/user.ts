export interface UserData {
  total: number,
  data: [
    {
      "_id": string
      "amount": number
      "type": string
      "name": {
        "first": string
        "last": string
      }
      "company": string
      "email": string
      "phone": string
      "address": string
    }
  ]
}

export interface User {
  "_id": string
  "amount": number
  "type": string
  "name": {
    "first": string
    "last": string
  }
  "company": string
  "email": string
  "phone": string
  "address": string
}
