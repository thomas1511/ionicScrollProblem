import {NavController, NavParams,Content} from 'ionic-angular';
import {Component, Input, ViewChild} from '@angular/core';


@Component({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html',
})
export class HelloIonicPage {
  @ViewChild(Content) content: Content;
  items:any[];
  message: string;

  constructor() {
    this.items = [];

    for(var i=0;i<50;i++)
    {
      this.items.push({title:'test message ' + i});
    }
  }
  sendMessage() {
    if (this.message) {
      this.items.push({
        "title": this.message
      });
    }

    this.message ='';
  }
  onInputKeypress({keyCode}) {
    if (keyCode == 13) {
      this.sendMessage();
    }
  }
  scrollToBottom(){
    this.content.scrollToBottom(300);//300ms animation speed
  }
}
