import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers:[MovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeId; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider
  
  ) {
  }

  ionViewDidEnter() {
    this.filme = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeId).subscribe(data=>{
      const retorno = (data as any);
      this.filme = retorno;
    }, error=>{
        console.log(error);
    })
  }

}
