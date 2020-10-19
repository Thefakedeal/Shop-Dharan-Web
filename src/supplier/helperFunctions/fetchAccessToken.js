export default async function fetchAccessToken(refreshToken){
    const data = {refreshToken};

    const response = await fetch("/api/token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    if(!response.ok) throw response.statusText;
    const body = await response.json();

    return body.accessToken;
}