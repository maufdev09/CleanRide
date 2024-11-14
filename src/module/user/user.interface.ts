
export type UserRole = 'admin'|'user';


 export type IUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: UserRole;
    address: string;
  }