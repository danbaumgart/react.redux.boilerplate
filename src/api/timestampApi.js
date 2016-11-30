const GetStamp = (now)=> {
  const d = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds()
  };
  return Object.assign({},d,{meridiem: d.hour >= 12 ? 'PM' : 'AM'},{hour:d.hour>=12? d.hour-12 : d.hour});
};
const Timestamp = ()=>{
  const stamp = Object.assign({},GetStamp(new Date()));
  ['hour','day','month','minute','second'].forEach((t)=>{
    if(stamp[t] < 10) stamp[t] = '0' + stamp[t];
  });
  return Object.assign({},
    {date: stamp.month + '/' +stamp.day+'/'+stamp.year},
    {time: stamp.hour + ':' + stamp.minute + ':' + stamp.second+' '+stamp.meridiem});
};
export default Timestamp;
