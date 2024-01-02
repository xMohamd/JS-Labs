function convertTo12HourClock(hour) {
  if (hour == 0) {
    return "12AM";
  } else if (hour === 12) {
    return "12PM";
  } else if (hour < 12) {
    return hour + "AM";
  } else {
    return hour - 12 + "PM";
  }
}

let hour = prompt("Enter the hour (0-23): ");
if (hour === null && hour !== 0) {
  alert("User cancelled");
} else {
  if (hour >= 0 && hour <= 23) {
    alert(convertTo12HourClock(hour));
  } else {
    alert("Invalid hour");
  }
}
