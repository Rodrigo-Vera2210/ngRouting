import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import { IRandomContact, Results } from '../../models/randomuser';


@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrl: './random-user.component.scss'
})
export class RandomUserComponent implements OnInit {

  randomResults: Results | undefined;
  @Input() randomContact: IRandomContact | undefined

  constructor(){}
  
  ngOnInit(): void {
    
  }

}
