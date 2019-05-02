import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})
export class NewpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goHome(){
    this.navCtrl.pop()
}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpagePage');
  }

}
