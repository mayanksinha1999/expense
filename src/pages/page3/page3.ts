import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController,AlertController } from 'ionic-angular';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"page3",
})
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
  amount:any;
  description:any;
  date:any;
  category:any;
  b=false;
  c=false;
  e=false;
  g=false;
  i=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl:MenuController,public alertCtrl: AlertController) {
  }

  today()
{
  this.b=true;
  this.navCtrl.push("page4",{a:this.b});
}
expreport()
{
  this.c=true;
  this.navCtrl.push("page5",{d:this.c});
}
expcategory()
{
  this.e=true;
  this.navCtrl.push("page4",{f:this.e});
}
settings()
{
  this.g=true;
  this.navCtrl.push("page4",{h:this.g});
}
log_out()
{
  // this.i=true;
  this.navCtrl.pop();
}

added(){
  const alert=this.alertCtrl.create({
    title:'Successfully Added',
    buttons: ['OK']
  });
  alert.present();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
