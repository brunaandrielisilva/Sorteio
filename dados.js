// Cada pedido: { t: "texto", u: "link (opcional)", o: "observação (opcional)" }
window.PESSOAS = [
  { n: "Olga", d: [] },
  { n: "Nilton", d: [
  { t: "Boné aba curva liso básico, ajustável (Mercado Livre)", u: "https://www.mercadolivre.com.br/bone-aba-curva-liso-basico-ajuste-unissex-masculino-baseball/up/MLBU4293701271", o: "Cor bege · cerca de R$ 25,90" }
] },
  { n: "Lucca", d: [
  { t: "Camiseta essencial masculina slim, decote redondo, algodão – Malwee", u: "https://www.malwee.com.br/camiseta-essencial-masculina-slim-decote-redondo-em-algodao-100001503700004/p?idsku=77252", o: "Cor preta · tamanho M · cerca de R$ 49,99" }
] },
  { n: "Fátima", d: [] },
  { n: "Bruna", d: [
    { t: "Vestido / macaquinho", u: "https://vt.tiktok.com/ZS9PLBvAhjw3d-OOVxn/", o: "Tamanho M · cor preta, azul-marinho ou off-white" },
    { t: "Jogo de copos", u: "https://vt.tiktok.com/ZS9PLS12meSPU-mse86/", o: "Pode ser um ou outro" }
  ] },
  { n: "Hyun", i: "namorado da Bruna", d: [
  { t: "Pijama masculino de calor em malha premium (TikTok)", u: "https://vt.tiktok.com/ZS9P2ccWCU4kX-AAF6P/", o: "Tamanho M · cor cinza" },
  { t: "Kit de ferramentas 46 peças – catraca reversível + soquetes (TikTok)", u: "https://vt.tiktok.com/ZS9PjJ1wnV2jP-Y2H5m/" },
  { t: "Kit de ferramentas – 2ª opção (TikTok)", u: "https://vt.tiktok.com/ZS9PjJL5tsNFa-DfKyY/", o: "Pode ser qualquer uma das opções" }
] },
  { n: "Thabattn", d: [
  { t: "Suporte de controle Yoshi, impresso em 3D (Shopee)", u: "https://br.shp.ee/eyG6ZwMY", o: "Cerca de R$ 49,90" },
  { t: "Suporte de controle Pikachu, impresso em 3D (Shopee)", u: "https://br.shp.ee/Q4Yf6mVq", o: "Cerca de R$ 49,90" },
  { t: "Camiseta \"Girls Will Be Girls\" bruxas (Shopee)", u: "https://br.shp.ee/EJ5Pxx4D", o: "Cor preta · tamanho GG · cerca de R$ 21,77" },
  { t: "Camiseta Gatinho (Shopee)", u: "https://br.shp.ee/pZYaaCPn", o: "Cor preta · tamanho GG · pode ser qualquer uma das opções" }
] },
  { n: "Mari", i: "namorada do Lucca", d: [
  { t: "Óculos de sol oval feminino retrô – Siena Brown Turtle (TikTok)", u: "https://vt.tiktok.com/ZS9P2wWJndhnj-fHDrJ/" }
] },
  { n: "Hariel", i: "criança", d: [
    { t: "Kit 3 mini bonecos heróis Vingadores (Shopee)", u: "https://br.shp.ee/FddyeSFc", o: "Capitão América, Homem-Aranha e Hulk · cerca de R$ 33,90" }
  ] },
  { n: "Kamile", d: [
  { t: "Calça legging fitness feminina cintura alta com bolso (Shopee)", u: "https://br.shp.ee/Gh2n8LtU", o: "Tamanho M · cor preta · grossa, sem transparência · cerca de R$ 36,12" }
] },
  { n: "Phellype", d: [] },
  { n: "Scharlo", d: [] },
  { n: "Rose", d: [
  { t: "Kit 2 bermudas ciclista fitness cintura alta com bolso (Shopee)", u: "https://br.shp.ee/xUWUeXWU", o: "Vem 2 bermudas no kit: 1 rosa e 1 azul · tamanho M · cerca de R$ 49,90 o kit" }
] },
  { n: "Paulo", d: [] },
  { n: "Maicon", d: [
  { t: "Relógio digital esportivo à prova d'água C-Shock (Mercado Livre)", u: "https://meli.la/1Nsho9w", o: "Correia vermelha" }
] },
  { n: "Eloah", i: "criança", d: [] },
  { n: "Biti", i: "anfitriã", d: [] },
  { n: "Thay", d: [
  { t: "Necessaire feminina grande de nylon com divisórias (TikTok)", u: "https://vt.tiktok.com/ZS9PjYtWVjbPj-GKYRv/", o: "Cor rosa · cerca de R$ 29,99" },
  { t: "Kit Cadiveu shampoo Quartzo Shine 250 ml + 3 mini máscaras 30 ml (TikTok)", u: "https://vt.tiktok.com/ZS9PjL5t3jDn8-igR5Y/", o: "Cerca de R$ 48,55 · pode ser um ou outro" }
] },
  { n: "Jean", i: "namorado da Thay", d: [
  { t: "Sandália masculina confortável antiderrapante (Shopee)", u: "https://br.shp.ee/DRjWje47", o: "Cor preta · número 39/40 · cerca de R$ 50,95" }
] },
  { n: "Carol", i: "mora em Londres", d: [] },
  { n: "Sabrina", i: "mora em Londres", d: [] },
  { n: "Dilceu", i: "japa", d: [
  { t: "Kit de meias (TikTok)", u: "https://vt.tiktok.com/ZS9P2VqQgV3Y6-1UrIh/" },
  { t: "Kit de cuecas (TikTok)", u: "https://vt.tiktok.com/ZS9P2Vgoe9FMQ-9MudC/" }
] },
  { n: "Ayumi", i: "namorada do Bruno", d: [
  { t: "Body splash Obsessed – WePink (200 ml)", u: "https://www.wepink.com.br/body-splash-obsessed-desodorante-colonia-200ml---wepink/p" },
  { t: "Body splash One Touch Warm – WePink (200 ml)", u: "https://www.wepink.com.br/body-splash-one-touch-warm-desodorante-colonia-200ml---wepink/p" },
  { t: "Ou algo da Hello Kitty das Lojas Renner", o: "Pode ser qualquer uma das opções" }
] },
  { n: "Bruno", d: [] },
  { n: "Mario", d: [
  { t: "Camiseta Corinthians Batimento Cardíaco, 100% algodão (Shopee)", u: "https://br.shp.ee/VqjrbQKE", o: "Cerca de R$ 25 a R$ 30" }
] },
  { n: "Bia", d: [
  { t: "Cuia para chimarrão de madeira selada (Shopee)", u: "https://s.shopee.com.br/1C6yRLGBo?share_channel_code=1", o: "Cerca de R$ 39,70" }
] },
  { n: "Gabriele", i: "criança", d: [
  { t: "Boneca princesa 17 cm com conjunto completo (Shopee)", u: "https://s.shopee.com.br/1C6yK60Xj?share_channel_code=1" }
] }
];
