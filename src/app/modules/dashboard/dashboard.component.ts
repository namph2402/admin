import {Component} from '@angular/core';
import {AbstractCRUDComponent} from '../../core/crud';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BsModalService, ModalOptions} from 'ngx-bootstrap';
import {DashboardService} from './dashboard.service';
import {Chart} from 'chart.js';
import {DateTimeUtil, ExcelHelper, FieldForm, ObjectUtil} from '../../core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent extends AbstractCRUDComponent<any> {

  boxes: any[];
  products: any[];
  orders: any[];
  percent: any[];
  expense: any[];
  quantityOrder: any[];
  productCodeMains: any[];
  productQuantityMains: any[];
  userMains: any[];
  year: any = [];

  constructor(
    service: DashboardService,
    modal: BsModalService,
    builder: FormBuilder,
  ) {
    super(service, modal, builder,);
    for (let i = 2100; i > 1900; i--) {
      i
      let data = {
        'name' : i ,
        'value' : i
      }
      this.year.push(data)
    }
    this.searchControls[1].data = this.year;
  }

  onInit(): void {
    this.load();
  }

  onDestroy(): void {
  }

  getCreateModalComponent(): any {
  }

  getCreateModalComponentOptions(): ModalOptions {
    return null;
  }

  getEditModalComponent(): any {
  }

  getEditModalComponentOptions(): ModalOptions {
    return null;
  }

  getTitle(): string {
    return 'Bảng điều khiển';
  }

  initNewModel(): any {
    return null;
  }

  buildSearchForm(): FormGroup {
    return this.formBuilder.group({
      month: new FormControl(moment(new Date().getTime()).format('MM')),
      year: new FormControl(moment(new Date().getTime()).format('YYYY')),
    });
  }

  initSearchForm(): FieldForm[] {
    return [
      FieldForm.createSelect('Tìm kiếm tháng', 'month', 'Tháng', [
        {
          name:'Tháng 1',
          value:'01',
        },
        {
          name:'Tháng 2',
          value:'02',
        },
        {
          name:'Tháng 3',
          value:'03',
        },
        {
          name:'Tháng 4',
          value:'04',
        },
        {
          name:'Tháng 5',
          value:'05',
        },
        {
          name:'Tháng 6',
          value:'06',
        },
        {
          name:'Tháng 7',
          value:'07',
        },
        {
          name:'Tháng 8',
          value:'08',
        },
        {
          name:'Tháng 9',
          value:'09',
        },
        {
          name:'Tháng 10',
          value:'10',
        },
        {
          name:'Tháng 11',
          value:'11',
        },
        {
          name:'Tháng 12',
          value:'12',
        },
      ]),
      FieldForm.createSelect('Tìm kiếm năm', 'year', 'Năm', []),
    ];
  }

  load(): void {
    let param: any = ObjectUtil.combineValue({}, this.searchForm.value, true);
    this.service.loadByParams(param).subscribe(val => {
      this.boxes = val['boxes'];
      this.products = val['products'];
      this.orders = val['orders'];

      this.percent = val['percents'];
      this.quantityOrder = val['quantity'];
      this.productCodeMains = val['productCodeMains'];
      this.productQuantityMains = val['productQuantityMains'];
      this.userMains = val['user'];
      this.expense = val['expenses'];

      setTimeout(() => {
        document.getElementById("orderDiv").innerHTML = `<canvas id="order"></canvas>`;
        document.getElementById("amountDiv").innerHTML = `<canvas id="amount"></canvas>`;
        if(this.productCodeMains.length > 0) {
          document.getElementById("productDiv").innerHTML = `<canvas id="product"></canvas>`;
          new Chart("product", {
            type: 'doughnut',
            data : {
              labels: this.productCodeMains,
              datasets: [{
                label: 'Sản phẩm',
                data: this.productQuantityMains,
                backgroundColor: [
                  'rgb(224, 3, 58)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 241, 110)',
                  'rgb(140, 255, 130)'
                ],
                hoverOffset: 4
              }]
            }
          });
        }
        new Chart("order", {
          type: 'bar',
          data: {
            labels: ['T.1', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7', 'T.8', 'T.9', 'T.10', 'T.11', 'T.12'],
            datasets: [{
              label: 'Đơn hàng bán',
              data: this.quantityOrder,
              backgroundColor: 'rgba(12, 167, 76, 0.5)',
              borderColor: 'rgb(12, 167, 76)',
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: false
              }
            }
          },
        });
        new Chart("amount", {
          type: 'line',
          data: {
              datasets: [{
                  label: 'Doanh thu',
                  data: this.percent,
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderColor: 'rgb(234, 238, 0)',
                  borderWidth: 3,
                  order: 2
              }, {
                  label: 'Chi tiêu',
                  data: this.expense,
                  type: 'line',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderColor: '#f53d3d',
                  borderWidth: 3,
                  order: 1
              }],
              labels: ['T.1', 'T.2', 'T.3', 'T.4', 'T.5', 'T.6', 'T.7', 'T.8', 'T.9', 'T.10', 'T.11', 'T.12'],
          },
          options: {
            scales: {
              y: {
                beginAtZero: false
              }
            }
          },
       });

      }, 100);
    });
  }

  export(filename: string) {
    let param: any = ObjectUtil.combineValue({}, this.searchForm.value, true);
    this.service.export(param).subscribe(blob => {
      ExcelHelper.exportXLSXFile(blob, `${filename}_${DateTimeUtil.today('YYYY_MM_DD_X')}`);
      this.service.toastSuccessfully('Xuất file', 'Thành công');
    });
  }
}
