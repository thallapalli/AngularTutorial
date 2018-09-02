import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
messages:string[]=[];
add(message:string){
this.messages.push(message);

}
clear(){
this.messages=[];
}
showMessage(){
this.messages.push('meesage')
}
  
}
