import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-evento',
  templateUrl: 'info-evento.html',
})
export class InfoEventoPage {
  infoEvento: any;
  userData: any;
  scannerDate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let infoEvento = this.navParams.get('infoEvento');
    this.infoEvento = JSON.parse(infoEvento);
    this.userData = this.navParams.get('userData');
    this.scannerDate = this.navParams.get('scannerDate');
    console.log(this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEventoPage');
  }

}
