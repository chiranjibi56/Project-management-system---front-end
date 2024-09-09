import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { CommonModule } from '@angular/common';
import {Table, TableModule} from 'primeng/table'

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [RouterLink, CommonModule, TableModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  projectList: Project[] = [];

  constructor(private projectService:ProjectService){}

  ngOnInit(): void {
   this.getAllProjects();

  
  }

  getAllProjects():void{
     this.projectService.getProjectList().subscribe((projectList:Project[]) =>{
    // console.log(projectList)
    console.log('getting list from DB')
    this.projectList= projectList
     })

  }

  //method to delete project
  deleteProject(projectId:number): void{
    this.projectService.deleteProject(projectId).subscribe((result:string)=>{
      if(result==='success'){
        alert('project deleted successfully!');
        this.getAllProjects();
      }
    })
  }

}
