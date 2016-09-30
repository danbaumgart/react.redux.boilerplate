class KeyValuePair{
  constructor(key,val){
    this.key = key;
    this.value = val;
  }
}
const getDataType = (data)=>{
  return Array.isArray(data) ? 'array' : typeof data;
};
const deconstructString = (key,data)=>{
  return {key:key,value:data};
};
const deconstructObject = (key,data)=>{
  const keys = Object.keys(data);
  let keyvaluepairs = [];
  for(let i = 0; i < keys.length; i++){
    let p = data[keys[i]];
    if(getDataType(p)=='string')
      keyvaluepairs.push(new KeyValuePair(key+'.'+keys[i],p));
  }
  return keyvaluepairs;
};

const getKeyValuePairs = (key,data)=>{
  let arr = [];
  switch(getDataType(data)){
    case 'string':
      arr.push(deconstructString(key,data));
      break;
    case 'array':
      data.forEach((item,idx)=>{
        deconstructObject(key+'['+idx+']',data[idx]).forEach(kvp =>
          arr.push(kvp));
      });
      break;
    case 'object':
      arr = deconstructObject(key,data);
  }
  return arr;
};
export default getKeyValuePairs;
