import moment from "moment";

export const formatTime = (time, format) => {
  return moment(time).format(format);
};
