import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

interface Project {
  id: string,
  title: string,
  description: string,
  items: Item[]
}

interface Item {
  id: string,
  title: string,
  description: string,
  usecount: number,
  lastuse: string
}
@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  arrayLength: number;
  topFiveItems: Item[];

  public projects: any;
  public usageCount: number;
  public usagePercentage: number;

  constructor(
    api: ApiService
  ) {
    // Set some test projects
    // this.projects = [
    //   { id: '123', title: 'Clothes', description: 'Do Stuff',
    //    items: [{id: "1", title:"shirt", description: "button up", useCount: 5, lastUse: "01/01/2020"}, {id: "2", title:"jeans", description: "denim", useCount: 4, lastUse: "01/01/2020"}]},

    //   { id: '124', title: 'Board Games', description: 'Do Stuff',
    //    items: [{id: "1", title:"Puerto Rico", description: "", useCount: 7, lastUse: "01/01/2020"}] },

    //   { id: '125', title: 'Other', description: 'Do Stuff',
    //    items: [{id: "1", title:"Milk", description: "", useCount: 2, lastUse: "01/01/2020"}] }
    // ];
    api.getProjectData()
    .then((response: any) => {
      this.projects = response.projects;
      this.topFiveItems = this.getTopFive();
      this.getUsageStats();
      console.log("Projects" , this.projects)

    })
    
  }

  getProject(id): Project {
    return this.projects.find(projects => projects.id == id);
  }

  getAllItems(): Item[] {
    let items: Item[] = [];
    for(let project of this.projects) {
      for (let item of project.items) {
        let itemWithProject: any = item;
        itemWithProject.project = project.title;
        items.push(itemWithProject);
      }
    }
    return items;
  }

  getTopFive(): Item[] {
    let items = this.getAllItems();
    this.heapSort(items);
    return items.slice(Math.max(items.length - 5, 0)).slice().reverse()
  }

  getUsageStats() {
    let items = this.getAllItems();
    let lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() -1);
    let usageCount = 0;
    let totalCount = items.length;
    let date;
    for (let item of items) {
      date = Date.parse(item.lastuse)
      if (date > lastMonth) usageCount++
    }
    console.log(usageCount)
    this.usageCount = usageCount;
    this.usagePercentage = Math.round(usageCount/totalCount * 100);
    console.log(this.usagePercentage)
  }


  // Heap Sort
  // Complexity: Time - O(nlgn) :: Space - O(1)
  // Reference: https://dev.to/wangonya/sorting-algorithms-with-javascript-part-2-3g51
  maxHeap(input, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < this.arrayLength && input[left].usecount > input[max].usecount) {
      max = left;
    }
    if (right < this.arrayLength && input[right].usecount > input[max].usecount) {
      max = right;
    }
    if (max != i) {
      this.swap(input, i, max);
      this.maxHeap(input, max);
    }
  }

  swap(input, indexA, indexB) {
    let temp = input[indexA];

    input[indexA] = input[indexB];
    input[indexB] = temp;
  }


  heapSort(input) {
    this.arrayLength = input.length;

    for (let i = Math.floor(this.arrayLength / 2); i >= 0; i -= 1) {
      this.maxHeap(input, i);
    }

    for (let i = input.length - 1; i > 0; i--) {
      this.swap(input, 0, i);
      this.arrayLength--;
      this.maxHeap(input, 0);
    }
    return 
  }

}
