import { Component, OnInit, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {CrudService} from './../../service/crud.service';
import { FormBuilder, FormGroup} from '@angular/forms';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {

  workForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
    private toastr: ToastrService
  ) {
    this.workForm = this.formBuilder.group({

      name: [''],
      detail:['']

    });
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.AddWork(this.workForm.value)
    .subscribe(()=>{
      console.log("Data Add Successfully");
      this.toastr.success("Add Work Successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/all-work'));

    },(err) => {
      console.log(err);
    })
  }
}
