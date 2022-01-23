import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';
import * as fromStore from '../store'
import {Store} from '@ngrx/store'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit(): void {
    this.store.select<any>('pizzas').subscribe(storeData => {
      console.log(storeData)
    })
  }

}
