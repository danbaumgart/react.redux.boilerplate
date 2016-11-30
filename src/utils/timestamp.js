const GetStamp = (now)=> {
  const d = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds()
  };
  return Object.assign({}, d, {
    meridiem: d.hour >= 12 ? 'PM' : 'AM',
    hour: d.hour > 12 ? d.hour - 12 : d.hour
  });
};
export const SetTimer = ({hours = 0, minutes = 0, seconds = 0}) => {
  const stamp = new Date();
  if(!isNaN(hours) && hours > 0)
    stamp.setHours(stamp.getHours() + Number(hours));
  if(!isNaN(minutes) && minutes > 0)
    stamp.setMinutes(stamp.getMinutes() + Number(minutes));
  if(!isNaN(seconds) && minutes > 0)
    stamp.setSeconds(stamp.getSeconds() + Number(seconds));
  return new Timestamp(stamp);
};
const Timestamp = (raw = null)=>{
  const values = GetStamp(raw || new Date());
  const formatter = (value) => value < 10 ? '0' + value : value;
  return Object.assign(values,
    {date: formatter(values.month) + '/' +formatter(values.day)+'/'+values.year},
    {time: formatter(values.hour) + ':' + formatter(values.minute) + ':' + formatter(values.second)+' '+values.meridiem},
    {raw});
};
export default Timestamp;
