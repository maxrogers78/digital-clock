import { Fragment } from "react";
import { formatTime } from "../utils";

const dateFields = [{ format: "DD" }, { format: "MM" }, { format: "YY" }];

const DateCard = ({ actualTime }) => {
  return (
    <div className="flex items-center justify-center gap-2 text-2xl tracking-widest md:text-4xl">
      {dateFields.map(({ format }, i) => (
        <Fragment key={format}>
          <p>{formatTime(actualTime, format)}</p>

          {i + 1 !== dateFields.length && <p>/</p>}
        </Fragment>
      ))}
    </div>
  );
};

export default DateCard;
