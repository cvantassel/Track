import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectsService } from '../services/projects/projects.service';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
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
    public projectsService: ProjectsService,
    private api: ApiService,
    private router: Router
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
      this.router.navigateByUrl('/home');
    })
  }

}
