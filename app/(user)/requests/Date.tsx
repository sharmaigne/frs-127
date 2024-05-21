// looks like: May 7, 2024 * Tuesday * 10 AM - 12:30 PM
import { stringToDate, stringToDay, stringToTime } from "@/lib/utils";

const DateLine = ({dateStart, dateEnd, className}: {dateStart: string, dateEnd: string, className?: string}) => {
  return (
    <div className={`flex gap-3 items-center ${className}`}>
      <p>{stringToDate(dateStart)}</p>
      <span className="rounded-full w-1 h-1 bg-primary" />
      <p>{stringToDay(dateStart)}</p>
      <span className="rounded-full w-1 h-1 bg-primary" />
      <p>
        {stringToTime(dateStart)} - {stringToTime(dateEnd)}
      </p>
    </div>
  );
}

export default DateLine;