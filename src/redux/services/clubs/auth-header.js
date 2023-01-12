export default function clubAuthHeader() {
  const club = JSON.parse(localStorage.getItem("club"));

  if (club && club.accessToken) {
    return { Authorization: `Bearer  ${club.accessToken}` };
  }
  return {};
}
