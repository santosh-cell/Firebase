import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firebase';
  itemValue = '';
  Address ='';
  Email ='';
  Number ='';
  
items: Observable<any[]>;

constructor(public db:AngularFireDatabase) {
this.items = db.list('items').valueChanges();
}

onSubmit() {
this.db.list('items').push({ content: this.itemValue,Add: this.Address,Mail:this.Email,No:this.Number});
this.itemValue = '';
this.Address ='';
 this. Email ='';
  this.Number ='';
}
}
