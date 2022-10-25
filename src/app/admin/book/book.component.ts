import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

 book: Book= new Book();
errorMessage: string= "";


  constructor( private bookService:BookService) {

   }

   saveBook(){
    this.bookService.saveBook(this.book).subscribe(data=>{
//...
    }, err=>{
      this.errorMessage= 'Inesperado error al momento de guardar libro.'
      console.log(err);
    });
   }

   showBookModal(){
    $('#bookModal').modal('show');
   }
 
}
