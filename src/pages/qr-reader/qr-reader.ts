import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InfoEventoPage } from '../info-evento/info-evento';

/**
 * Generated class for the QrReaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-reader',
  templateUrl: 'qr-reader.html',
})
export class QrReaderPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private qrScanner: BarcodeScanner
  ) {
    this.userData = this.navParams.get('userData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrReaderPage');
  }

  scan() {
    this.qrScanner.scan().then(
      qrData => {
        console.log(qrData.text);
        this.navCtrl.push(InfoEventoPage, {
          infoEvento: qrData.text,
          userData: this.userData,
          scannerDate: Date.now()
        });
      }
    );
  }

}
