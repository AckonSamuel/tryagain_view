export default function staffAuthHeader() {
  const staff = JSON.parse(localStorage.getItem("staff"));

  if (staff && staff.accessToken) {
    return { Authorization: `Bearer  ${staff.accessToken}` };
  }
  return {};
}
