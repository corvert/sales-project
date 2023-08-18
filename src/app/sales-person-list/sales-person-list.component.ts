import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  title = "Esimene angulari app";

  firstName = "Juku";
  lastName = "Jukusson";

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Juku", "Jukusson", "juku@mail.ee", 30000),
    new SalesPerson("Juhan", "Juhansson", "juhan@mail.ee", 40000),
    new SalesPerson("Sven", "Svensson", "sven@mail.ee", 90000),
    new SalesPerson("Olaf", "Olafsson", "olaf@mail.ee", 60000)
  ];
  
}
