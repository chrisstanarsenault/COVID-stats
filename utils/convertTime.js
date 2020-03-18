export default function convertTime(apiTime) {
  let time = apiTime; // your input

  time = time.split(':'); // convert to array

  // fetch
  let hours = Number(time[0]);
  let minutes = Number(time[1]);
  let seconds = Number(time[2]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue= "" + hours;
  } else if (hours > 12) {
    timeValue= "" + (hours - 12);
  } else if (hours == 0) {
    timeValue= "12";
  }
  
  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  // timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
  timeValue += (hours >= 12) ? " P.M. GMT" : " A.M. GMT";  // get AM/PM

  return timeValue;
  }
