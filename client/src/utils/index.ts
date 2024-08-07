export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export function getFormattedDate() {
  const date = new Date();
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${
    dayName.charAt(0).toUpperCase() + dayName.slice(1)
  }, ${day} de ${month} del ${year}`;
}
