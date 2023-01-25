import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AbrirdialogComponent } from '../abrirdialog/abrirdialog.component';

export interface DialogData {
  new_name: string
  juego: string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit{
  
  constructor(public dialogo: MatDialog){}

  ngOnInit(): void {
  }
  new_name!:string;
  juego!:string;

  AbrirDialog(): void {    
    const dialogRef = this.dialogo.open(AbrirdialogComponent, {
      data: {new_name: this.new_name, juego: this.juego},
    })
    dialogRef.afterClosed().subscribe(result =>{           
      this.juego = result
    })
  }
  
  }

