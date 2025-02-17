export function convertUTCToLocalTime(utcTime) {
  // Construct a date string in ISO 8601 format using today's date and the given UTC time
  const now = new Date();
  const dateString = `${now.getUTCFullYear()}-${String(
    now.getUTCMonth() + 1
  ).padStart(2, "0")}-${String(now.getUTCDate()).padStart(
    2,
    "0"
  )}T${utcTime}:00.000Z`;

  // Convert the string to a Date object
  const date = new Date(dateString);

  // Convert the Date object to a local time string in 12-hour format with AM/PM
  const localTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return localTime;
}
