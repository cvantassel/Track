import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProjectsService } from '../services/projects/projects.service';
import { ScrollHideConfig } from '../directives/hide-header.directive';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  progress = 0;

  private cardColorClasses: string[] = ["successColor","tertiaryColor","secondaryColor"];
  // private projectsArr: object[] = [{title: "Clothes"}, {title: "Board Games"}, {title: "Other"}]

  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 200 };

  constructor(
    public navCtrl: NavController,
    private projectsService: ProjectsService) {}

  goToProject(projectId){
    this.navCtrl.navigateForward('/project/' + projectId);
  }
  

}
