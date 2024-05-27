import { msalInstance } from "../services/msal";

export const getToken = async () => {
  // msalInstance.loginRedirect({
  //   scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
  // });
  console.log("inGetToken");
  console.log({ username: process.env.NEXT_PUBLIC_USERNAME });
  await msalInstance.ssoSilent({
    scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
    loginHint: process.env.NEXT_PUBLIC_USERNAME,
  });
  const account = msalInstance.getAllAccounts()[0];
  console.log("account", account);

  const token = await msalInstance.acquireTokenSilent({
    scopes: ["api://717aaf54-6553-432e-85ca-b2399c7f87f6/.default"],
    account: account,
  });
  return token;
};
