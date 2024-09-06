import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.scss',
})
export class NewProjectComponent implements OnInit {
  newProjectForm: FormGroup;
  projectId: number;


  constructor(private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.newProjectForm = this.formBuilder.group({
      projectName: [''],
      startDate: [''],
      endDate: [''],
      projectManager: [''],
      projectBudget: [''],
      projectStatus: [''],
      projectType: [''],
    });

    this.projectId = parseInt(this.route.snapshot.paramMap.get('id'));
    if(this.projectId){  //only for edit action
      this.projectService.getProjectById(this.projectId).subscribe((projectDataFromDatabase:Project) =>{
        console.log(projectDataFromDatabase)
        this.newProjectForm.patchValue(projectDataFromDatabase);
      })
    }
  }

  saveProject(): void {
    const projectDeta = this.newProjectForm.value;

    if(this.projectId){
      this.projectService.updateProject(this.projectId, projectDeta).subscribe((result:string) =>{
        alert(result);
        this.router.navigate(['list']);
      })

    }else{
    this.projectService.saveProject(projectDeta).subscribe((result: string)=>{
      alert(result)
    })
    //console.log(this.newProjectForm.value);
  }
  }
}
 