export default function convertDate(apiDate) {
  let d = apiDate;
  let date = d.substring(8, 10);
  let month = parseInt(d.substring(5, 7));
  let year = d.substring(0, 4);
  let dateStr = `${pickMonth(month)} ${date}, ${year}`;

  return dateStr
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pickMonth(monthNum) {
  for (let i = 0; i < months.length -1; i++) {
    if (monthNum === i) {
      return months[i - 1]
    }
  }
}