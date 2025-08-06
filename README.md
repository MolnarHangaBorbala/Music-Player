# 🎧 Zenelejátszó – Music-Player

[![Live on Netlify](https://img.shields.io/badge/Live_on-Netlify-brightgreen?style=for-the-badge&logo=netlify&logoColor=white)]([https://music-player-par0ject.netlify.app](https://music-player-par0ject.netlify.app))

Egy letisztult, mégis látványos zenelejátszó webalkalmazás, amely lehetővé teszi zenék keresését és lejátszását a [Jamendo API](https://developer.jamendo.com/) segítségével. A lejátszóban helyet kapott egy egyedi vinyl animáció, valós idejű dalszöveg-megjelenítés, valamint teljes mértékben testreszabható hangerő- és időcsúszka is.

## 🎬 Élő demó:
[https://music-player-par0ject.netlify.app](https://music-player-par0ject.netlify.app) 

## 🔑 Fő funkciók

- 🔍 **Zene keresése** valós időben a Jamendo API segítségével (maximum 10 találat).
- 🎶 **Zenelejátszás** beépített HTML5 `<audio>` lejátszóval.
- 💿 **Animált vinyl** forgás indításakor/megállításakor.
- 📜 **Valós idejű dalszöveg-megjelenítés**, automatikusan a lejátszott zenéhez.
- 🎧 **Testreszabható lejátszófelület**:
  - Lejátszás / szünet gomb
  - Időcsúszka és aktuális idő
  - Hangerő-szabályozás (függőleges csúszka)
- 🖼 **Album borító** beillesztve a vinylre
- 🔄 **Animált szöveg** a „Now Playing” sávban.
- 🎨 **Reszponzív és modern UI** csak HTML, CSS, JS használatával (framework nélkül).

## 🛠 Használat

1. Nyisd meg az `index.html` fájlt egy modern böngészőben.
2. Írj be egy keresőszót a keresősávba (pl. előadó neve vagy szám címe).
3. Kattints a „Search” gombra.
4. Válassz egy számot a találatok közül.
5. A zene automatikusan lejátszásra kerül, miközben a vinyl forogni kezd, és megjelenik a dalszöveg is (ha elérhető).

## 🔗 API és technológia

- **Jamendo API** (Tracks + Lyrics)
  - `https://api.jamendo.com/v3.0/tracks`
  - `client_id`: `9fa0398c`

## Fájlstruktúra

<details>
  <summary>📁</summary>
  
```bash
.
└── Music-Player/
    ├── index.teml
    ├── html/
    ├── js/
    │   └── indexscr.js
    ├── css/
    │   └── indexstyle.css
    └── img/
        ├── vinyl.png
        └── icon/
            └── vinyl-icon.png
```
</details>

## 💡 Jövőbeli fejlesztések

- 🔀 Következő / Előző szám funkció
- 📃 Teljes lejátszási lista készítése
- ❤️ Kedvenc zenék elmentése `localStorage`-be
- 🌙 Sötét/Világos mód váltás
- 🔊 Vizualizáció (pl. hullámforma a zene alapján)
- 📱 Mobiloptimalizálás teljes UI-ra
- 🔒 API kulcsok kiszolgálása backendből (proxyval, biztonsági okokból)
- 🌐 Több nyelv támogatása (i18n)

## 🧪 Műszaki részletek

- HTML5 + CSS3 + Vanilla JavaScript
- API kommunikáció `fetch()` segítségével
- Animációk `@keyframes` CSS-ben
- Teljesen frontend alapú, nincs backend szükséglet

## 📸 Képernyőképek (javasolt)

> *(Ide szúrj be pár képet a lejátszóról működés közben: keresés, lejátszás, dalszöveg, stb.)*

## 🧑‍💻 Készítette

- Név: [Ide írd be magad]
- GitHub: [@githubfelhasználóneved](https://github.com/te)
