import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"page4",
})
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',
})
export class Page4Page {
  b:any;
  c:any;
  e:any;
  g:any;
  public items:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.b=this.navParams.get('a');
    // alert(this.navParams.get('a'));
    // alert(this.navParams.get('d'));
    this.e=this.navParams.get('f');
    // alert(this.navParams.get('f'));
    this.g=this.navParams.get('h');
    // alert(this.navParams.get('h'));
    // this.i=this.navParams.get('j');
    // alert(this.navParams.get('j'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page4Page');
  }

}
