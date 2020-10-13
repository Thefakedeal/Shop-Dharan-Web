import validateAccessToken from "./validateAccessToken";
import fetchAccessToken from "./fetchAccessToken";

export default async function fetchWithCredentials(method = "POST", url, body) {
  let accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const isValid = await validateAccessToken(accessToken);
  if (!isValid){
    accessToken = await fetchAccessToken(refreshToken);
    sessionStorage.setItem("accessToken", accessToken);
  }

  let options = {
    method: method,
    headers: {
      authorization: `bearer ${accessToken}`,
      "content-type": "application/json",
    },
    
  };
  if(body && method != 'GET'){
   options = {...options, body: JSON.stringify(body),} 
  }
  
  return await fetch(url,options);
}
