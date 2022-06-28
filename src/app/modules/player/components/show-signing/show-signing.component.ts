import { Component, OnInit } from '@angular/core';
import { Signing } from 'src/app/models/signing';
import { SigningService } from '../../service/signing.service';

export interface PeriodicElement {
  signingId: number;
  teamId: number;
  price: number;
  season: string;
}
@Component({
  selector: 'app-show-signing',
  templateUrl: './show-signing.component.html',
  styleUrls: ['./show-signing.component.css'],
})
export class ShowSigningComponent implements OnInit {
  signings: Signing[] = [];
  constructor(private _signingService: SigningService) {}
  ngOnInit(): void {
    this._signingService.getSigning().subscribe({
      next: (data) => {
        this.signings = data;
      },
    });
  }
}
