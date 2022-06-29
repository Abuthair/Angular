import { Component, OnInit } from '@angular/core';
import { Signing } from 'src/app/models/signing';
import { SigningService } from '../../service/signing.service';

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
      next: (data: Signing[]) => {
        this.signings = data;
        console.log(data);
      },
    });
  }
}
