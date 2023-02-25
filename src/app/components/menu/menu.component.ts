import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loading: boolean = true;
  pokemonList: Array<any> = [];
  pokemonTeams: Array<any> = [];
  @Output() myData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRandomPokemons().then((data) => {
      this.pokemonList = data;
      console.log(data)
      this.loading = false;
    });
  }

  public editList(pokemon: any) {
    if (this.pokemonTeams.includes(pokemon)) {
      this.pokemonTeams = this.pokemonTeams.filter((p) => p.id !== pokemon.id);
      console.log(this.pokemonTeams);
      pokemon.checked = false;
    } else if (this.pokemonTeams.length < 6) {
      this.pokemonTeams.push(pokemon);
      console.log(this.pokemonTeams);
      pokemon.checked = true;
    }
    return pokemon;
  }

  public sendTeam() {
    this.myData.emit(this.pokemonTeams);
  }
}
