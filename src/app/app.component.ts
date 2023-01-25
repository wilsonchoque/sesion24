import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog){}
  ngOnInit(){
    
  }
  


  title = 'sesion24';
}
