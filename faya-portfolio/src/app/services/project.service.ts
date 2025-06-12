import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  url: string; 
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private firestore: Firestore) {}

  getProjects(): Observable<Project[]> {
    const ref = collection(this.firestore, 'projects');
    return collectionData(ref, { idField: 'id' }) as Observable<Project[]>;
  }
}