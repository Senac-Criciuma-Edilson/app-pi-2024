import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.page.html',
  styleUrls: ['./lampada.page.scss'],
})
export class LampadaPage implements OnInit {
  public id:number = 0;
  public descricao:string = '';
  constructor(
    public rs:RequisicaoService,
    private activated_router:ActivatedRoute,
    private router:Router
  ) {
      this.activated_router.params
      .subscribe(
        (params:any) => {
          if (params.id != undefined){
            this.id = params.id;
            if (this.id != 0){
              this.rs.get({
                controller:'lampada-get',
                id:this.id
              })
              .subscribe(
                (_dados:any) => {
                  this.descricao = _dados.descricao
                }
              );
            }
          }
        }
      );    
  }

  ngOnInit() {
  }

  salvar(){
    const fd = new FormData();
    fd.append('controller','lampada');
    fd.append('op','salvar');
    fd.append('id',String(this.id));
    fd.append('descricao',this.descricao);

    this.rs.post(fd)
    .subscribe(
      () => {
        location.href = '/listar-lampada';
      }
    );
  }

}
