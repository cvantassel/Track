import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectsService } from '../services/projects/projects.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  progress = 0;

  private cardColorClasses: string[] = ["successColor","tertiaryColor","secondaryColor"];
  // private projectsArr: object[] = [{title: "Clothes"}, {title: "Board Games"}, {title: "Other"}]


  constructor(
    public navCtrl: NavController,
    private projectsService: ProjectsService) {}

  goToProject(projectId){
    this.navCtrl.navigateForward('/project/' + projectId);
  }
  

}
