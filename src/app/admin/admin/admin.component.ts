import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Poke } from 'src/app/models/poke.model';
import { BookService } from 'src/app/services/book.service';
import { PokeService } from 'src/app/services/poke.service';
import { BookComponent } from '../book/book.component';
import { PokeComponent } from '../poke/poke.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  pokeList: Array<Poke>=[];
  selectedPoke: Poke= new Poke();
  errorMessage: string= ""; 

  @ViewChild(PokeComponent) child: PokeComponent|undefined;
  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeService.getAllPokes().subscribe(data=>{
      this.pokeList= data;
    });
  }

  createPokeRequest(){
    this.selectedPoke= new Poke();
    this.child?.showPokeModal();
  }

  editPokeRequest(item: Book){
    this.selectedPoke= Object.assign({},item); 
    this.child?.showPokeModal();
  }
  savePokeWatcher(poke:Poke){
    let itemIndex= this.pokeList.findIndex(item => item.id=== poke.id);
    if(itemIndex!==-1)
    {
       this.pokeList[itemIndex]= poke;
    }else{
      this.pokeList.push(poke);
  
    }
    }

    deletePoke(item:Poke, ind: number){
      this.pokeService.deletePoke(item).subscribe(data=>{
          this.pokeList.splice(ind, 1);
      }, err=>{
        this.errorMessage= 'Inesperado error ocurrio.';
        console.log(err);
      });
    }

}
