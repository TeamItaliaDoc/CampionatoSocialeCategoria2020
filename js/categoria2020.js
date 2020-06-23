var giorni = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
var calcolaClassificaRun = false;
var nQualificati = 0;
var fineTurno1 = new Date(2019,11,30,12,0,0,0); 

var matchs = [];
//matchs[1] = {"serie":"A", "girone":1, "nome":"wonderful-autumn-weather", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0};
matchs[11] = {"serie":"A", "girone":1, "nome":"sociale-2020-serie-a-girone-1", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[12] = {"serie":"A", "girone":2, "nome":"sociale-2020-serie-a-girone-2", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[13] = {"serie":"A", "girone":3, "nome":"sociale-2020-serie-a-girone-3", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[14] = {"serie":"A", "girone":4, "nome":"sociale-2020-serie-a-girone-4", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[15] = {"serie":"A", "girone":5, "nome":"sociale-2020-serie-a-girone-5", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[16] = {"serie":"A", "girone":6, "nome":"sociale-2020-serie-a-girone-6", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[17] = {"serie":"A", "girone":7, "nome":"sociale-2020-serie-a-girone-7", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[18] = {"serie":"A", "girone":8, "nome":"sociale-2020-serie-a-girone-8", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[21] = {"serie":"B", "girone":1, "nome":"sociale-2020-serie-b-girone-1", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[22] = {"serie":"B", "girone":2, "nome":"sociale-2020-serie-b-girone-2", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[23] = {"serie":"B", "girone":3, "nome":"sociale-2020-serie-b-girone-3", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[24] = {"serie":"B", "girone":4, "nome":"sociale-2020-serie-b-girone-4", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[25] = {"serie":"B", "girone":5, "nome":"sociale-2020-serie-b-girone-5", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[26] = {"serie":"B", "girone":6, "nome":"sociale-2020-serie-b-girone-6", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[27] = {"serie":"B", "girone":7, "nome":"sociale-2020-serie-b-girone-7", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
//matchs[28] = {"serie":"B", "girone":8, "nome":"sociale-2020-serie-b-girone-8", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[31] = {"serie":"C", "girone":1, "nome":"sociale-2020-serie-c-girone-1", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[32] = {"serie":"C", "girone":2, "nome":"sociale-2020-serie-c-girone-2", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[33] = {"serie":"C", "girone":3, "nome":"sociale-2020-serie-c-girone-3", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[34] = {"serie":"C", "girone":4, "nome":"sociale-2020-serie-c-girone-4", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[35] = {"serie":"C", "girone":5, "nome":"sociale-2020-serie-c-girone-5", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[36] = {"serie":"C", "girone":6, "nome":"sociale-2020-serie-c-girone-6", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[37] = {"serie":"C", "girone":7, "nome":"sociale-2020-serie-c-girone-7", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
matchs[38] = {"serie":"C", "girone":8, "nome":"sociale-2020-serie-c-girone-8", "daCaricare":true, "stampaPosizione" : 0, "ultimo":0, "partiteTerminate":0, "nQualificati":0};
/**/
var matchFinaliA = [];
var matchFinaliB = [];
var matchFinaliC = [];
//Se pari aggiungere un record con risulatato agreed, sarà valido solo per la classifica giocatori
matchFinaliA[81] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[82] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[83] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[84] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[85] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[86] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[87] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[88] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[41] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[42] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[43] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[44] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[21] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[22] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliA[11] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
//Serie B
matchFinaliB[81] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[82] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[83] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[84] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[85] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[86] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[87] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[88] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[41] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[42] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[43] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[44] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[21] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[22] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliB[11] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
//Serie C
matchFinaliC[81] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[82] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[83] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[84] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[85] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[86] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[87] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[88] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[41] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[42] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[43] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[44] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[21] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[22] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}
matchFinaliC[11] = {"white" : {"username":"", "result":""}, "black" : {"username":"", "result":""}, "url":""}



var maxGirone = 8;   //E' il numero dei gironi 

//https://api.chess.com/pub/tournament/csp-inverno-2018-2019-girone-1/1/1
//  https://teamitaliadoc.github.io/CampionatoSocialeCategoria2020/index.html?dev=33
function elabora() {
    //Carico i dati di tutti i match
    for (var i in matchs) {
        matchs[i].url = 'https://api.chess.com/pub/tournament/' + matchs[i].nome + '/1/1'
        caricaMatch(matchs[i].url);
    };
}

function caricaMatch(url)
{
    console.log('caricaMatch: ' + url);
    //Leggo i dati 
    $.getJSON(url,function(data){

        //Cerco match elaborato
        var iMatch = 0
        for (var i in matchs) {
            if (this.url == matchs[i].url && matchs[i].daCaricare)
            iMatch = i;
        }        

        //Creo tutti i giocatori per avere anche quelli senza punteggio
        for (var iPlayer in data.players) {
            if (! giocatori[data.players[iPlayer].username.toLowerCase()]) {
                creaGiocatore(data.players[iPlayer].username);
            }
            //Aggiorno match/girone giocato
            giocatori[data.players[iPlayer].username].match = iMatch;
            giocatori[data.players[iPlayer].username].girone = matchs[iMatch].girone;
            giocatori[data.players[iPlayer].username].serie = matchs[iMatch].serie;
        }

        //Carico i risultati delle partite
        for (var i in data.games) {

            //Classifica giocatori
            //   NB NB DA FARE PER PRIMA COSI' CREA IL GIOCATORE
            if (data.games[i].end_time) {
                //controllo se non ha superato la data di fine torneo
                var myObj = $.parseJSON('{"date_created":"' + data.games[i].end_time + '"}'),
                end_time = new Date(1000*myObj.date_created);
                //Fine turno 1
                if (matchs[iMatch].turno == 1 && end_time > fineTurno1)
                   continue;    
           
                //Se risultato  definito la partita è finita
                if (data.games[i].white.result)
                    matchs[iMatch].partiteTerminate ++;

                //aggiorno punteggi
                setPunti(data.games[i].white.username.toLowerCase(), data.games[i].white.result, data.games[i].black.username);
                setPunti(data.games[i].black.username.toLowerCase(), data.games[i].black.result, data.games[i].white.username);
            }
        }


        matchs[iMatch].daCaricare = false;
        //Se ho caricato tutti i dati calcolo la classifica
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
        calcolaClassificaRun = true;

        //Carico partite delle finali
        getAvatar();
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        console.log(this.url + ' Errore in caricamento');
        var index = 0;
        for (var i in matchs) {
            if (matchs[i].url == this.url)
                index = i;
        };
        console.log(this.url + ' index: ' + index);
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
                caricaMatch(this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                //non lo devo più caricare
                matchs[index].daCaricare = false;            }

                //??????? se non carica l'ultimo si pianta ????????
              
        });
}

//calcolo classifica finale
function calcolaFinale()
{
    //Stampo la classifica della finale
    stampaFinale($("#finaleA"), matchFinaliA);
    stampaFinale($("#finaleB"), matchFinaliB);
    stampaFinale($("#finaleC"), matchFinaliC);

    //correggo i punti spareggio con scontri diretti
    giocatori['themoonlightknight'].puntiSpareggio = 99;
    giocatori['paccarozzo'].puntiSpareggio = 99;
    giocatori['abatichs'].puntiSpareggio = 99;
    
    //Calcolo e stampo la classifica eliminatorie
    calcolaEliminatorie($("#eliminatorieA"), 'A');
    calcolaEliminatorie($("#eliminatorieB"), 'B');
    calcolaEliminatorie($("#eliminatorieC"), 'C');
}

function calcolaEliminatorie(tabella, serie)
{   

    var username = '';
    var max = 0;
    var maxSpareggio = 0;
    var posizione = 0;
    var nPareggi = 0;
    var oldMax = 0;
    var oldSpareggio = -1;  //Per evitare problemi se sono tutti a zero
    var iGirone = 1;
  
    //Imposto posizione nel gruppo e salvo
    while (max > -1)
    {
        max = -1;
        maxSpareggio = -1;
        for (var i in giocatori)
        {
            //Come punti spareggio uso le vittorie
            if ((giocatori[i].serie == serie && giocatori[i].girone == iGirone && giocatori[i].posizioneGruppo == 0) &
                 (giocatori[i].punti > max || (giocatori[i].punti == max) && giocatori[i].puntiSpareggio > maxSpareggio)) {
                username = i;
                max = giocatori[i].punti;
                maxSpareggio = giocatori[i].puntiSpareggio;
            }
        }
        if (max > -1) 
        {
            if (oldMax == max && oldSpareggio == maxSpareggio )
            {
                nPareggi++;
            } else {
                posizione++;
                posizione += nPareggi;
                nPareggi = 0;
                oldMax = max;
                oldSpareggio = maxSpareggio;
            }    

            //Salvo posizione nel gruppo
            giocatori[username].posizioneGruppo = posizione;
            matchs[giocatori[username].match].ultimo = posizione;  //ultima posizione in classifica
            //Punti 1 classificato
            if (posizione == 1) {
                matchs[giocatori[username].match].punti1 = max;  
                matchs[giocatori[username].match].partite1 = giocatori[username].vinte + giocatori[username].perse + giocatori[username].patte;  
             }   
             //Punti 2 classificato
            if (posizione == 2) {
               matchs[giocatori[username].match].punti2 = max;  
               matchs[giocatori[username].match].partite2 = giocatori[username].vinte + giocatori[username].perse + giocatori[username].patte;  
            }   
            //Punti 3 classificato
            if (posizione == 3) {
                matchs[giocatori[username].match].punti3 = max;  
                matchs[giocatori[username].match].partite3 = giocatori[username].vinte + giocatori[username].perse + giocatori[username].patte;  
             }   
         } else {
            //Finito il calcolo di un girono
            if (iGirone < maxGirone) {
                iGirone++;
                max = 0; //Devo calcolare girone successivo
                maxSpareggio = 0;
                posizione = 0;
                nPareggi = 0;
                oldMax = 0;
                oldSpareggio = -1;  //Per evitare problemi se sono tutti a zero
            }

        }
    }

    //Stampo
    for (var index in matchs) {
        max = 999;
        username = '';
        posizione = 0;
        iGirone = matchs[index].girone;
        if (matchs[index].serie == serie) {
            while (max < 1000)
            {
                //Stampo il girone
                if (max == 999) {
                        tabella.append('<tr><td><a style="font-weight: bold" href="https://www.chess.com/tournament/' + matchs[index].nome + '/pairings" target=”_blank”>Girone ' + iGirone + '</a></td><td><img id="imgCheck' + index.toString() +'" class="classifica-check" style="display:none" src="img/check.png"></td><td></td></tr>');
                }

                max = 1000;
                for (var i in giocatori)
                {
                    if ((giocatori[i].serie == serie) && (giocatori[i].girone == iGirone) && (giocatori[i].daStampare) && (giocatori[i].posizioneGruppo < max)) {
                        username = i;
                        max = giocatori[i].posizioneGruppo;
                    }
                }
                if (max < 1000) 
                {
                    giocatori[username].daStampare = false;
                    //Stampo il giocatore
                    stampaEliminatorie(tabella, username);
            
                } 
            } 
        }
    }

}
 
function stampaEliminatorie(tabella, username)
{
    var semaforo = 'giallo.png';
    //Se ho terminato tutte le partite
    if (matchs[giocatori[username].match].partiteTerminate == 6) {
        if (matchs[giocatori[username].match].ultimo == 3 && giocatori[username].posizioneGruppo == 3) semaforo =  'rosso.png';
        if (matchs[giocatori[username].match].ultimo == 3 && giocatori[username].posizioneGruppo < 3) semaforo =  'verde.png';
        if (matchs[giocatori[username].match].ultimo == 2 && giocatori[username].posizioneGruppo == 2) semaforo =  'giallo.png';
        if (matchs[giocatori[username].match].ultimo == 2 && giocatori[username].posizioneGruppo == 1) semaforo =  'verde.png';
        if (matchs[giocatori[username].match].ultimo == 1) semaforo =  'giallo.png';
    } else {
        //Torneo in corso
        if (giocatori[username].punti > 2) semaforo =  'verde.png';
        if (giocatori[username].posizioneGruppo == 1 && matchs[giocatori[username].match].punti3 != undefined && giocatori[username].punti > matchs[giocatori[username].match].punti3 + 4 - matchs[giocatori[username].match].partite3 ) semaforo =  'verde.png';
        if (giocatori[username].posizioneGruppo == 1 && matchs[giocatori[username].match].punti3 == undefined && giocatori[username].punti > matchs[giocatori[username].match].punti2 + 4 - matchs[giocatori[username].match].partite2 ) semaforo =  'verde.png';
        if (giocatori[username].posizioneGruppo == 2 && matchs[giocatori[username].match].punti3 != undefined && giocatori[username].punti > matchs[giocatori[username].match].punti3 + 4 - matchs[giocatori[username].match].partite3 ) semaforo =  'verde.png';
        if (matchs[giocatori[username].match].punti2  != undefined ) {
            if (giocatori[username].posizioneGruppo == 3 && matchs[giocatori[username].match].punti2 > giocatori[username].punti  + 4 - matchs[giocatori[username].match].partite3 ) semaforo =  'rosso.png';
        } else   {
            if (giocatori[username].posizioneGruppo == 3 && matchs[giocatori[username].match].punti1 > giocatori[username].punti  + 4 - matchs[giocatori[username].match].partite3 ) semaforo =  'rosso.png';
        }
    }

    //Se ho due qualificati visualizzo check
    if (semaforo == 'verde.png')
        matchs[giocatori[username].match].nQualificati ++;
    if (matchs[giocatori[username].match].partiteTerminate == 6 || matchs[giocatori[username].match].nQualificati == 2)
        $("#imgCheck"+giocatori[username].match).attr("style","dispaly:block");

    //stampo riga    
    tabella.append('<tr class="classifica-giocatori">' +
        '<td class="classifica-col1"><img class="classifica-avatar" src="img/' + semaforo + '"></td>' +  
        '<td class="giocatori-col1SEP"></td>' + 
        '<td class="classifica-col2">' +
        '    <table><tr>' +
        '        <td>' +
        '        <img class="classifica-avatar" src="' + giocatori[username].avatar + '">' +
        '    </td>' +
        '    <td width=7px></td>' +
        '    <td><div>' +
        '            <a class="username" href="' + giocatori[username].url + '" target=”_blank”> ' + giocatori[username].displayName + '</a>' +
        '        </div> <div>  (' + giocatori[username].elo + ') </div>' +
        '        </td>' +    
        '    </tr></table>' +
        '</td>' +
        '<td class="classifica-col3">' + giocatori[username].punti +'</td>' +
        '<td class="classifica-col4"> <span class="game-win">' +  giocatori[username].vinte + ' W</span> /'+
        '<span class="game-lost">' +  giocatori[username].perse + ' L</span> /' +
        '<span class="game-draw">' +  giocatori[username].patte + ' D</span>' +
        '</td>' +
        '</tr>'
    );
}

function stampaFinale(tabella, finali)
{
    //Devo crearla gqui altrimenti se non sono valorizzati tutti i punteggi il dato viene ripetuto in più tabelle
    var tabellaFinali = [];

     //assegno i punteggi delle finali
     var i = 0
     for (var i in finali) {
         //Preparo tabella per la stampa
         if (finali[i].white.username != '') {
             //Giocatore bianco
             username = finali[i].white.username;
             var semaforo = '';
             if (finali[i].white.result == 'win') semaforo =  'verde.png'
             else if (finali[i].white.result == 'lost') semaforo =  'rosso.png'
             else semaforo =  'giallo.png';   
             semaforo = '<img class="classifica-avatar" src="img/' + semaforo + '">';
             semaforo = '<a href="' + finali[i].url + '" target=”_blank”>' + semaforo +'</a>';
             tabellaFinali[i] = '<td class="classifica-col1"  >' + semaforo + '</td>' +  
             '<td class="giocatori-col1SEP"  ></td>' + 
                     '<td class="classifica-col2-Finale">' +
                     '    <table><tr>' +
                     '        <td>' +
                     '        <img class="classifica-avatar" src="' + giocatori[username].avatar + '">' +
                     '    </td>' +
                     '    <td width=7px></td>' +
                     '    <td><div>' +
                     '            <a class="username" style="border-bottom: 0px" href="' + giocatori[username].url + '" target=”_blank”> ' + giocatori[username].displayName + '</a>' +
                     '        </div> <div style="text-align:left">  (' + giocatori[username].elo + ') </div>' +
                     '        </td>' +    
                     '    </tr></table>' +
                     '</td>';
             //Giocatore nero
             username = finali[i].black.username;
             var semaforo = '';
             if (finali[i].black.result == 'win') semaforo =  'verde.png'
             else if (finali[i].black.result == 'lost') semaforo =  'rosso.png'
             else semaforo =  'giallo.png';   
             semaforo = '<img class="classifica-avatar" src="img/' + semaforo + '">';
             semaforo = '<a href="' + finali[i].url + '" target=”_blank”>' + semaforo +'</a>';
             tabellaFinali[1+i] = '<td class="classifica-col1" style="border-bottom: 1px solid #ececec;">' + semaforo + '</td>' +  
                   '<td class="giocatori-col1SEP" style="border-bottom: 1px solid #ececec;"></td>' + 
                    '<td class="classifica-col2-Finale" style="border-bottom: 1px solid #ececec;">' +
                    '    <table><tr>' +
                    '        <td>' +
                    '        <img class="classifica-avatar" src="' + giocatori[username].avatar + '">' +
                    '    </td>' +
                    '    <td width=7px></td>' +
                    '    <td><div>' +
                    '            <a class="username" href="' + giocatori[username].url + '" target=”_blank”> ' + giocatori[username].displayName + '</a>' +
                    '        </div> <div style="text-align:left">  (' + giocatori[username].elo + ') </div>' +
                    '        </td>' +    
                    '    </tr></table>' +
                    '</td>';
         }
     }        

     //Stampo la tabella
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[81] + '<td></td><td></td><td></td><td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[181] + tabellaFinali[41] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[82] +  tabellaFinali[141] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[182] + '<td></td><td></td><td></td>' +  tabellaFinali[21] + '  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[83] + '<td></td><td></td><td></td>' +  tabellaFinali[121] + '  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[183] + tabellaFinali[42] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[84]  +  tabellaFinali[142] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[184] + '<td></td><td></td><td></td><td></td><td></td>aaa<td></td>' +  tabellaFinali[11] + '   </tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[85] + '<td></td><td></td><td></td><td></td><td></td><td></td>' +  tabellaFinali[111] + '   </tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[185] + tabellaFinali[41] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[86] +  tabellaFinali[141] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[186] + '<td></td><td></td><td></td>' +  tabellaFinali[21] + '  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[87] + '<td></td><td></td><td></td>' +  tabellaFinali[121] + ' <td></td><td></td><td></td> </tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[187] + tabellaFinali[42] + '<td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[88]  +  tabellaFinali[142] + '<td></td><td></td><td></td> <td></td><td></td><td></td> </tr>');
     tabella.append('<tr class="classifica-giocatori">' +  tabellaFinali[188] + '<td></td><td></td><td></td><td></td><td></td><td></td>  <td></td><td></td><td></td></tr>');
}