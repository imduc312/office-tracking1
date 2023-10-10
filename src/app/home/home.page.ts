import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonModal) modal!: IonModal;

  name!: string;
  selectedData: { [key: string]: string } = {};
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    const dataFromSelectConfim = this.selectedData;
    console.log(dataFromSelectConfim);
  }
  selectStatus(selected: any) {
    this.selectedData = selected;
  }
  constructor() {}

  // onclick
  isOpen: boolean = false;
  onClickOpenModal(
    isOpen: boolean,
    data?: {
      dayNumber: string;
      dayText: string;
      morning: string;
      afternoon: string;
      evening: string;
    }
  ) {
    this.isOpen = isOpen;
    if (data) {
      const daily = this.dailies.find((d) =>
        d.schedules.some((s) => s === data)
      );
      if (daily) {
        daily.selectedStatus = ''; // Đặt lại trạng thái khi mở modal
      }
    }
  }
  dailies = [
    {
      user: {
        avatar:
          'https://lh3.googleusercontent.com/a/ACg8ocIhAMTa1Zfo_9EXA67v0ICHaChKnpltNnHzj2d1JznyQuE=s360-c-no',
        name: 'Le Van A',
      },
      schedules: [
        {
          dayNumber: '02',
          dayText: 'Mon',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '03',
          dayText: 'Tus',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '04',
          dayText: 'Wed',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '05',
          dayText: 'Thu',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Offline',
        },
        {
          dayNumber: '06',
          dayText: 'Fri',
          morning: 'Office',
          afternoon: 'Office',
          evening: 'Online',
        },
        {
          dayNumber: '07',
          dayText: 'Sat',
          morning: 'Online',
          afternoon: 'Online',
          evening: 'Offline',
        },

        {
          dayNumber: '08',
          dayText: 'Sun',
          morning: 'Online',
          afternoon: 'Offline',
          evening: 'Offline',
        },
      ],
      selectedStatus: '', // Thêm trạng thái được chọn cho mỗi phần tử
    },
  ];
}
// test log
