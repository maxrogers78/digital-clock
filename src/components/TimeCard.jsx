import { Fragment } from "react";
import { formatTime } from "../utils";

const timeFields = [
  { name: "hours", format: "HH" },
  { name: "minutes", format: "mm" },
  { name: "seconds", format: "ss" },
];

const TimeCard = ({ actualTime }) => {
  return (
    <div className="flex items-center justify-center gap-6 text-5xl tracking-widest md:text-8xl">
      {timeFields.map(({ name, format }, i) => (
        <Fragment key={name}>
          <p className="relative">
            {formatTime(actualTime, format)}
            <span className="label-time">{name}</span>
          </p>

          {i + 1 !== timeFields.length && <p className="-translate-y-1">:</p>}
        </Fragment>
      ))}
    </div>
  );
};

export default TimeCard;
