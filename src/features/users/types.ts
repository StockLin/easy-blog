export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string
  }
}

export interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress | null,
  phone: string,
  website: string,
  company: ICompany | null
}

export interface IUserResponse {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}