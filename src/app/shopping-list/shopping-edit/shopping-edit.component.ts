import { Component, OnInit } from '@angular/core';

import { Component, EventEmitter, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor() { }  

  ngOnInit(): void { 
  }

}
