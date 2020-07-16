[![Netlify Status](https://api.netlify.com/api/v1/badges/d704d950-13be-4148-9e05-2707e4370156/deploy-status)](https://app.netlify.com/sites/relaxed-khorana-454801/deploys)

# VUTTR - Very Usefull Tools To Remember

## Description

The project was built with React and Next.js

- SPA (Single Page Application)
- PWA (Progressive Web App) - Service Worker
- Server Side Rendering
- One day cache
- Docker deploy configured
- Responsive layout
- SEO friendly
- Design System friendly
- Wireframe friendly

PS: the AMP version was not added but with next, we can have an AMP version of our website with no troubles.
PS.2: We can build the backend directly in this project, but I'm using the bossabox challenge fake api.

## Demo

1. Open the [Demo link](https://relaxed-khorana-454801.netlify.app/)
1. Download the [challenge-fake-api](https://gitlab.com/bossabox/challenge-fake-api/tree/master)
1. Run the backend `npx json-server d|512x397,json --port 3004` (Important: the frontend is configured to look into port 3004)
1. The web app will connect into loc|512x397,host backend and let you test the project

## Installation

1. Clone the repository
1. run `npm install` to install dependencies
1. run `npm run dev`
1. Have fun!

## Project

# Desktop

![Home of Project](https://i.imgur.com/3MGPOp9.png)
![Add a new tool](https://i.imgur.com/eDi2jdJ.png)
![Tool Added](https://i.imgur.com/UgXTAqP.png)

# Mobile

![Mobile Home](https://i.imgur.com/xIQhMi1.png =250x500)
![Mobile Add](https://i.imgur.com/2H1FtZ8.png =250x500)
![Mobile Add Feedback](https://i.imgur.com/15UhTAy.png =250x500)

## SEO

[Google Validation Tool](https://search.google.com/test/rich-results?utm_campaign=sdtt&utm_medium=code&id=oMInlreNz0CgFCTaAFlomA)

![Google Schema Validation](https://i.imgur.com/5Gc0jXf.png)

## Anotations

```
Notes

☐ cor verde do botão não está mapeada na paleta de cores, a cor mapeada que provavelmente seria a correta é a do token: --vuttr-color-green, a não mapeada é a: --vuttr-color-green-no-mapped
☐ Icone de lapis não está exportável no projeto
☐ Icone da portinha ao lado do lapis não está exportável no projeto
☐ Icone de + não está exportável no projeto
☐ Icone ao lado do icone da bossabox não está exportável no projeto
☐ Icone dos 3 pontinhos (ultimo icone) não está exportável no projeto
☐ Os labels dos inputs na página do design system estão com distancias diferentes com relação ao input
☐ O asterisco de required do input field é 8px e uns quebrados, o do input select é 12px e uns quebrados... Porquê não são o mesmo valor?
☐ A forma como os icones foram feitos, impossibilita o preenchimento do mesmo com cores customizadas, o máximo que pode ser feito é utilizar o css filter.
☐ O checkbox foi improvisado com icones do material design, então não está 100% fiel ao design system
☐ A cor da modal não está mapeada nos padrões de cores
☐ O modal primary tem um right diferente dos outros modais no botão de fechar a modal
☐ O Wireframe do modal diverge do layout do design system
☐ No design system o texto do componente de feedback warning é igual ao de success
☐ A distancia do texto para o botão entre o primeiro banner de feedback e o segundo, divergem, sendo o primeiro 31px e o segundo banner 30px
☐ Foi adicionado line-height: 1.2 e 1.35 na descrição do card de tools e do toast para estar visualmente mais de acordo com o wireframe do card list e com design do component de feedback
☐ Os botões dos cards de feedback (toast) não estão mapeados com os botões do design system (cores)
☐ O Close icon dos toasts (cards de feedback) ficaram visualmente bem diferentes do design system, apesar dos atributos seguirem o design system fornecido

-------------------------------

Improvements

☐ O input de search poderia manter o foco após o redraw do elemento
☐ O FieldSelect não foi finalizado
☐ Adicionar os status do FieldText no FieldTags (error, required, etc...)
☐ Adicionar feedback visual ao add uma nova tool
☐ Melhorar a lógica do toast para ser possível adicionar mais de 1 por vez
☐ Passar o tempo que o toast deverá ficar aberto dinamicamente por instancia do toast
☐ Adicionar paginação ou virtual scroll na listagem de cards
☐ Dá para deixar o de adicionar tool mais abstrato removendo a chamada da api dele

-------------------------------
```
