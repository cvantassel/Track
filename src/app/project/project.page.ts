import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects/projects.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

  public project;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public projectsService: ProjectsService
  ) { }

  returnHome() {
    this.navCtrl.back();
  }

  ionViewWillEnter(){
    let projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projectsService.getProject(projectId);
  }

  ngOnInit() {
  }

}
