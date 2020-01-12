import { Injectable } from '@angular/core';

interface Projects {
  id: string,
  title: string,
  description: string,
  items: Item[]
}

interface Item {
  id: string,
  title: string,
  description: string
  
}
@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  public projects: Projects[] = [];

  constructor() {
    // Set some test todos
    this.projects = [
      { id: '123', title: 'Clothes', description: 'Do Stuff',
       items: [{id: "1", title:"shirt", description: "button up"}, {id: "2", title:"jeans", description: "denim"}]},

      { id: '124', title: 'Board Games', description: 'Do Stuff',
       items: [{id: "1", title:"Puerto Rico", description: ""}] },

      { id: '125', title: 'Other', description: 'Do Stuff',
       items: [{id: "1", title:"Milk", description: ""}] }
    ];
  }


  getProject(id): Projects {
    return this.projects.find(projects => projects.id === id);
  }


}
