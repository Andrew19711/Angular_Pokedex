import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from '../interface/respuestaapi';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServePokService {

  private url: string = " https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  async getPage(page:number, size: number = 40):Promise<Resultado[]>{
    if(page > 5) return [];
    const offset = size*(page-1);
    const res= fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`)
    const resultadoJSON= await (await res).json();
    if(resultadoJSON.results.length > 0) return resultadoJSON.results
    return [];
  }

  async getById(id:string):Promise<Pokemon>{
    const res= fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return (await res).json();
  }
  async getDescripcion(id: string | number):Promise<string>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const resJson = await res.json();
    const texto = resJson.flavor_text_entries.find((texto:any) =>  texto.language.name === "es")
    return texto.flavor_text;
  }
}
