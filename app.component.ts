import { NgFor } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
  stuname = "";
  
  isEditable = -1;
  tempvalue = "";
  btnvalue = "ADD";



  name = ["charmi", "aashvi", "mahek"];


  addStudent() {
    if (this.isEditable == -1) {
      this.name.push(this.stuname)
      this.stuname = ""
      return
    }

    this.name[this.isEditable] = this.stuname;
    this.isEditable = -1;
    this.btnvalue = "Edit"
  }

  deletestudent(i: any) {
    this.name.splice(i, 1)
  }

  selectIndex(i: any) {
    this.btnvalue = "Edit";
    this.isEditable = i;
    this.stuname = this.name[i];
  }

}
