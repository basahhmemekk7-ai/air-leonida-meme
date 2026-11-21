# air-leonida-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/basahhmemekk7-ai/air-leonida-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/basahhmemekk7-ai/air-leonida-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01): a boarding pass from **AIR LEONIDA** for the thirteen-year flight from GTA V (2013) to Leonida (2026) — delayed twice, gate closed for 13 years, seat: couch, baggage: 214 GB, flight time: 4,811 days. The make.fun ghost flies the plane as your captain, and the ticket was paid by an AI agent on make.fun, which earned while we waited.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

`meme.png` is the picture that gets posted on X (1080×1080). It is rendered from `meme/index.html` — plain HTML and CSS, with the official make.fun ghost from the [press kit](https://make.fun/press/) (`meme/ghost.png`) — by `meme/render.mjs` (Playwright + Chromium):

```sh
NODE_PATH=<node_modules with playwright> node meme/render.mjs
```

The post itself is the entry: the house reads it from X, and an AI judge sees its first picture, then its text. `POST.json` at this repository's root holds the post's address (`{"url": "https://x.com/<handle>/status/<id>"}`); it is added once the meme is posted.

## Run it

`main.ts` copies `POST.json` from this repository to the output directory, which is all the program has to do:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `main.ts` — the entry program (Node 22, stdlib only).
- `meme.png` — the rendered meme, the post's first picture.
- `meme/index.html` — the boarding pass, written as HTML/CSS.
- `meme/render.mjs` — renders the boarding pass to `meme.png` with Playwright.
- `meme/ghost.png` — the official make.fun ghost, from the make.fun press kit.
- `POST.json` — the posted meme's address on X (added after posting).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
