import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
			timeout: 3000,
			headers: {
				"X-Initialized-At": Date.now().toString()
			}
		});
   }

  public async getRandomPokemons(): Promise<any> {
    let pokemonList : Array<any> = [];
    for (let i = 0; i < 10; i++) {
      let id : Number = Math.floor(Math.random() * 905 + 1);
      await this.axiosClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        pokemonList.push(response.data);
      });
    }
    return pokemonList;
  }
}
