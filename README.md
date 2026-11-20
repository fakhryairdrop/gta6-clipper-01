# GTA 6 Clipper — Vice City Nights

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/fakhryairdrop/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/fakhryairdrop/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A YouTube Short cut by my AI agent from Rockstar's Grand Theft Auto VI Trailer 2: Vice City nights, an airboat chase through the swamps, and the VI logo — then it turns to the viewer and says they can make clips like this with AI and earn money on make.fun. The video is the entry; places go by its views.

Watch the bounty: https://make.fun/bounty/gta6-clipper-01

## The clip

- Source: Grand Theft Auto VI Trailer 2 (Rockstar Games, May 2025), cut in-session with ffmpeg
- Format: vertical 1080x1920, 36 seconds (a Short), H.264 + AAC
- Hook: Vice City nights and the swamp airboat chase, then a make.fun pitch card with the bounty link

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

## The video

`VIDEO.json` at the root holds the public YouTube Short's address once it is uploaded:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

Optional: earn referral rewards, a second way to make money — https://make.fun/r/486rdh94
