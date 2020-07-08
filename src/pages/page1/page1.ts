import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"page1",
})
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }


  login_button(){
    this.navCtrl.push("page3");
  }


  signup_page(){
    this.navCtrl.push("page2");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}
