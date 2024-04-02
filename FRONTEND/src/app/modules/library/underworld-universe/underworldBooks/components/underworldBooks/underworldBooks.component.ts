// import { FavoriteService } from '../../../../../../core/favorites/favorite.service';
import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-underworldBooks',
  templateUrl: './underworldBooks.component.html',
  styleUrls: ['./underworldBooks.component.scss']
})
export class underworldBooksComponent implements OnInit {
 
  @Input() underworldBook: any;
  isAdmin: boolean = false;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    // private FavoriteService: FavoriteService 
  ) { }

  ngOnInit(): void {
    // Lógica para verificar si el usuario es administrador
  }

  tarjetaVolteada: boolean = false;
  
  clickCard() {
    const clickcardElement = this.elementRef.nativeElement.querySelector('.underworldBooks-container-deck-card');
    if (this.tarjetaVolteada) {
      this.renderer.removeClass(clickcardElement, 'flipped');
    } else {
      this.renderer.addClass(clickcardElement, 'flipped');
    }
    this.tarjetaVolteada = !this.tarjetaVolteada;
  }

  // // Método para añadir un libro a los favoritos
  // addToFavorites(book: any): void {
  //   this.FavoriteService.addToFavorites(book);
  // }

  // // Método para eliminar un libro de los favoritos
  // removeFromFavorites(book: any): void {
  //   this.FavoriteService.removeFromFavorites(book);
  // }
}



