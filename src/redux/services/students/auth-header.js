export default function studentAuthHeader() {
  const student = JSON.parse(localStorage.getItem("student"));

  if (student && student.accessToken) {
    return { Authorization: `Bearer  ${student.accessToken}` };
  }
  return {};
}
