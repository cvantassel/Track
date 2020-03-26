import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectsService } from '../services/projects/projects.service';
import { ApiService } from '../services/api/api.service';
// import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.page.html',
  styleUrls: ['./new-item.page.scss'],
})
export class NewItemPage implements OnInit {

  projectInput: string;
  titleInput: any;
  descriptionInput: any;
  imageInput: any;

  constructor(
    public navCtrl: NavController,
    private projectsService: ProjectsService,
    private api: ApiService
    ) { }

  ngOnInit() {
    
  }

  postItem() {
    let body = {
      project: this.projectInput,
      title: this.titleInput,
      description: this.descriptionInput,
      imageInput: this.imageInput
    }
    this.api.postItem(body)
    .then((response) => {
      console.log(response)
    })
  }

}
