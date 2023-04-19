import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurentData } from './restaurent.model';

@Component({
  selector: 'app-restaurent-dash',
  templateUrl: './restaurent-dash.component.html',
  styleUrls: ['./restaurent-dash.component.css']
})
export class RestaurentDashComponent implements OnInit {

  formValue!: FormGroup;
  restModelObj: RestaurentData = new RestaurentData;
  AllRestaurentData: any;
  showadd!:boolean;
  shhowbtn!:boolean;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      service: [''],


    })

    this.getAlldata()


  }
  clickAddResto(){
    this.formValue.reset();
    this.showadd=true;
   this.shhowbtn=false;
  }
  addResto() {
    this.restModelObj.name = this.formValue.value.name;
    this.restModelObj.email = this.formValue.value.email;
    this.restModelObj.mobile = this.formValue.value.mobile;
    this.restModelObj.address = this.formValue.value.address;
    this.restModelObj.service = this.formValue.value.service;

    this.api.PostRestaurent(this.restModelObj).subscribe(res => {
      console.log(res);
      alert("Restaurent Recaurds added Successful 00");
      let ref= document.getElementById('cler');
      ref?.click();
      this.formValue.reset()
      this.getAlldata(); //when you post  any data

   
   
    },
      err => {
        alert("error ! 0")
      })
  }

  getAlldata() {
    this.api.GetRestaurent().subscribe(res => {
      this.AllRestaurentData = res;
    })

  }
  deleteRestaurent(data: any) {
    this.api.DeleteRestorent(data.id).subscribe(res => {
      alert("Restaurent Recaurds Delete Successful 00");
      this.AllRestaurentData = res;
      this.getAlldata();
    })

  }
  editRestaurent(data: any) {

    this.showadd=false;
    this.shhowbtn=true;
    
    this.restModelObj.id =data.id;

     this.formValue.controls['name'].setValue(data.name);

    this.formValue.controls['email'].setValue(data.email);

    this.formValue.controls['mobile'].setValue(data.mobile);

    this.formValue.controls['address'].setValue(data.address);

    this.formValue.controls['service'].setValue(data.service);
  }
  updateResto() {
    this.restModelObj.name = this.formValue.value.name;
    this.restModelObj.email = this.formValue.value.email;
    this.restModelObj.mobile = this.formValue.value.mobile;
    this.restModelObj.address = this.formValue.value.address;
    this.restModelObj.service = this.formValue.value.service;

    this.api.updateRestaurent(this.restModelObj.id,this.formValue.value).subscribe(res=>{
   
      alert("Restaurent recard Updated");
   
  let ref= document.getElementById('cler');
  ref?.click();
  this.formValue.reset()
  this.getAlldata(); //when you post  any data
}) 
}
}
