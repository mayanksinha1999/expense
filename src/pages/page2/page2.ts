import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:"page2",
})
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
username:any;
firstname:any;
lastname:any;
email:any;
age:number;
dateofbirth:Date;
phoneno:number;
password:any;
password2:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  sub()
  {
    var mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if(this.username==null||this.firstname==null||this.lastname==null||this.email==null||this.age==null||this.phoneno==null||this.password==null)
    {
      const alert=this.alertCtrl.create({
        title:'Please fill all the fields!!',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(this.username.length<3)
    {
      const alert=this.alertCtrl.create({
        title:'Username should me more than 3 characters!!',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(this.firstname.length<3)
    {
      const alert=this.alertCtrl.create({
        title:'First name should me more than 3 characters!!',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(this.lastname.length<3)
    {
      const alert=this.alertCtrl.create({
        title:'Last name should me more than 3 characters!!',
        buttons: ['OK']
      });
      alert.present();
    }
    else if(this.phoneno==0||this.phoneno<=10)
    {
      const alert=this.alertCtrl.create({
        title:'Phone number should contain 10 characters!!',
        buttons: ['OK']
      });
      alert.present();
    }

      else if(!mail.test(this.email))
      {
      const alert=this.alertCtrl.create({
        title:'Email must be in correct format!!',
        buttons: ['OK']
      });
      alert.present();
    }
    // else if(this.password.length<6||this.password.search(/[0-9]/)||this.password.search(/[a-z]/)||this.password.search(/[A-Z]/))
    // {
    //   const alert=this.alertCtrl.create({
    //     title:'Password must contain at least a digit[0-9], an alphabet[a-z/A-Z]!!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    // else if(this.password2!=this.password)
    // {
    //   const alert=this.alertCtrl.create({
    //     title:'Password does not match!!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
    else{
       const alert=this.alertCtrl.create({
      title:'Successfully Added!!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
    }
    // this.http.get('http://localhost/expensify/page3.php?username='+this.username+'&firstname='+this.firstname+'&lastname='+this.lastname+'&age='+this.age+'&dateofbirth='+this.dateofbirth+'&email='+this.email+'&phoneno='+this.phoneno+'&password='+this.password+'&password2='+this.password2).subscribe((res)=>{
    //   console.log('sent');
    // });
  }
// sign_up()
// {
//   this.http.get('http://localhost/expensify/page3.php?username='+this.username+'&firstname='+this.firstname+'&lastname='+this.lastname+'&age='+this.age+'&dateofbirth='+this.dateofbirth+'&email='+this.email+'&phoneno='+this.phoneno+'&password='+this.password+'&password2='+this.password2).subscribe((res)=>{
//     alert('sent');
//   });
// }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

}
