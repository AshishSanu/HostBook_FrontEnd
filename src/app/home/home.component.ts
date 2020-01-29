import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { IUserModel } from '../Models/IUserModel';
import { Router } from '@angular/router';
import { IBulkRecordModel } from '../Models/IBulkRecodModel';
import { BulkrecordService } from '../Services/bulkrecord.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    users: IUserModel[];
    newUser: IUserModel;
    bulkRecord: IBulkRecordModel[];
  
    firstname : string;
    middlename : string;
    lastname : string;
    mobile : string;
    email : string;
    role : string;
    address : string;
    showBulkRecord: boolean = false;
    startingIndex: number;
    lastIndex: number;
    
  constructor(private userService: UserService, private bulkRecordService: BulkrecordService,
     private router: Router) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser(){
    this.showBulkRecord =false;
    this.userService.getAllUser().subscribe(res=>{
      this.users = res;
    });
  }

  createUser(){
    this.newUser = {
      id: 0,
      firstname: this.firstname,
      middlename: this.middlename,
      lastname: this.lastname,
      mobile: this.mobile,
      email: this.email,
      role: this.role,
      address: this.address
    }

    this.userService.createUser(this.newUser).subscribe(res=>{
      if(res){
        console.log("User created successfully");
      }
    })

    this.firstname = "";
    this.middlename= "";
    this.lastname="";
    this.mobile="";
    this.email="";
    this.role="";
    this.address="";

    this.getAllUser();
  }

  getUserByRepositoryPattern(){
    this.showBulkRecord =false;
    this.userService.getUserByRepositoryPattern().subscribe(res=>{
      this.users = res;
    });
  }

  getUsersUsingSP(){
    this.showBulkRecord =false;
    this.userService.getUsersUsingSP().subscribe(res=>{
      this.users = res;
    });
  }
  showBulkRecords(){
    this.showBulkRecord = true;
  }

  fetchRecords(){
    this.bulkRecordService.getRecoerdsByIndex(this.startingIndex,this.lastIndex).subscribe(res=>{
      this.bulkRecord = res;
    });
  }

}
