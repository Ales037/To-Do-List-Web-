import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService} from './../../service/crud.service';
import { FormGroup, FormBuilder} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {

  getId: any; // นำ _id มาตรวจสอบ
  updateForm: FormGroup;

  constructor(public formBuilder : FormBuilder,
              private router: Router,
              private ngZone: NgZone,
              private activatedRoute: ActivatedRoute,
              private crudService: CrudService,
              private toastr: ToastrService

    ) {

      this.getId = this.activatedRoute.snapshot .paramMap.get('id'); // นำ id เก็บไว้ใน getId

      this.crudService.GetWork(this.getId).subscribe(res => { // เรียกใช้ GetWork ที่รับ work มาตัวเดียว Single Work
        this.updateForm.setValue({ // ค่าเดิมที่มีอยู่แล้วนำมาแสดง

          name: res['name'],
          detail: res['detail']
        })
      })

      this.updateForm = this.formBuilder.group({ // set ค่าว่างเพื่อเตรียม update

        name: [''],
        detail: ['']

      })

    }

  ngOnInit(): void {
  }

  onUpdate(): any {
      this.crudService.updateWork(this.getId, this.updateForm.value).subscribe(() => { // รับค่าจาก form ที่ใส่ค่าเข้ามาใหม่
      console.log('Data updated successfully');
      this.ngZone.run(() => this.router.navigateByUrl('/all-work'));
      this.toastr.info('Updated Successfully');

    },(err) => {
      console.log(err);
    })
  }

}
