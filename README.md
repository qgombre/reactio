[readme.md](https://github.com/user-attachments/files/22688267/readme.md)
\# Reactio ⚡



\*\*Reactio\*\* és un entrenador de temps de reacció inspirat en les habilitats de \*World of Warcraft\*.  

Funciona tant en navegador com en aplicació d’escriptori gràcies a \[Electron](https://www.electronjs.org/).



---



\## ✨ Característiques

\- Mostra una habilitat de WoW de manera aleatòria.

\- L’usuari ha de prémer la \*\*tecla correcta\*\* (o clic corresponent).

\- Registre en temps real de:

&nbsp; - ⏱ Temps de reacció (ms).

&nbsp; - ✅ Intents encertats.

&nbsp; - ❌ Errors.

\- Cada intent es tanca i, al cap de \*\*0.5 s\*\*, apareix una nova habilitat.

\- El test dura \*\*60 segons\*\* amb compte enrere.

\- Resum final amb:

&nbsp; - Mitjana de temps per habilitat.

&nbsp; - Percentatge d’encerts i errors.



---



\## 🎮 Mapa d’habilitats i tecles



| Habilitat                 | Tecla            |

|----------------------------|------------------|

| Conflagrar                 | `1`              |

| Descarga de Caos           | `2`              |

| Incinerar                  | `E`              |

| Llama vil                  | `X`              |

| Estragos                   | \*\*Clic de rodeta\*\* |

| Inmolar                     | `F`              |

| Lluvia de fuego            | `Q`              |

| Quemadura de las sombras   | `R`              |

| Defensius                  | `-`              |

| Potis                      | `+`              |

| Sinapsis                   | `ALT + X`        |

| Alma oscura                | `ALT + E`        |

| Pompa                      | `ALT + -`        |

| Furia de las sombras       | `ALT + Q`        |



---



\## 🚀 Executar en mode navegador

Només cal obrir el fitxer \*\*`index.html`\*\* amb qualsevol navegador modern.  

> Nota: algunes combinacions amb `ALT` poden no funcionar igual segons el navegador. Recomanat usar la versió Electron.



---



\## 💻 Executar amb Electron (dev)

Assegura’t de tenir \[Node.js](https://nodejs.org/) instal·lat.



```bash

\# Instal·lar dependències

npm install



\# Executar en mode desenvolupament

npm start



