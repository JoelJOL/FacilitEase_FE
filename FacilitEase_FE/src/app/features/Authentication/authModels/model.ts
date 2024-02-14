//To store the necessary data from the azure return type after login
export interface azureObj {
  idToken: string;
  accessToken: string;
  localAccountId: string;
  expiration: number;
  name: string;
  username: string;
}
//To get the user details from AD
export interface Profile {
  displayName: string;
  givenName: string;
  id: number;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  surname: string;
  userPrincipalName: string;
}
//To receive the application genererated jwt token fromt the server
export interface AzureReturn {
  token: string;
}
