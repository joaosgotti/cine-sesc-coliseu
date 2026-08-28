# Cinema Sesc Casa Amarela

Página estática com a programação do cinema. Sem build, sem dependências, sem custo.
Três arquivos: `index.html`, `programacao.js` e este README.

---

## Publicar no GitHub Pages

1. Crie um repositório público, por exemplo `cinema-sesc`.
2. Suba `index.html` e `programacao.js` na raiz.
3. **Settings → Pages → Source: Deploy from a branch → `main` / `root`** → Save.
4. Em um ou dois minutos o site sai em `https://SEU-USUARIO.github.io/cinema-sesc/`.

Se depois quiser um domínio bonito (`cinemasesccasaamarela.com.br`), o Pages aceita
domínio próprio de graça — você só paga o registro do domínio, uns R$ 40/ano.

---

## Atualizar a programação (uma vez por mês)

O site descobre sozinho qual quarta está em destaque, comparando com a data de hoje.
Você **não mexe no código** toda semana. Só troca `programacao.js` no início do mês.

### O fluxo

1. A programação chega no grupo do WhatsApp com título + horário.
2. Você copia a mensagem inteira e cola no prompt abaixo, numa conversa com o Claude.
3. Recebe o `programacao.js` completo, com direção, ano, país, duração e sinopse.
4. No GitHub, abra `programacao.js` → ícone de lápis → apaga tudo → cola → **Commit changes**.
5. Pronto. O site atualiza sozinho em ~1 minuto.

O passo 4 dá pra fazer pelo celular, pelo app do GitHub.

### O prompt (salve num bloco de notas)

> Você vai gerar o arquivo `programacao.js` de um site de cinema.
>
> Abaixo está a programação do mês como ela chegou. Cada quarta tem duas sessões, 17:00 e 19:00.
> Para cada filme, preencha direção, país, ano, duração e classificação com dados reais — se não
> tiver certeza de algum campo, deixe string vazia em vez de inventar. Escreva uma sinopse original
> de 1 a 2 frases, sem copiar texto de sinopse oficial.
>
> Responda **somente** com o conteúdo do arquivo, no formato exato deste modelo, mantendo o cabeçalho
> de configuração (unidade, cidade, endereco, mapa, entrada, observacao, instagram) igual ao que já está lá:
>
> [cole aqui o conteúdo atual do programacao.js como modelo]
>
> Programação nova:
>
> [cole aqui a mensagem do WhatsApp]

### Se quiser automatizar mais

Como você já mexe com isso: dá pra fazer o Claude Code abrir o repo, editar o arquivo e commitar
direto — aí o passo 4 some. Também dá pra puxar cartaz e ficha técnica da API do TMDB por uma
GitHub Action, mas aí você troca "fácil de manter" por "mais peças pra quebrar". Eu começaria
do jeito manual e só automatizaria se cansar.

---

## Cartazes e imagens

O campo `cartaz` aceita um link de imagem. Se ficar vazio (`""`), o site usa um bloco tipográfico
preto com o título — que funciona bem e é o padrão, então não tem pressa.

Duas fontes seguras:

- **Materiais do próprio Sesc** — os cards e fotos que eles mandam, já que você tem autorização.
- **TMDB** (themoviedb.org) — tem imagens de praticamente tudo e permite o uso; a única exigência
  é creditar a fonte em algum canto da página. Pegue o link direto da imagem e cole no campo.

Evite pegar cartaz aleatório do Google Imagens: são de distribuidoras e podem ter restrição de uso.

---

## Estrutura de `programacao.js`

```js
const PROGRAMACAO = {
  unidade, cidade, endereco, mapa, entrada, observacao, instagram, mes,
  sessoes: [
    {
      data: "2026-09-02",           // sempre AAAA-MM-DD, sempre a quarta
      filmes: [
        { hora: "17:00", titulo, direcao, pais, ano, duracao, classificacao, sinopse, cartaz },
        { hora: "19:00", ... }
      ]
    }
  ]
};
```

Qualquer campo com `""` simplesmente não aparece na página.

---

## Detalhes de comportamento

- **Destaque automático:** a primeira quarta com data ≥ hoje vira o destaque. Na própria quarta,
  ela continua em destaque o dia inteiro.
- **Quartas que já passaram:** continuam na lista do mês, em cinza, marcadas como "já exibido".
- **Fim do mês:** se todas as datas já passaram, o site mostra a última como "Última sessão do mês" —
  ou seja, ele não quebra se você atrasar a atualização, mas fica claro que está desatualizado.
- **Salvar na agenda:** cada sessão em destaque gera um arquivo `.ics` que abre no calendário do celular.
- **Acessibilidade:** funciona no teclado, respeita `prefers-reduced-motion` e é legível a partir de 320px.

---

## Como testar antes de publicar

Abra `index.html` direto no navegador (duplo clique). Funciona sem servidor, porque a programação
é um `.js` e não um `.json` — isso foi de propósito.
