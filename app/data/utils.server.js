export function isBusinessOpen() {
  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Caracas",
    weekday: "long",
  });

  const hour = new Date().getHours("en-US", {
    timeZone: "America/Caracas",
    hour: "numeric",
  });
  const daysOpen = ["Friday", "Saturday", "Sunday", "Monday"];

  const isOpen = daysOpen.includes(date);

  return isOpen;
}
