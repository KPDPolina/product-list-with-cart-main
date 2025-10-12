import { useMemo } from "react";

export default function useDate({ date, offset, offset_unit }) {
  //const [dateString, setDateString] = useState('')

  const dateString = useMemo(() => {
    let thatdate = new Date(date);
    switch (offset_unit) {
      case "days":
        thatdate.setDate(thatdate.getDate() + offset);
        break;
      case "weeks":
        thatdate.setDate(thatdate.getDate() + offset * 7);
        break;
      case "months":
        thatdate.setMonth(thatdate.getMonth() + offset);
        break;
    }
    return thatdate.toISOString().split("T")[0];
  }, [date, offset, offset_unit]);

  return dateString;
}
