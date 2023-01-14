
const CLUBID = () => {

    return JSON.parse(localStorage.getItem("club")).data.id;
}
export default CLUBID;