import { Component, OnInit } from '@angular/core';
import * as json from './../../../strategy.json';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  dataa = json; 
  array :any = ['Infrastructure','Real Estate','LBO'];
  constructor() { }

  ngOnInit(): void {
    this.arrangeData();
  }
  arrangeData(){
    let infras = {title : 'Infrastructure'};
    let reals = {title : 'Real State'};
    let lb = {title : 'LBO'};
    for (let index = 0; index < this.dataa.data.length; index++) {
      if(this.dataa.data[index].strategies == 'Infrastructure'){
        if(this.dataa.data[index]['period']=='Report Date'){
          infras['report'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='5 years prior'){
          infras['5'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='1 year prior'){
          infras['1'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='2 years prior'){
          infras['2'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='3 years prior'){
          infras['3'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='4 years prior'){
          infras['4'] = this.dataa.data[index]['price'];
        }
      }
      if(this.dataa.data[index].strategies == 'Real Estate'){
        if(this.dataa.data[index]['period']=='Report Date'){
          reals['report'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='5 years prior'){
          reals['5'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='1 year prior'){
          reals['1'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='2 years prior'){
          reals['2'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='3 years prior'){
          reals['3'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='4 years prior'){
          reals['4'] = this.dataa.data[index]['price'];
        }
      }
      if(this.dataa.data[index].strategies == 'LBO'){
        if(this.dataa.data[index]['period']=='Report Date'){
          lb['report'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='5 years prior'){
          lb['5'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='1 year prior'){
          lb['1'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='2 years prior'){
          lb['2'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='3 years prior'){
          lb['3'] = this.dataa.data[index]['price'];
        }
        if(this.dataa.data[index]['period']=='4 years prior'){
          lb['4'] = this.dataa.data[index]['price'];
        }
      }
    }
    this.array[0] = infras;
    this.array[1] = reals;
    this.array[2] = lb;
    console.log(this.array);
    
  }

}
