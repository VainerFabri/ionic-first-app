import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor(){

  }
//Recupera os dados do localStorage
  getConfigData():any{
    return localStorage.getItem(config_key_name);
  }
//Grava os dados do localStorage
  setConfigData(showSlide?: boolean, name?: string, username?: string):any{
      let config = {
        showSlide: false,
        name: "",
        username: ""
      };

      if(showSlide){
        config.showSlide = showSlide;
      }

      if(name){
        config.name = name;
      }

      if(username){
        config.username = username;
      }

      localStorage.setItem(config_key_name, JSON.stringify(config));
  }

}
