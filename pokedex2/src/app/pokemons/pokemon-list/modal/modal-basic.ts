import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PokemonService } from '../../pokemon/pokemon.service';
import { PokemonDetail } from '../../pokemon/pokemon';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalBasic {
  closeResult: string;
  @Input() id: number;
  @Input()  pokemondetail: PokemonDetail;

  constructor(
    private modalService: NgbModal,
    private pokemonService: PokemonService) {}

  open(content, id) {
    console.log(id);
    this.pokemonService.getPokemon(id).subscribe(poke => {
      this.pokemondetail = poke;
      // tslint:disable-next-line:max-line-length
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' } ).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
