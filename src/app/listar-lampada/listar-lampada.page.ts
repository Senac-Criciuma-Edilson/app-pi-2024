import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-listar-lampada',
  templateUrl: './listar-lampada.page.html',
  styleUrls: ['./listar-lampada.page.scss'],
})
export class ListarLampadaPage implements OnInit {
  public lampadas:Array<any> = [];
  public isShowDeleteDialog:boolean = false;
  public alertButtons:Array<any> = [];
  constructor(
    public requisicao_service:RequisicaoService,
    public router:Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.listar();
  }

  async listar(){

    const loading = await this.loadingCtrl.create({
      message: 'Carregando ...'
    });
    loading.present();

    this.requisicao_service.get({
      controller:'lampada-listar'
    })
    .subscribe((_res:any) => {

      loading.dismiss();
      this.lampadas = _res;

    });
  }

  editar(id:number){
    this.router.navigateByUrl('/lampada/' + id);
  }

  excluir(id:number){
    this.isShowDeleteDialog = true;
    this.alertButtons = [{
      text: 'Não',
      role: 'cancel',
      handler: () => {
        this.isShowDeleteDialog = false;
      },
    },
    {
      text: 'Sim',
      role: 'confirm',
      handler: () => {
        this.requisicao_service.get({
          controller:'lampada-excluir',
          id:id
        })
        .subscribe(
          () => {
            this.listar();
          }
        );
      },
    }];    
  }

}
