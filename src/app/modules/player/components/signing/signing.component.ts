import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs-compat/operator/map';
import { Signing } from 'src/app/models/signing';
import { SigningService } from '../../service/signing.service';

@Component({
  selector: 'app-signing',
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css'],
})
export class SigningComponent implements OnInit {
  playerId!: number;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _signingService: SigningService
  ) {}
  signingDetails!: Signing;
  addForm!:FormGroup
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map) => {
      let plrId = map.get('id');
      if (plrId) this.playerId = parseInt(plrId);
    });
    this.addForm= new FormGroup({
    teamId: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    season: new FormControl('',[Validators.required]),
   

    })
  }
  addSigning = (addform: FormGroup) => {
    let signing = addform.value;
    this._signingService.addSigning(signing, this.playerId).subscribe({
      next: (data) => (this.signingDetails = data),
    });
  };
}
