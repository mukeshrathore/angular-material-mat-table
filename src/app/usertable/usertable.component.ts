import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort,MatTableDataSource,MatSortable,MatPaginator } from "@angular/material";
import { UserService } from "../user.service";

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource;
  showTableData:boolean=false;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginate:MatPaginator; 
displayedColumns=['name','username','email'];
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  showTable(){
    this.showTableData=true;
    this.userService.getUser().subscribe(results=>{
      if(!results){
        return results
      }
      this.dataSource=new MatTableDataSource(results);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginate;
          })
  }

}
