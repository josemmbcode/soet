export function isBusinessOpen() {
  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Caracas",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  });

  const daysOpen = ["Thu,", "Fri,", "Sat,", "Sun,", "Mon,"];
  const day = date.split(" ")[0];
  const hour = +date.split(" ")[1].trim();
  const isOpen = daysOpen.includes(day) && hour > 13 && hour < 23;

  return isOpen;
}
