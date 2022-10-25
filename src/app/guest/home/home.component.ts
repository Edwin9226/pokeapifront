import { Component, OnInit } from '@angular/core';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { Poke } from 'src/app/models/poke.model';
import { Purchase } from 'src/app/models/purchase.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PokeService } from 'src/app/services/poke.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokeList: Array<Poke>= [];
  faBug=  faBug;
  errorMessage:string="";
  infoMessage:string="";
  
  constructor(private authenticationService: AuthenticationService,
    private pokeService: PokeService,
    private purchaseService: PurchaseService) { }
    ngOnInit(): void {
      this.pokeService.getAllPokes().subscribe(data=>{
    this.pokeList=data;
    
      });
      }
  purchase(item:Poke){
    if(!this.authenticationService.currentUserValue?.id){
      this.errorMessage='Tu podrias atrapar a un pokemon.'
      return;
    }
    let prueb =new Purchase();
    console.table(prueb)
    const purchas= new Purchase(this.authenticationService.currentUserValue.id, item.id, item.price);
console.table(purchas)
    this.purchaseService.savePurchase(purchas).subscribe(data=>{
      this.infoMessage= 'Mision es completada.'
    }, err=>{
      this.errorMessage=' Inesperado error Ocurrio.'
      console.log(err);
    });
  }


}
