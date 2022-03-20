export enum MboxRoutes {
  Dashboard = 'dashboard',
  Login = 'login',
  SignUp = 'sign-up',
  Records = 'records',
  AddRecord = 'add-record',
  Home = '/',
}

export interface SignUpFormModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  otp: string;
}
