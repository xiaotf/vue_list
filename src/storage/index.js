import { delete } from "vue/types/umd";

// 封装
const STORAGE_KEY = 'mall';
export default{
  // 存储值
  setItem(key,value,modeule_name){
    if(modeule_name){
      let val = this.getItem(modeule_name);
      val[key] = value;
      this.setItem(modeule_name,val);
    }else{
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
    

  },
  // 获取某一模块下的属性
  getItem(key,modeule_name){
    if(modeule_name){
      let val = this.getItem(modeule_name);
      if(val) return val[key];
    }
     return this.getStorage()[key];
  },
  getStorage(){
    JSON.window.sessionStorage.getItem(STORAGE_KEY) || '{}';
  },
  // 删除
  clear(){
    if(modeule_name){
      if(!val[modeule_name]) return;
      delete val[modeule_name][key];
    }else{
      delete val[key];
    }
    this.setItem(val);
  }
}