#La mia meteo app fa richiesta get da https://www.visualcrossing.com/

Ho utilizzato sass, axios, bootstrap, fontawesome icon.

Tutti i component sono figli di Meteo tranne la navbar.
MeteoApp gestiste la fetch e manda i data ai suoi figli, ognuno di esso renderizza diverse proprietà.

La navbar si limita al form di ricerca ed inserita dentro l'header.
Tutto il resto si trova dentro al main. 

App.js gestisce la location e la searchbar.

Ho creato dei component che gestisco i path delle img e i valori per i cicli lunari e un component che gestisce i path delle icone che vanno a trovare la condizione meteo passata dall'API e cambiano dinamicamente.

#manca un ottimizzazione delle img versione mobile anche se tutti i div sono responsive.
