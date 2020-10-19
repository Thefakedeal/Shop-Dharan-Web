import validateAccessToken from "./validateAccessToken";
import fetchAccessToken from "./fetchAccessToken";

export default async function uploadWithCredentials(method="POST", url, object){
    let accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
  
    const isValid = await validateAccessToken(accessToken);
    if (!isValid){
      accessToken = await fetchAccessToken(refreshToken);
      sessionStorage.setItem("accessToken", accessToken);
    }
  
    let body = new FormData()

    for(const key in object){
        body.append(key.toString(), object[key])
    }

    return await fetch(url,{
        method: method,
        headers: {
          authorization: `bearer ${accessToken}`,
        },
        body: body
    })
}