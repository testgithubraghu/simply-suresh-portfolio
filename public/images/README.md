# Image library — provenance rules

Every image shipped with this site is filed by provenance. Nothing that is not
a genuine photograph of Simply Suresh is ever presented as one.

## `youtube/` — authentic performance frames
Stills captured from videos published on the artist's own YouTube channel
(`@simplysuresh5457`). Each is credited in the UI as
"Frame from the Simply Suresh YouTube channel" and links back to its video.

| File | Source video |
| --- | --- |
| paper-tear-magic.jpg | Simply Suresh Magic — paper tear routine |
| mandya-movie-team.jpg | Magic with the Bhuvanam Gaganam movie team, Mandya |
| lulu-mall-national-magic-day.jpg | National Magic Day, Lulu Mall Bengaluru (23 Feb 2024) |
| mind-reading-teachers-day.jpg | Mind reading, Teacher's Day celebration at RCIS |
| fun-magic-with-kids.jpg | Fun magic with kids, Bharatanatyam class gathering |
| dasara-magic-show-2024.jpg | Dasara 2024 magic show (Suddiranga news coverage) |
| chowdaiah-memorial-hall.jpg | Show at Chowdaiah Memorial Hall, Bengaluru |
| clown-act.jpg | Clown & comedy walk-around, Magicians' Association event |
| orion-mall-magicians-day-2023.jpg | Orion Mall, Magician's Day 2023 |
| magicians-day-2021.jpg | Magicians Day 2021 gathering |
| global-academy-school-show.jpg | School show at Global Academy, Bengaluru |
| birthday-dance-class.jpg | Birthday set at a dance-class party |
| tissue-paper-magic.jpg | Tissue-paper routine |
| ball-magic.jpg | Ball magic routine |
| paper-eating-magic.jpg | Paper-eating routine |

Broadcast poster graphics (e.g. TV-channel title cards featuring third-party
portraits) are deliberately **not** kept here.

## `representative/` — licensed stock, always labelled
Used only to illustrate programme categories whose approved performance
photography has not yet been supplied. Always badged "Representative" in the
UI and credited in captions. Never photographs of Simply Suresh.

- balloon-sculpture.jpg, balloon-arch.jpg — balloon modelling category
- auditorium-light.jpg, stage-spots.jpg — venue / atmosphere texture

## `editorial/` — commissioned brand stills (generated)
Art-directed still-life imagery for section backgrounds and page headers.
Contains no people and no performance claims; captioned in the UI as
"Editorial still · brand imagery, not a performance photograph".

- stage-haze.jpg — quote band background (home)
- cards-still-life.jpg — /shows header
- balloon-flat-lay.jpg — /book sidebar

## Replacing media
When approved performance photography arrives, drop files into `youtube/`
(or a new `approved/` folder), update the `src` values in `src/lib/gallery.ts`
and `src/lib/shows.ts`, and remove the `representative: true` flags.
