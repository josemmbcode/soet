import { emergencyClosure } from "./products.server";
export async function isBusinessOpen() {
  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Caracas",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  });
  const isEmergencyClosed = await emergencyClosure();
  const daysOpen = ["Thu,", "Fri,", "Sat,", "Sun,","Mon,"];
  const day = date.split(" ")[0];
  const hour = +date.split(" ")[1].trim();
  const isOpen = daysOpen.includes(day) && hour > 13 && hour < 23 && !isEmergencyClosed;

  return isOpen;
}
