import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-learning';
  constructor(
    private db: AngularFireDatabase) {
  }
  ngOnInit(){
    // db-angularfiredatabase ref
    this.db.list('/courses').valueChanges()
    .subscribe(courses=>console.log(courses))
  }
}
