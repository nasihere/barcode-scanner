import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  options :BarcodeScannerOptions;
  data = [
        {
            barcode: "2938989289289",
            active: "Inactive",
            dateTime: '01/02/2017',
            timesScanned: "11",
            info: 'something something something something something' 
        },
        {
            barcode: "393893898998",
            active: "Active",
            dateTime: '02/03/2017',
            timesScanned: "2",
            info: 'Doing it something Doing it' 
        },
    ]
    constructor(private barcodeScanner: BarcodeScanner,public navCtrl: NavController) {
        this.scan();
    }
    getData() {
        return this.data;
    }
    scan() {
        this.options = {
            prompt : "Scan your barcode "
        }
        this.barcodeScanner.scan(this.options).then((barcodeData) => {
            console.log(barcodeData);
            this.scanData = barcodeData;
        }, (err) => {
            console.log("Error occured : " + err);
        });         
    }

}
