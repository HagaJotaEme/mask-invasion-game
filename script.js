function decisao(opcao) {
  if (opcao == 1) {
    cenario();
  } else if (opcao == 2) {
    cenario();
  }
} let cenario = 0;

let titulo = document.getElementById("titulo");
let texto = document.getElementById("texto");
let texto2 = document.getElementById("texto2");
let imagem = document.getElementById("imagem");
let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let video = document.getElementById("video");

inicio();

function inicio() {
  cenario = 0;

  titulo.innerHTML = "Seja bem-vindo(a)";

  texto.innerHTML = "A partir deste momento, você irá viver na pele de &quot;Yuri Honjo&quot;, a nossa protagonista.</br>Uma jovem colegial de 16 anos, que subitamente acorda em um novo mundo assustador.</br>Seu objetivo é sobreviver! Que os jogos comecem...";

  texto2.innerHTML = "A maioria das vezes você terá que ver um vídeo, para tomar sua próxima decisão, então, preste atenção em todos os detalhes.";

  botao1.innerHTML = `Iniciar`;

  /*None = Aparecer
    Block = Desaparecer*/
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube-nocookie.com/embed/bm9a3sjjuQ8?rel=0";

 
}

function resposta(opcao) {
  switch (cenario) {
    case 0: decisao0(opcao); break;
    case 1: decisao1(opcao); break;
    case 2: decisao2(opcao); break;
    case 3: decisao3(opcao); break;
    case 4: decisao4(opcao); break;
    case 5: decisao5(opcao); break;
    case 6: decisao6(opcao); break;
    case 6.1: decisao6a(opcao); break;
    case 7: decisao7(opcao); break;
    case 8: decisao8(opcao); break;
    case 9: decisao9(opcao); break;
    case 10: decisao10(opcao); break;
    case 11: decisao11(opcao); break;
    case 12: decisao12(opcao); break;
    case 13: decisao13(opcao); break;
    case 14: decisao14(opcao); break;
    case 15: decisao15(opcao); break;
    case 16: decisao16(opcao); break;
    case 17: decisao17(opcao); break;
    case 18: decisao18(opcao); break;
    case 19: decisao19(opcao); break;
    case 20: decisao20(opcao); break;
    case 21: decisao21(opcao); break;
    case 22: decisao22(opcao); break;
    case 23: decisao23(opcao); break;
    case 24: decisao24(opcao); break;
    case 25: decisao25(opcao); break;
    case 26: decisao26(opcao); break;
    case 27: decisao27(opcao); break;
    case 28: decisao28(opcao); break;
    case 29: decisao29(opcao); break;
    case 30: decisao30(opcao); break;
  }
}

function decisao0(opcao) {
  cenario1();
}

function cenario1() {
  cenario = 1;

  titulo.innerHTML = "Não entendo este mundo";
  texto.innerHTML = "";
  texto2.innerHTML = "Agora, pense rápido e escolha uma das decisões.";

  botao1.innerHTML = "Correr pela ponte";
  botao2.innerHTML = "Procurar uma saída nesse prédio";

  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube.com/embed/YdXPVindMVs?rel=0";

}

function decisao1(opcao) {
  if (opcao == 1) {
    cenario2();
  } else if (opcao == 2) {
    cenario3();
  }
}

// Agora temos as funções cenário e decisão para o cenário 2.
function cenario2() {
  cenario = 2;
  //Define os valores dos elementos titulo para o cenário 2.
  titulo.innerHTML = "Falta de sorte";
  texto.innerHTML = "Mesmo com insegurança, você atravessa a ponte, determinada a sobreviver. Porém, ao chegar ao outro lado o mascarado que te perseguia te alcança, mas ele é subitamente morto por um Sniper mascarado que também disfere tiros contra você. </br> ";
  texto2.innerHTML = "Você se esconde, e encontra uma mochila com alguns itens e uma arma. Mas novamente dá de cara com outro mascarado, desta vez uma mulher. Agora, pense rápido e escolha um dos caminhos";

  //Define o texto dos botões.
  botao1.innerHTML = "Atirar na mulher";
  botao2.innerHTML = "Tentar enganar";

  //Mostrando ou escondendo os botões
  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube.com/embed/H_3ZI4KCjd8?rel=0";
}

function decisao2(opcao) {
  if (opcao == 1) {
    cenario4();
  } else if (opcao == 2) {
    cenario5();
  }
}

// Agora temos as funções cenário e decisão para o cenário 3.
function cenario3() {
  cenario = 3;
  //Define os valores dos elementos titulo para o cenário 3.
  titulo.innerHTML = "Sem saída";
  texto.innerHTML = "Nesse mundo é impossível descer por escadas ou elevadores para chegar ao térreo. <p>O mascarado te encontra e te mata.</p>";

  //Define o texto dos botões.
  botao1.innerHTML = "Você morreu!";
  botao2.innerHTML = "";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/Vt15ZDQ/sem-saida.png";
  //Imagem do prédio
  // Imagem está no drive
}

function decisao3() {
  inicio()
}

// Agora temos as funções cenário e decisão para o cenário 4.
function cenario4() {
  cenario = 4;

  titulo.innerHTML = "faleceu!";
  texto.innerHTML = "<p>Devido ao grande poder da mascarada e a sua inexperiência com armas, você acaba errando o tiro e a mascarada te mata.</p>";

  botao1.innerHTML = "Você morreu!";

  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/y0rFwvS/Wasted-Maid.png";
  //Imagem da Maid
  // EP 1 - 14:55
}
function decisao4(opcao) {
  inicio();
}

// Agora temos as funções cenário e decisão para o cenário 5.
function cenario5() {
  cenario = 5;
  //Define os valores dos elementos titulo para o cenário 5.
  titulo.innerHTML = "Os mascarados também são humanos?!";
  //anotação
  texto.innerHTML = "Você tenta conversar com a mascarada e finge que vai cometer suicídio, pois aparentemente, este é o objetivo dos mascarados <strong>provocar um profundo terror nas pessoas.</strong></br>A mascarada vai conferir e você atira nela.";
  texto2.innerHTML = "O tiro foi certeiro! Porém ela ainda sobrevive. Com apenas metade da máscara em seu rosto, você percebe que os mascarados também são humanos.";

  //Define o texto dos botões.
  botao1.innerHTML = "Tentar ajudar";
  botao2.innerHTML = "Empurrar ela";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube.com/embed/6tv_6qzgF6c?rel=0";
  // Vídeo de toda a batalha com a Maid
  //  EP 1 - 16:38
}

function decisao5(opcao) {
  if (opcao == 1) {
    cenario6();
  } else if (opcao == 2) {
    cenario6a();
  }
}

// Agora temos as funções cenário e decisão para o cenário 6.
function cenario6() {
  cenario = 6;
  //Define os valores dos elementos titulo para o cenário 6.
  titulo.innerHTML = "Preparação";
  texto.innerHTML = "A mulher mascarada comete suicídio, por ordens do &quot;comando&quot; . Você acha uma mochila com alguns suprimentos  e começa a preparar seu armamento e acontece mais coisas, como ilustrado no vídeo a seguir:";

  //Define o texto dos botões.
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/iMlqEPdiJK0?rel=0";
  //Maid se matando + o vídeo da Yuri se preparando(Youtube)
  // EP 1 - 19:50
}
function decisao6(opcao) {
  if (opcao == 1) {
    cenario7();
  } else if (opcao == 2) {
    cenario7();
  }
}

/* Cenário 6A*/
function cenario6a() {
  cenario = 6.1;
  //Define os valores dos elementos titulo para o cenário 6.
  titulo.innerHTML = "Uma possivel salvação";
  texto.innerHTML = "Você finaliza a mulher mascarada, sem dar a ela uma chance de se redimir. A sua jornada continua e você segue em frente, quando ao atravessar uma ponte percebe a existência de um helicóptero em cima de um dos prédios. Será essa a sua salvação?";

  //Define o texto dos botões.
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/Ig5f_XUrnFI?rel=0";
  //Vídeo da Yuri vendo o helicóptero
  // EP 1 - 20:30
}

function decisao6a(opcao) {
  if (opcao == 1) {
    cenario7();
  } else if (opcao == 2) {
    cenario7();
  }
}

//Agora temos as funções dos elementos titulo para o cenário 7.
function cenario7() {
  cenario = 7;
  titulo.innerHTML = "Uma esperança de sair desse mundo";
  texto.innerHTML = "Ao entrar no prédio, você se depara com uma mulher morta e vasculha o seu corpo. Encontra uma carta que diz: &quotSERVIÇO REGULAR DO HELICÓPTERO – Regularmente, operamos um serviço de evacuação via helicóptero. </br> </br> Se você deseja sair deste reino, ou voltar ao solo, por favor, dirija-se ao heliporto. Mas, esteja ciente que a capacidade máxima é de uma pessoa.&quot";
  texto2.innerHTML = "De repente você ouve barulhos de tiros e um pedido de socorro. Ao se esgueirar você encontra uma garota. Subitamente, o Sniper mascarado aparece atrás dela e começa a atirar em vocês:";

  //Define o texto dos botões.
  botao1.innerHTML = "Confiar no plano dela";
  botao2.innerHTML = "Não confiar";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube.com/embed/EF32NqP8lLs?rel=0";
  //Vídeo encontrando a Nice (Youtube)
  // Já editado
}
function decisao7(opcao) {
  if (opcao == 1) {
    cenario8();
  } else if (opcao == 2) {
    cenario9();
  }
}

function cenario8() {
  cenario = 8;
  titulo.innerHTML = "A salvação vem dos céus";
  texto.innerHTML = "Vocês correm em direção ao helicóptero mesmo sabendo que só uma de vocês poderá entrar."

  texto2.innerHTML = "Mayuko tinha uma carta na manga e joga uma granada no Sniper mascarado."

  //Define o texto dos botões.
  botao1.innerHTML = "Atirar no helicóptero";
  botao2.innerHTML = "Deixar o helicóptero ir";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube.com/embed/oaVodr7Wi7I?rel=0";

}

function decisao8(opcao) {
  if (opcao == 1) {
    cenario11();
  } else if (opcao == 2) {
    cenario10();
  }
}

function cenario9() {
  cenario = 9;
  titulo.innerHTML = "Confiança é a chave";
  texto.innerHTML = "Ao optar por não confiar na Mayuko, o Sniper mascarado mata vocês duas.";
  //Define o texto dos botões.   
  botao1.innerHTML = "Você morreu!";
  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/PtPKtQh/WASTED-Yuri-e-Nice.png";
}

function decisao9(opcao) {
  if (opcao == 1) {
    inicio();
  }
}

function cenario10() {
  cenario = 10;
  titulo.innerHTML = "Entre a vida e a morte!";
  texto.innerHTML = " Você desmaia e  escuta um grito, assustada você decide agir.";

  //Define o texto dos botões.   
  botao1.innerHTML = "Fugir dos mascarados";
  botao2.innerHTML = "Atirar contra os mascarados";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/58CEgULXHqI?rel=0";
}

function decisao10(opcao) {
  if (opcao == 1) {
    cenario13();
  } else if (opcao == 2) {
    cenario12();
  }
}

function cenario11() {
  cenario = 11;
  titulo.innerHTML = "Fim das esperanças";
  texto.innerHTML = "O helicóptero dá meia volta e atira em vocês.";

  //Define o texto dos botões.   
  botao1.innerHTML = "Você morreu!";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/Z6mfATUvYPw?rel=0";
}

function decisao11(opcao) {
  if (opcao == 1) {
    inicio();
  }
}

function cenario12() {
  cenario = 12;
  titulo.innerHTML = "O final de uma jornada";
  texto.innerHTML = "Infelizmente, você deu azar e a sua arma falhou.";

  //Define o texto dos botões.
  botao1.innerHTML = "Você morreu!";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/z9Gzd9nb1oE?rel=0";

}

function decisao12(opcao) {
  if (opcao == 1) {
    inicio();
  }
}

function cenario13() {
  cenario = 13;
  titulo.innerHTML = "Uma arma poderosa";
  texto.innerHTML = "A Nise te ajuda a acabar com os mascarados e agora você tem uma máscara em mãos.";

  //Define o texto dos botões.
  botao1.innerHTML = "Quebrar a máscara";
  botao2.innerHTML = "Olhar atrás da máscara";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/-w0BWXeTrTE?rel=0";
}

function decisao13(opcao) {
  if (opcao == 1) {
    cenario14();
  } else if (opcao == 2) {
    cenario15();
  }
}

function cenario14() {
  cenario = 14;
  titulo.innerHTML = "Uma esperança";
  texto.innerHTML = "Depois de quebrar as máscaras, você nota que a Mayuko tem um celular e pede emprestado para ligar para o seu irmão.";

  //Define o texto dos botões.
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/k1wFwR7/Liga-o-Rika-Yuri.png";

}

function decisao14(opcao) {
  if (opcao == 1) {
    cenario16();
  }
}

function cenario15() {
  cenario = 15;
  titulo.innerHTML = "Você se tornou um fantoche";
  texto.innerHTML = "Você ignorou os conselhos e agora é controlada pelo comando das máscaras";

  //Define o texto dos botões.
  botao1.innerHTML = "Você morreu!";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/n695ZFW/M-scara-Verde.jpg";
}

function decisao15(opcao) {
  if (opcao == 1) {
    inicio();
  }
}

function cenario16() {
  cenario = 16;
  titulo.innerHTML = "Uma ameaça silenciosa";
  texto.innerHTML = "Você estava descansando quando percebeu a aproximação de um mascarado.";
  texto2.innerHTML = "Ele estava vindo na sua direção e carregando uma mochila.";

  //Define o texto dos botões.
  botao1.innerHTML = "Não matar";
  botao2.innerHTML = "Matar ele";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/k0y7CJN/Menino-mascarado.png";
}

function decisao16(opcao) {
  if (opcao == 1) {
    cenario17();
  } else if (opcao == 2) {
    cenario17();
  }
}

function cenario17() {
  cenario = 17;
  titulo.innerHTML = "A calmaria antes da tempestade";
  texto.innerHTML = "Você estava dormindo e ao acordar percebeu que a Nise havia sumido. Você escuta um barulho estranho.";
  texto2.innerHTML = "O que você deseja fazer?";

  //Define o texto dos botões.
  botao1.innerHTML = "Checar se a Nise precisar de ajuda.";
  botao2.innerHTML = "Ignorar o barulho.";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/r6nLNCq/Yuri-dormindo.png";
}

function decisao17(opcao) {
  if (opcao == 1) {
    cenario19();
  } else if (opcao == 2) {
    cenario18();
  }
}

function cenario18() {
  cenario = 18;
  titulo.innerHTML = "A morte é inevitável";
  texto.innerHTML = "Você não foi procurar pela sua aliada e por causa disso ela foi pega por um mascarado.";

  //Define o texto dos botões.
  botao1.innerHTML = "Você perdeu!";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/NwcVQmNPe4I?rel=0";
}

function decisao18(opcao) {
  if (opcao == 1) {
    inicio();
  }
}

function cenario19() {
  cenario = 19;
  titulo.innerHTML = "Sangue e lealdade";
  texto.innerHTML = "Você resolve verificar e percebe que a Nise está com problemas. Sem pensar você toma uma atitude drástica para salvá-la.";

  //Define o texto dos botões.
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "none";

  video.src = "https://www.youtube.com/embed/Tg98WIkdCk8?rel=0";
}

function decisao19(opcao) {
  if (opcao == 1) {
    cenario20();
  }
}

function cenario20() {
  cenario = 20;
  titulo.innerHTML = "na dúvida não confie em ninguém";
  texto.innerHTML = "Você vê um cartaz indicando uma localização para encontrar aliados e vocês decidem verificar";

  //Define o texto dos botões.   
  botao1.innerHTML = "Prosseguir";
  //Mostrando ou escondendo os botõ
  botao1.style.dispslay = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/RbGjJdw/cartaz.png";

}
function decisao20(opcao) {
  if (opcao == 1) {
    cenario21();
  }
}

function cenario21() {
  cenario = 21;
  titulo.innerHTML = "a guerra nunca muda";
  texto.innerHTML = "Na realidade o encontro era uma armadilha e algo inesperado acontece...";
  texto2.innerHTML = "O mascarado é muito forte. Será que vocês conseguirão sobreviver?";

  //Define o texto dos botões.   
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "block";

  video.src = "https://www.youtube.com/embed/0txGTk3PD9E?rel=0";
}

function decisao21(opcao) {
  if (opcao == 1) {
    cenario22();
  }
}

function cenario22() {
  cenario = 22;
  titulo.innerHTML = "Grandes responsabilidades";
  texto.innerHTML = "Nise tinha uma carta na manga...";
  texto2.innerHTML = "Ao colocar uma máscara grandes poderes são adquiridos, mas tudo vem com uma consequência.";

  //Define o texto dos botões.   
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "none";
  video.style.display = "block";
  texto.style.display = "block";
  texto2.style.display = "block";
  video.src = "https://www.youtube.com/embed/g4akS1fcMHk?rel=0";
}

function decisao22(opcao) {
  if (opcao == 1) {
    cenario23();
  }
}

function cenario23() {
  cenario = 23;
  titulo.innerHTML = "Consequências Inesperadas";
  texto.innerHTML = "Nise está passando mal devido a sua máscara com defeito.";
  texto2.innerHTML = "Uma mascarada raivosa aparece e você tem que tomar uma decisão:";

  //Define o texto dos botões.   
  botao1.innerHTML = "Atacar";
  botao2.innerHTML = "Ouvir o que ela tem a dizer";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/sjJrqwt/chegada-mascarada-triste.png";
}

function decisao23(opcao) {
  if (opcao == 1) {
    cenario24();
  } else if (opcao == 2) {
    cenario25();
  }
}

function cenario24() {
  cenario = 24;
  titulo.innerHTML = "Excesso de confiança";
  texto.innerHTML = "A mascarada raivosa é muito forte e te mata.";

  //Define o texto dos botões.   
  botao1.innerHTML = "Você morreu!";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/qWnPFKX/yuri-morrendo-para-mascarada-triste.png";
}

function decisao24(opcao) {
  if (opcao == 1) {
    inicio();
  }
}

function cenario25() {
  cenario = 25;
  titulo.innerHTML = "Uma luz no fim do túnel";
  texto.innerHTML = "A mascarada te informa uma maneira de salvar a Nise";
  texto2.innerHTML = "Segundo ela, a solução é simples: Encontrar uma <strong>máscara sem boca e olhar o código</strong>. E isso parece ser a chave para salvar a Nise da sua hibernação";

  //Define o texto dos botões.   
  botao1.innerHTML = "Ignorar seus conselhos";
  botao2.innerHTML = "Confiar nas palavras da mascarada";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "block";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "none";

  imagem.src = "https://i.ibb.co/8NdLh2J/cen-rio-25.png";
}

function decisao25(opcao) {
  if (opcao == 1) {
    cenario27();
  } else if (opcao == 2) {
    cenario26();
  }
}

function cenario26() {
  cenario = 26;
  titulo.innerHTML = "Cada vez mais próxima de Deus";
  texto.innerHTML = "Para se tornar uma pessoa próxima de Deus você vai em busca da máscara sem boca.";
  texto2.innerHTML = "Sniper mascarado e Kuon (a pessoa mais próxima de Deus) se tornam seus aliados ao salvar a Nise";

  //Define o texto dos botões.   
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/82CcqLY/cenario26.png";
}

function decisao26(opcao) {
  if (opcao == 1) {
    cenario29();
  }
}

function cenario27() {
  cenario = 27;
  titulo.innerHTML = "Nosso inimigo quer o caos";
  texto.innerHTML = "Você sai do quarto por um momento e deixa a Nise descansando.";
  texto2.innerHTML = "Quando você volta a Nise está apanhando de um mascarado superforte.";

  //Define o texto dos botões.   
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/h8jT053/cenario27.png";
}

function decisao27(opcao) {
  if (opcao == 1) {
    cenario28();
  }
}

function cenario28() {
  cenario = 28;
  titulo.innerHTML = "eu mato os mascarados";
  texto.innerHTML = "Você consegue chegar a tempo e a Nise é quase morta por aquele que se denomina o &quotGrande Anjo&quot";
  texto2.innerHTML = "Após uma luta intensa, você é capaz de derrotá-lo";

  //Define o texto dos botões.   
  botao1.innerHTML = "Prosseguir";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/6wccbNb/cen-rio-28.png";
}

function decisao28(opcao) {
  if (opcao == 1) {
    cenario29();
  }
}

function cenario29() {
  cenario = 29;
  titulo.innerHTML = "Fim de temporada";
  texto.innerHTML = "Você sobreviveu até ao fim da primeira temporada.";
  texto2.innerHTML = "Muito obrigado por jogar <3";

  //Define o texto dos botões.   
  botao1.innerHTML = "Início";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/84JYLj7/The-end.png";
}
function decisao29(opcao) {
  if (opcao == 1) {
    inicio();
  }
}


function creditos(){
  cenario = 30;
  titulo.innerHTML = "Créditos";
  texto.innerHTML = "Tenkuu Shinpan ou Sem Saída é um anime que leva o selo Original Netflix em parceria com estúdio Zero-G. A animação é uma adaptação do mangá de mesmo nome, do autor Tsuina Miura e ilustrado por Takahiro Oba, o projeto conta com Masahiro Takada como diretor. ";
  texto2.innerHTML = '<a href="https://high-rise-invasion.com/" target="_blank">Site oficial High rise invasion</a>';

  //Define o texto dos botões.   
  botao1.innerHTML = "Início";

  //Mostrando ou escondendo os botões   
  botao1.style.display = "block";
  botao2.style.display = "none";
  imagem.style.display = "block";
  video.style.display = "none";
  texto.style.display = "block";
  texto2.style.display = "block";

  imagem.src = "https://i.ibb.co/Y2bfWqp/Design-sem-nome.png"
}

function decisao30(opcao) {
  if (opcao == 1) {
    inicio();
  }
}