import { Component, OnInit } from '@angular/core';
import { ProjectService, Project} from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }
}