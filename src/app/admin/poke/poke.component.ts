import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poke } from 'src/app/models/poke.model';
import { PokeService } from 'src/app/services/poke.service';

declare var $: any;

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  errorMessage: string= "";

@Input()poke: Poke= new Poke();
@Output() save= new EventEmitter<any>();
  constructor( private pokeService:PokeService) {

   }
  ngOnInit(): void {
  }

  savePoke(){
    this.pokeService.savePoke(this.poke).subscribe(data=>{
      this.save.emit(data);
   $('#pokeModal').modal('hide');
    }, err=>{
      this.errorMessage= 'Inesperado error al momento de guardar libro.'
      console.log(err);
    });
   }

   showPokeModal(){
    $('#pokeModal').modal('show');
   }

}
