import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  jogadoresTop: any;
  jogadoresBottom: any;
  maiorJogada: any;
  menorJogada: any;
  cartas: any;
  aberto: boolean;

  constructor() {
    this.jogadoresTop = [];
    this.jogadoresTop = [];
    this.aberto = true;

    this.cartas = [
      {valor: 0.5, virada: false},
      {valor: 1, virada: false},
      {valor: 2, virada: false},
      {valor: 3, virada: false},
      {valor: 5, virada: false},
      {valor: 8, virada: false},
      {valor: 13, virada: false}
    ];
   }

  ngOnInit(): void {

    this.jogadoresTop = [
      {nome: 'Léo', jogou: false, carta: {}},
      {nome: 'Deivid', jogou: false, carta: {}},
      {nome: 'Fabio' , jogou: false, carta: {}},
      {nome: 'Aurelio', jogou: false, carta: {}},
    ];
    
    this.jogadoresBottom = [
      {nome: 'Moretti', jogou: false, carta: {}},
      {nome: 'Frank', jogou: false, carta: {}},
      {nome: 'Maristela', jogou: false, carta: {}},
      {nome: 'Kaio', jogou: false, carta: {}}
    ]

    this.maiorJogada = {nome: 'Ninguem', jogou: false, carta: {valor: 0, virada: false}};
    this.menorJogada = {nome: 'Ninguem', jogou: false, carta: {valor: 100000, virada: false}};
  }

  virar(carta: any){

    const isVirada = !carta.movida;

    for(let c of this.cartas){
      c.virada = false;
      c.movida = false;
    }

    carta.movida = isVirada;
    this.jogadoresTop[0].carta = carta;
    this.jogadoresTop[0].jogou = isVirada;
  }

  simularRodada(){
    for(let jogador of this.jogadoresTop.slice(0)){
      let random = Math.floor(Math.random() * 6);
      jogador.carta = Object.assign({}, this.cartas[random]);
      jogador.jogou = true;
    }

    for(let jogador of this.jogadoresBottom.slice(0)){
      let random = Math.floor(Math.random() * 6);
      jogador.carta = Object.assign({}, this.cartas[random]);
      jogador.jogou = true;
    }
  }

  virarTudo(){
    for(let jogador of this.jogadoresBottom){
      jogador.carta.virada = true;
      if(jogador.carta.valor > this.maiorJogada.carta.valor){
        this.maiorJogada = jogador;
      }

      if(jogador.carta.valor < this.menorJogada.carta.valor){
        this.menorJogada = jogador;
      }
    }

    for(let jogador of this.jogadoresTop){
      jogador.carta.virada = true;

      if(jogador.carta.valor > this.maiorJogada.carta.valor){
        this.maiorJogada = jogador;
      }

      if(jogador.carta.valor < this.menorJogada.carta.valor){
        this.menorJogada = jogador;
      }
    }

    this.maiorJogada.jogou = false;
    this.menorJogada.jogou = false;
    this.aberto = false;
  }

  resetar(){
    for(let jogador of this.jogadoresBottom){
      jogador.carta = {};
      jogador.jogou = false;
    }

    for(let jogador of this.jogadoresTop){
      jogador.carta = {};
      jogador.jogou = false;
    }

    this.maiorJogada = {nome: 'Ninguem', jogou: false, carta: {valor: 0, virada: false}};
    this.menorJogada = {nome: 'Ninguem', jogou: false, carta: {valor: 100000, virada: false}};
    this.aberto = true;
  }

}
