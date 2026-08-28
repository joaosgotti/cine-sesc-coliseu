/* ===========================================================================
   PROGRAMAÇÃO — CINEMA SESC CASA AMARELA
   ---------------------------------------------------------------------------
   Este é o ÚNICO arquivo que muda quando chega a programação nova do mês.
   Substitua o conteúdo inteiro e pronto. O site descobre sozinho qual é a
   quarta em destaque, a partir da data de hoje.

   Formato:
     data  -> "AAAA-MM-DD" (sempre a quarta)
     hora  -> "17:00" ou "19:00"
     campos vazios ("") simplesmente não aparecem na página
     cartaz -> link de imagem (TMDB, por exemplo) ou "" para usar o
               bloco tipográfico no lugar
   =========================================================================== */

const PROGRAMACAO = {
  unidade: "Sesc Casa Amarela",
  cidade: "Recife",
  endereco: "Rua Padre Lemos, 155 — Casa Amarela, Recife — PE",
  mapa: "https://maps.google.com/?q=Sesc+Casa+Amarela+Recife",
  entrada: "Confirmar valor da entrada",
  observacao: "Duas sessões toda quarta-feira, às 17h e às 19h.",
  instagram: "https://www.instagram.com/sescpe",
  mes: "Setembro de 2026",

  sessoes: [
    {
      data: "2026-09-02",
      filmes: [
        {
          hora: "17:00",
          titulo: "Central do Brasil",
          direcao: "Walter Salles",
          pais: "Brasil",
          ano: "1998",
          duracao: "113 min",
          classificacao: "12 anos",
          sinopse: "Uma ex-professora que escreve cartas para analfabetos na estação Central do Brasil acaba atravessando o país com um menino em busca do pai que ele nunca conheceu.",
          cartaz: ""
        },
        {
          hora: "19:00",
          titulo: "O Som ao Redor",
          direcao: "Kleber Mendonça Filho",
          pais: "Brasil",
          ano: "2012",
          duracao: "131 min",
          classificacao: "16 anos",
          sinopse: "A chegada de uma milícia particular altera a rotina de uma rua de classe média no Recife e traz à tona tensões que vinham de muito longe.",
          cartaz: ""
        }
      ]
    },
    {
      data: "2026-09-09",
      filmes: [
        {
          hora: "17:00",
          titulo: "Bacurau",
          direcao: "Kleber Mendonça Filho e Juliano Dornelles",
          pais: "Brasil",
          ano: "2019",
          duracao: "131 min",
          classificacao: "16 anos",
          sinopse: "Um povoado do sertão desaparece do mapa logo depois da morte de sua matriarca, e seus moradores descobrem que estão sendo caçados.",
          cartaz: ""
        },
        {
          hora: "19:00",
          titulo: "Aquarius",
          direcao: "Kleber Mendonça Filho",
          pais: "Brasil",
          ano: "2016",
          duracao: "146 min",
          classificacao: "16 anos",
          sinopse: "Uma crítica musical aposentada é a última moradora de um prédio à beira-mar e resiste, sozinha, à pressão de uma construtora.",
          cartaz: ""
        }
      ]
    },
    {
      data: "2026-09-16",
      filmes: [
        {
          hora: "17:00",
          titulo: "Vidas Secas",
          direcao: "Nelson Pereira dos Santos",
          pais: "Brasil",
          ano: "1963",
          duracao: "103 min",
          classificacao: "12 anos",
          sinopse: "Uma família de retirantes atravessa o sertão fugindo da seca, entre a fome, a violência e a esperança de encontrar um lugar para ficar.",
          cartaz: ""
        },
        {
          hora: "19:00",
          titulo: "Que Horas Ela Volta?",
          direcao: "Anna Muylaert",
          pais: "Brasil",
          ano: "2015",
          duracao: "112 min",
          classificacao: "12 anos",
          sinopse: "A chegada da filha de uma empregada doméstica à casa dos patrões desarruma silenciosamente as hierarquias da família.",
          cartaz: ""
        }
      ]
    },
    {
      data: "2026-09-23",
      filmes: [
        {
          hora: "17:00",
          titulo: "Baile Perfumado",
          direcao: "Paulo Caldas e Lírio Ferreira",
          pais: "Brasil",
          ano: "1996",
          duracao: "93 min",
          classificacao: "14 anos",
          sinopse: "Um mascate libanês parte pelo sertão para filmar Lampião e seu bando, misturando cangaço, comércio e cinema.",
          cartaz: ""
        },
        {
          hora: "19:00",
          titulo: "Retratos Fantasmas",
          direcao: "Kleber Mendonça Filho",
          pais: "Brasil",
          ano: "2023",
          duracao: "93 min",
          classificacao: "12 anos",
          sinopse: "Um documentário sobre o centro do Recife e os antigos cinemas de rua que moldaram a memória afetiva da cidade.",
          cartaz: ""
        }
      ]
    },
    {
      data: "2026-09-30",
      filmes: [
        {
          hora: "17:00",
          titulo: "O Auto da Compadecida",
          direcao: "Guel Arraes",
          pais: "Brasil",
          ano: "2000",
          duracao: "104 min",
          classificacao: "12 anos",
          sinopse: "João Grilo e Chicó inventam trapaças para sobreviver numa cidadezinha do sertão, até serem julgados no céu.",
          cartaz: ""
        },
        {
          hora: "19:00",
          titulo: "Cinema, Aspirinas e Urubus",
          direcao: "Marcelo Gomes",
          pais: "Brasil",
          ano: "2005",
          duracao: "99 min",
          classificacao: "12 anos",
          sinopse: "Em 1942, um alemão que foge da guerra atravessa o sertão pernambucano vendendo aspirina com um projetor de cinema no caminhão.",
          cartaz: ""
        }
      ]
    }
  ]
};
