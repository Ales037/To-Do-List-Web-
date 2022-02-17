import { Component, OnInit } from '@angular/core';
import {CrudService} from './../../service/crud.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-work-all',
  templateUrl: './work-all.component.html',
  styleUrls: ['./work-all.component.css']
})
export class WorkAllComponent implements OnInit {

  Works:any = [];

  constructor(private crudService:CrudService,private toastr: ToastrService) { }

  ngOnInit(): void {

    this.crudService.GetWorks().subscribe(res => {
      console.log(res);
      this.Works = res;
    })

  }

  delete(id:any, i:any){
    console.log(id);
    if(confirm('Are you sure to delete this Work ?')){
      this.crudService.deleteWork(id).subscribe((res) => {
        this.Works.splice(i, 1); // i = จำนวน index  1 = จำนวนที่ต้องการลบ
        this.toastr.error("Deleted Successfully");
      })

    }
  }


}
