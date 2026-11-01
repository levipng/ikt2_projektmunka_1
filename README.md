# Online Biztonság – Projektmunka

Ez a repository egy statikus weboldal forráskódját tartalmazza, amely az **online biztonság** témakörében nyújt hasznos információkat és gyakorlati tanácsokat. A projekt célja, hogy könnyen áttekinthető formában hívja fel a figyelmet a digitális világ leggyakoribb veszélyeire és azok megelőzésére.

## 📂 Témakörök

A weboldal főbb témakörei külön mappákba szervezve találhatók, mindegyik saját `index.html` fájllal rendelkezik:

| Mappa | Téma |
|---|---|
| `cybercrime/` | Számítógépes bűnözés és annak formái |
| `data_protection/` | Adatvédelem és személyes adatok kezelése |
| `password/` | Jelszavak biztonsága, erős jelszavak létrehozása |
| `phishing/` | Adathalászat felismerése és elkerülése |
| `safe_online_shopping/` | Biztonságos online vásárlás |
| `wifi_security/` | Wi-Fi hálózatok biztonsága |

A gyökérkönyvtárban található `index.html` a fő belépési pont, amely összeköti az egyes témaköröket. A `script.js` fájl a weboldal működéséhez szükséges JavaScript-kódot tartalmazza.

## 🛠️ Használt technológiák

- **HTML5** – az oldalak struktúrája
- **Bootstrap** – reszponzív design és UI komponensek
- **JavaScript** – interaktív elemek és kliensoldali működés

A szükséges külső fájlok a `dependencies/` mappában találhatók:

- `bootstrap.min.css`
- `bootstrap.bundle.min.js`
- `zxcvbn.js`

## 🚀 Futtatás

A projekt statikus weboldal, ezért nincs szükség külön build lépésre vagy szerveroldali környezetre.

1. Nyisd meg a repository gyökérkönyvtárában található `index.html` fájlt egy böngészőben.
2. Az oldalak közötti navigáció a böngészőben történik.

## 📁 Fájlstruktúra

```text
.
├── index.html
├── script.js
├── dependencies/
│   ├── bootstrap.min.css
│   ├── bootstrap.bundle.min.js
│   └── zxcvbn.js
├── cybercrime/
│   └── index.html
├── data_protection/
│   └── index.html
├── password/
│   └── index.html
├── phishing/
│   └── index.html
├── safe_online_shopping/
│   └── index.html
└── wifi_security/
    └── index.html
