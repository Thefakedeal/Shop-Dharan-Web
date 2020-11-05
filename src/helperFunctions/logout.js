export default async function logout(refreshToken) {
  if (!refreshToken) throw "Not Logged In";
  const url = `/api/logout`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });
  return response.ok;
}