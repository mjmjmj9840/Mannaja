/**
 * Convert date format (yyyy.mm.dd hh:mm -> yyyy년 mm월 dd일 오전/오후 hh시 mm분)
 * @param {String} date (yyyy.mm.dd hh:mm)
 */
export function getDateFormat(date) {
  let meetingDateArr = date.split(" "); // ["yyyy.mm.dd", "hh:mm"]
  let dateArr = meetingDateArr[0].split("."); // ["yyyy", "mm", "dd"]
  let timeArr = meetingDateArr[1].split(":"); // ["hh" : "mm"]

  let year = dateArr[0] + "년 ";
  let month = dateArr[1] + "월 ";
  let day = dateArr[2] + "일 ";
  let dayOfWeek = getDayOfWeek(dateArr[0]) + "요일 ";
  let hour = getAMPM(timeArr[0]) + "시 ";
  let minute = timeArr[1] === "00" ? "" : timeArr[1] + "분"; // 00분일 경우 미출력

  return year + month + day + dayOfWeek + hour + minute;
}

/**
 * get day of week from date
 * @param {String} date (yyyy.mm.dd)
 */
export function getDayOfWeek(date) {
  let dayOfWeekArr = ["일", "월", "화", "수", "목", "금", "토"];
  return dayOfWeekArr[new Date(date).getDay()];
}

/**
 * get AM/PM from time
 * @param {String} time (hh)
 */
export function getAMPM(time) {
  time = Number(time);

  let strTime = "";

  if (time >= 12) {
    strTime = "오후 ";
  } else {
    strTime = "오전 ";
  }

  if (time > 12) {
    strTime += time - 12;
  } else {
    strTime += time;
  }

  return strTime;
}
