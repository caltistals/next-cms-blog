import dayjs from "dayjs";

export function convertDate(date: string) {
  return dayjs(date).format("MMM DD, YYYY");
}
