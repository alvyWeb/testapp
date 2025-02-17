export function calculateTimeDiff(inputTime) {
  // Get the current time
  const currentTime = new Date();

  const [inputHours, inputMinutes] = inputTime.split(":").map(Number);

  // Set the input time with today's date
  const inputDateTime = new Date(currentTime);
  inputDateTime.setHours(inputHours);
  inputDateTime.setMinutes(inputMinutes);
  inputDateTime.setSeconds(0);

  // Calculate the time difference in milliseconds
  const timeDifference = currentTime.getTime() - inputDateTime.getTime();

  // Take the absolute value of the time difference
  const absoluteTimeDifference = Math.abs(timeDifference);

  // Convert milliseconds to hours and minutes
  const hoursDifference = Math.floor(absoluteTimeDifference / (1000 * 60 * 60));
  const minutesDifference = Math.floor(
    (absoluteTimeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );

  return { hours: hoursDifference, minutes: minutesDifference };
}

export function getTimeDifference(inputTime) {
  // Parse the input time
  const [inputHours, inputMinutes] = inputTime.split(":").map(Number);

  // Get the current UTC time
  const currentTime = new Date();
  const currentUTCHours = currentTime.getUTCHours();
  const currentUTCMinutes = currentTime.getUTCMinutes();

  // Calculate the time difference
  const hoursDiff = inputHours - currentUTCHours;
  const minutesDiff = inputMinutes - currentUTCMinutes;

  return { hours: Math.abs(hoursDiff), minutes: Math.abs(minutesDiff) };
}
