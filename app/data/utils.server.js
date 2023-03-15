export function isBusinessOpen() {
  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Caracas",
    weekday: "long",
  });

  const hour = new Date().getHours("en-US", {
    timeZone: "America/Caracas",
    hour: "numeric",
  });
  const daysOpen = ["Thursday", "Friday", "Saturday", "Sunday", "Monday"];

  const isOpen = daysOpen.includes(date) && hour >= 14 && hour <= 22;

  return isOpen;
}
