import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() columnData:any[]=[];
  @Input() tableData:any[]=[];

   @Output() edit = new EventEmitter<any>();
   
   @Output() delete = new EventEmitter<any>();

   onEdit(item:any){
    this.edit.emit(item);
   }
   onDelete(item:any){
    this.delete.emit(item);
   }

}
