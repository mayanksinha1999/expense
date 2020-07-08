import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"page5",
})
@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html',
})
export class Page5Page {
  c:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.c=this.navParams.get('d');

  }
  cardclick1(){
    this.navCtrl.push("page6");
  }
  cardclick2(){
    this.navCtrl.push("page7");
  }
  cardclick3(){
    this.navCtrl.push("page8");
  }
  cardclick4(){
    this.navCtrl.push("page9");
  }
  cardclick5(){
    this.navCtrl.push("page10");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page5Page');
  }

}
