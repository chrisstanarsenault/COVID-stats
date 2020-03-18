export default function convertDate(apiDate) {
  let d = new Date(apiDate);
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let dateStr = `${pickMonth(month)} ${date}, ${year}`;
  
  return dateStr
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pickMonth(monthNum) {
  for (let i = 1; i <= months.length; i++ ) {
    if (monthNum === i) {
      return months[i]
    }
  }
}