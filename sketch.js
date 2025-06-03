let musicas = [
  // Sertanejo (4)
  { nome: "Evidências - Chitãozinho & Xororó", idade: 0, generos: ["sertanejo"], personalidade: ["romantico", "tradicional"], popularidade: 9 },
  { nome: "Fio de Cabelo - Milionário & José Rico", idade: 0, generos: ["sertanejo"], personalidade: ["nostalgico", "sensivel"], popularidade: 8 },
  { nome: "Escreve Aí - Zé Neto & Cristiano", idade: 12, generos: ["sertanejo"], personalidade: ["romantico", "animado"], popularidade: 7 },
  { nome: "Cheirosa - Jorge & Mateus", idade: 12, generos: ["sertanejo"], personalidade: ["animado", "positivo"], popularidade: 8 },
  
  // Rock (6)
  { nome: "Bohemian Rhapsody - Queen", idade: 10, generos: ["rock"], personalidade: ["dramatico", "complexo"], popularidade: 10 },
  { nome: "Sweet Child O'Mine - Guns N' Roses", idade: 12, generos: ["rock"], personalidade: ["energico", "apaixonado"], popularidade: 9 },
  { nome: "Smells Like Teen Spirit - Nirvana", idade: 15, generos: ["rock"], personalidade: ["rebelde", "intenso"], popularidade: 9 },
  { nome: "Hotel California - Eagles", idade: 12, generos: ["rock"], personalidade: ["misterioso", "reflexivo"], popularidade: 9 },
  { nome: "Imagine - John Lennon", idade: 0, generos: ["rock"], personalidade: ["pacifista", "social"], popularidade: 10 },
  { nome: "Another Brick in the Wall - Pink Floyd", idade: 15, generos: ["rock"], personalidade: ["rebelde", "social"], popularidade: 9 },
  
  // Pop (5)
  { nome: "Rolling in the Deep - Adele", idade: 0, generos: ["pop"], personalidade: ["intenso", "dramatico"], popularidade: 9 },
  { nome: "Shape of You - Ed Sheeran", idade: 0, generos: ["pop"], personalidade: ["romantico", "animado"], popularidade: 8 },
  { nome: "Bad Guy - Billie Eilish", idade: 12, generos: ["pop"], personalidade: ["rebelde", "introspectivo"], popularidade: 8 },
  { nome: "Levitating - Dua Lipa", idade: 0, generos: ["pop"], personalidade: ["animado", "positivo"], popularidade: 7 },
  { nome: "Blinding Lights - The Weeknd", idade: 0, generos: ["pop"], personalidade: ["energico", "nostalgico"], popularidade: 9 },
  
  // MPB (4)
  { nome: "Chega de Saudade - João Gilberto", idade: 0, generos: ["mpb"], personalidade: ["calmo", "nostalgico"], popularidade: 9 },
  { nome: "Construção - Chico Buarque", idade: 15, generos: ["mpb"], personalidade: ["reflexivo", "social"], popularidade: 9 },
  { nome: "Oceano - Djavan", idade: 0, generos: ["mpb"], personalidade: ["romantico", "sensivel"], popularidade: 8 },
  { nome: "Trem das Onze - Adoniran Barbosa", idade: 0, generos: ["mpb"], personalidade: ["nostalgico", "tradicional"], popularidade: 8 },
  
  // Eletrônica (4)
  { nome: "Strobe - Deadmau5", idade: 0, generos: ["eletronica"], personalidade: ["calmo", "introspectivo"], popularidade: 8 },
  { nome: "Animals - Martin Garrix", idade: 12, generos: ["eletronica"], personalidade: ["animado", "energico"], popularidade: 7 },
  { nome: "One More Time - Daft Punk", idade: 0, generos: ["eletronica"], personalidade: ["animado", "positivo"], popularidade: 9 },
  { nome: "Titanium - David Guetta", idade: 12, generos: ["eletronica"], personalidade: ["determinado", "energico"], popularidade: 8 },
  
  // Hip Hop/Rap (4)
  { nome: "Lose Yourself - Eminem", idade: 15, generos: ["hiphop"], personalidade: ["determinado", "intenso"], popularidade: 9 },
  { nome: "Alright - Kendrick Lamar", idade: 15, generos: ["hiphop"], personalidade: ["social", "reflexivo"], popularidade: 8 },
  { nome: "God's Plan - Drake", idade: 12, generos: ["hiphop"], personalidade: ["positivo", "confiante"], popularidade: 8 },
  { nome: "SICKO MODE - Travis Scott", idade: 15, generos: ["hiphop"], personalidade: ["intenso", "energico"], popularidade: 7 },
  
  // Jazz (3)
  { nome: "Take Five - Dave Brubeck", idade: 0, generos: ["jazz"], personalidade: ["sofisticado", "calmo"], popularidade: 9 },
  { nome: "So What - Miles Davis", idade: 0, generos: ["jazz"], personalidade: ["complexo", "introspectivo"], popularidade: 8 },
  { nome: "Fly Me to the Moon - Frank Sinatra", idade: 0, generos: ["jazz"], personalidade: ["romantico", "elegante"], popularidade: 9 },
  
  // Clássica (3)
  { nome: "Für Elise - Beethoven", idade: 0, generos: ["classica"], personalidade: ["tradicional", "calmo"], popularidade: 9 },
  { nome: "The Four Seasons - Vivaldi", idade: 0, generos: ["classica"], personalidade: ["dramatico", "complexo"], popularidade: 9 },
  { nome: "Clair de Lune - Debussy", idade: 0, generos: ["classica"], personalidade: ["sensivel", "introspectivo"], popularidade: 8 },
  
  // Reggae (3)
  { nome: "No Woman, No Cry - Bob Marley", idade: 0, generos: ["reggae"], personalidade: ["calmo", "social"], popularidade: 9 },
  { nome: "Could You Be Loved - Bob Marley", idade: 0, generos: ["reggae"], personalidade: ["animado", "positivo"], popularidade: 8 },
  { nome: "Redemption Song - Bob Marley", idade: 0, generos: ["reggae"], personalidade: ["social", "reflexivo"], popularidade: 9 },
  
  // Blues (3)
  { nome: "The Thrill Is Gone - B.B. King", idade: 0, generos: ["blues"], personalidade: ["nostalgico", "sensivel"], popularidade: 8 },
  { nome: "Sweet Home Chicago - Robert Johnson", idade: 0, generos: ["blues"], personalidade: ["tradicional", "energico"], popularidade: 8 },
  { nome: "Cross Road Blues - Robert Johnson", idade: 0, generos: ["blues"], personalidade: ["misterioso", "introspectivo"], popularidade: 7 },
  
  // Country (3)
  { nome: "Take Me Home, Country Roads - John Denver", idade: 0, generos: ["country"], personalidade: ["nostalgico", "romantico"], popularidade: 9 },
  { nome: "Ring of Fire - Johnny Cash", idade: 0, generos: ["country"], personalidade: ["intenso", "apaixonado"], popularidade: 8 },
  { nome: "Jolene - Dolly Parton", idade: 0, generos: ["country"], personalidade: ["dramatico", "sensivel"], popularidade: 8 },
  
  // Metal (3)
  { nome: "Enter Sandman - Metallica", idade: 15, generos: ["metal"], personalidade: ["intenso", "energico"], popularidade: 9 },
  { nome: "Fear of the Dark - Iron Maiden", idade: 15, generos: ["metal"], personalidade: ["dramatico", "complexo"], popularidade: 8 },
  { nome: "Crazy Train - Ozzy Osbourne", idade: 15, generos: ["metal"], personalidade: ["energico", "rebelde"], popularidade: 8 },
  
  // Indie/Alternativo (3)
  { nome: "Do I Wanna Know? - Arctic Monkeys", idade: 15, generos: ["indie"], personalidade: ["introspectivo", "sensivel"], popularidade: 8 },
  { nome: "Take Me to Church - Hozier", idade: 15, generos: ["indie"], personalidade: ["dramatico", "social"], popularidade: 8 },
  { nome: "Pumped Up Kicks - Foster the People", idade: 15, generos: ["indie"], personalidade: ["irônico", "reflexivo"], popularidade: 7 }
];

let idadeUsuario;
let preferencias = {
  sertanejo: false,
  rock: false,
  pop: false,
  mpb: false,
  eletronica: false,
  hiphop: false,
  jazz: false,
  classica: false,
  reggae: false,
  blues: false,
  country: false,
  metal: false,
  indie: false
};
let tracosPersonalidade = [];
let musicasRecomendadas = [];

function setup() {
  createCanvas(900, 700);
  background(20);
  noLoop();
  
  // Título principal
  fill(255);
  textSize(28);
  textStyle(BOLD);
  text("🎵 RECOMENDADOR MUSICAL AVANÇADO", width/2, 50);
  
  // Coletar dados do usuário
  coletarDadosUsuario();
}

function coletarDadosUsuario() {
  // Coletar idade
  let idadeInput = prompt("Qual sua idade? (Isso nos ajuda a filtrar conteúdo apropriado)");
  idadeUsuario = parseInt(idadeInput) || 0;
  
  // Perguntas de personalidade
  let respostas = [
    prompt("Você prefere músicas (1) animadas ou (2) calmas? Digite 1 ou 2:"),
    prompt("Você gosta mais de (1) letras românticas ou (2) letras sociais? Digite 1 ou 2:"),
    prompt("Você se identifica mais com (1) tradição ou (2) inovação? Digite 1 ou 2:")
  ];
  
  // Converter respostas em traços
  tracosPersonalidade = [];
  if (respostas[0] === "1") tracosPersonalidade.push("animado", "energico");
  if (respostas[0] === "2") tracosPersonalidade.push("calmo", "introspectivo");
  if (respostas[1] === "1") tracosPersonalidade.push("romantico", "sensivel");
  if (respostas[1] === "2") tracosPersonalidade.push("social", "reflexivo");
  if (respostas[2] === "1") tracosPersonalidade.push("tradicional", "nostalgico");
  if (respostas[2] === "2") tracosPersonalidade.push("inovador", "complexo");
  
  // Coletar preferências musicais
  for (let genero in preferencias) {
    let resposta = confirm(`Você gosta de música ${genero.toUpperCase()}?`);
    preferencias[genero] = resposta;
  }

  // Filtrar músicas
  filtrarMusicas();
  redraw();
}

function filtrarMusicas() {
  musicasRecomendadas = musicas.filter(musica => {
    // Verificar idade
    if (idadeUsuario < musica.idade) return false;
    
    // Verificar gêneros preferidos
    const generoPreferido = musica.generos.some(g => preferencias[g]);
    if (!generoPreferido) return false;
    
    // Verificar personalidade (se houver traços definidos)
    if (tracosPersonalidade.length > 0 && musica.personalidade) {
      const personalidadeCompativel = musica.personalidade.some(p => tracosPersonalidade.includes(p));
      return personalidadeCompativel;
    }
    
    return true;
  });

  // Ordenar por popularidade (as mais populares primeiro)
  musicasRecomendadas.sort((a, b) => b.popularidade - a.popularidade);
}

function draw() {
  background(20);
  drawGradientBackground();
  
  // Cabeçalho
  fill(255);
  textSize(28);
  textStyle(BOLD);
  textAlign(CENTER);
  text("🎵 RECOMENDADOR MUSICAL AVANÇADO", width/2, 50);
  
  // Informações do usuário
  textSize(16);
  textStyle(NORMAL);
  fill(200);
  text(`Idade: ${idadeUsuario} anos | Preferências: ${Object.keys(preferencias).filter(g => preferencias[g]).join(', ')}`, width/2, 80);
  text(`Traços de personalidade: ${tracosPersonalidade.join(', ')}`, width/2, 100);
  
  // Resultados
  fill(255);
  textSize(22);
  textStyle(BOLD);
  text(`🔊 Recomendações para Você (${musicasRecomendadas.length} encontradas)`, width/2, 140);
  
  if (musicasRecomendadas.length === 0) {
    fill(255, 100, 100);
    text("Nenhuma música encontrada para seus critérios", width/2, height/2);
    textSize(16);
    text("Tente selecionar mais estilos ou ajustar suas preferências", width/2, height/2 + 30);
    return;
  }
  
  // Exibir músicas em colunas
  let x = 50;
  let y = 180;
  let colWidth = 400;
  let gap = 20;
  
  for (let i = 0; i < musicasRecomendadas.length; i++) {
    let musica = musicasRecomendadas[i];
    
    // Alternar entre colunas
    if (i % 10 === 0 && i !== 0) {
      x += colWidth + gap;
      y = 180;
    }
    
    // Card da música
    noStroke();
    fill(40, 70);
    rect(x-10, y-15, colWidth, 50, 5);
    
    // Ícone do gênero
    let emoji = getEmojiForGenre(musica.generos[0]);
    fill(255);
    textSize(16);
    text(emoji, x, y);
    
    // Nome da música
    fill(255);
    textSize(14);
    textStyle(BOLD);
    text(musica.nome, x+30, y);
    
    // Detalhes
    textSize(12);
    textStyle(NORMAL);
    fill(180);
    text(`Gênero: ${musica.generos.join(', ')} | Personalidade: ${musica.personalidade.join(', ')}`, x+30, y+15);
    
    // Popularidade (estrelas)
    drawStars(x+30, y+30, musica.popularidade);
    
    y += 60;
    
    // Verificar se ultrapassou a altura do canvas
    if (y > height - 50 && x < width - colWidth - gap) {
      x += colWidth + gap;
      y = 180;
    }
  }
  
  // Rodapé
  fill(100);
  textSize(12);
  text("Recomendador Musical © 2023 | Desenvolvido com p5.js", width/2, height - 20);
}

function drawGradientBackground() {
  // Gradiente sutil
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(30, 20, 40), color(20, 30, 50), inter);
    stroke(c);
    line(0, y, width, y);
  }
  
  // Padrão de notas musicais
  noStroke();
  fill(255, 10);
  for (let i = 0; i < 50; i++) {
    textSize(random(10, 30));
    text(random(["♩", "♪", "♫", "♬"]), random(width), random(height));
  }
}

function getEmojiForGenre(genero) {
  const emojis = {
    sertanejo: "🤠",
    rock: "🎸",
    pop: "🎤",
    mpb: "🌴",
    eletronica: "🎧",
    hiphop: "🎤",
    jazz: "🎷",
    classica: "🎼",
    reggae: "☀️",
    blues: "🎵",
    country: "🐎",
    metal: "🤘",
    indie: "🎹"
  };
  return emojis[genero] || "🎵";
}

function drawStars(x, y, rating) {
  // Converter rating de 0-10 para 0-5
  let stars = round(rating / 2);
  fill(255, 204, 0);
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      text("★", x + i*15, y);
    } else {
      fill(100);
      text("☆", x + i*15, y);
    }
  }
}

function mousePressed() {
  // Recarregar para nova consulta
  if (mouseX > width-100 && mouseY > height-30 && mouseX < width && mouseY < height) {
    location.reload();
  }
}
