import { Component } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public rs:RequisicaoService
  ) {}

  testarRequisicao(){
    let fd = new FormData();
    this.rs.post(fd)
    .subscribe();
  }
}
