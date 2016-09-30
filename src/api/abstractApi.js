import delay from './delay';


const _getPrimaryKey = () => {
  if(this._schema && this._schema.hasOwnProperty('_identity'))
    return Object.keys(this._schema._identity);
};

class abstractService{
  constructor(db){
    Object.assign(this,
      {_data: db.data},
      {_schema: db.schema});
  }
  get schema(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(this._schema)
          resolve(this._schema);
        reject();
      }, delay);
    });
  }
  get data(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(this._data)
          resolve(this._data);
        reject();
      }, delay);
    });
  }
  list(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(this._data)
          resolve(this._data);
        reject();
      }, delay);
    });
  }
  single(id, ...keys){
    if(this._schema && this._schema.hasOwnProperty('_identity') && !keys.length)
      keys = Object.keys(this._schema._identity);
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(this._data)
          resolve(this._data.find(row => row[key] === id));
        reject();
      }, delay);
    });
  }
  create(payload){
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if(this._data)
          resolve(this._data)
      })
    })
  }
  update(payload, identity){
    
  }
  delete(identity){
    
  }
  
  
}
