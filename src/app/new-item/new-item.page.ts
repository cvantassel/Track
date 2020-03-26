import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  constructor(
    public navCtrl: NavController
    ) { }

  ngOnInit() {
    
  }

}
