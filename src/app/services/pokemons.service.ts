import { Injectable } from '@angular/core';
import { Result } from '../Interfaces/pokeapi';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  async getByPage(page:number, size: number = 40):Promise<Result[]>{
    // if(page > 6) return []; Limit pages
    const offset = size*(page-1);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resJson = await res.json();
    if(resJson.results.length > 0) return resJson.results
    return [];
  }

  async getById(id:string){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return await res.json();
  }

  getDescription(){
    
  }
}
