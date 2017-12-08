import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  alphanumbers: number[] = [];
  betanumbers: number[] = [];

  constructor() { }

  retrieveAlphaNumbers(): number[] {
    return this.alphanumbers;
  }

  retrieveBetaNumbers(): number[] {
    return this.betanumbers;
  }

  callAlphas(): number [] {
    return this.alphanumbers;
  }

  callBetas(): number [] {
    return this.betanumbers;
  }
}
