const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatExperienceDate(start: Date, end: Date | string): string {
  const startMonth = monthNames[start.getMonth()];
  const startYear = start.getFullYear();

  if (end === "Present") {
    return `${startMonth} ${startYear} — Present`.toUpperCase();
  }

  const endDate = end as Date;
  const endMonth = monthNames[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  if (startYear === endYear) {
    return `${startMonth} — ${endMonth} ${startYear}`.toUpperCase();
  }

  return `${startMonth} ${startYear} — ${endMonth} ${endYear}`.toUpperCase();
}

// Función para parsear fechas desde frontmatter
export function parseFrontmatterDate(date: string | Date): Date {
  return typeof date === "string" ? new Date(date) : date;
}