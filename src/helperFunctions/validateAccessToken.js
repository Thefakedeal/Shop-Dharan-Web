export default async function fetchAccessToken(accessToken){
    const data = {accessToken};

    const response = await fetch("/api/validate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    if(!response.ok) throw response.statusText;
    const body = await response.json();

    return body.valid;
}