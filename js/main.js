'strict mode'
const { createApp } = Vue;

createApp({
    
    data() {
      return {
        noResults: false,
        x: 0,
        start: false,
        jokeNumber: 0,
        firstPartJoke: '',
        secondPartJoke: '',
        now: '',
        searchUser: '',
        newMess: '',
        contact_tab: 0,
        contacts: [
            { 
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novit???',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
      }      
    },
    computed : {
        notFound(){
            this.contacts.forEach((element, i) => {
                this.contacts[i].visible === false ? this.x++ : this.x = 0;
             })
             console.log("x ?? " + this.x);

             return this.x >= 8 ? 'Nessun risultato' :  ''

        },
    },
    

    methods : {
        // ASSOCIO UNA VARIABILE ESTERNA ALL'INDEX DELL'ARRAY CICLATO IN HTML
        chatSelect(i){
            this.contact_tab = i;
            console.log(this.contact_tab);
        },
        // CREO E AGGIUNGO UN NUOVO OGGETTO MESSAGGIO A QUELLO GIA' ESISTENTE
        //PROVENIENTE DALL'INPUT
        addMessage(){
            const objNewmess = {
                date: this.now,
                message: this.newMess,
                status: 'sent',
            };
            this.contacts[this.contact_tab].messages.push(objNewmess);                          
            this.newMess="";
        },
        // CREO E AGGIUNGO UN NUOVO OGGETTO MESSAGGIO A QUELLO GIA' ESISTENTE
        //GENERATO COME RISPOSTA AUTOMATICA
        answerMess(i){
            const objautomess = {
                date: this.now,
                message: this.firstPartJoke,
                status: 'received',
            };
            this.contacts[i].messages.push(objautomess);
        },
        //CREA IL SECONDO MESSAGGIO AUTOMATICO
        punchJoke(n){
            const objpunch = {
                date: this.now,
                message: this.secondPartJoke,
                status: 'received',
            };
            this.contacts[n].messages.push(objpunch);
        },
        //DETTA I TEMPI DELLE DUE RISPOSTE
        autoAnsw(){
            jokeGenerator();
            setTimeout(this.answerMess.bind(null, this.contact_tab), 2000);
            setTimeout(this.punchJoke.bind(null, this.contact_tab), 4000);
        },

        // PARAGONO IL VALORE CHE L'UTENTE HA INSERITO NELL'INPUT CON QUELLI GIA' ESISTENTI
        // E FACCIO COMPARIRE QUANDO LA CONDIZIONE E' SODDISFATTA
        filteredList() {
            this.contacts.forEach((element, i) => {
               this.contacts[i].visible = false;
                if(this.contacts[i].name.toLowerCase().includes(this.searchUser.toLowerCase())) {
                    this.contacts[i].visible = true;
                }
            })
        },
        // TRAMITE L'INDEX CICLATO IN HTML DEI MESSAGGI POSSO RIMUOVERLI CON SPLICE
        delMess(contact, i){
            console.log(i)
            this.contacts[this.contact_tab].messages.splice(i , 1);                      
        },
        // CONVERTE IL FORMAT DI DATE
        formatMessageData(data){
            return moment(data, "DD/MM/YYYY h:mm:ss").fromNow();
        },
        //FUNZIONE RICHIAMATA DALL'HTML PER ENTRARE NEL MAIN
        on(){
            this.start = true;
        },
    },
    
    created(){
        moment.locale('it');
        // TRAMITE IL METODO DATE MI PROCURO LA DATA ATTUALE DAL PC E TRAMITE
        //LA VARIABILE NOW LA MANDO ALLE NUOVE CLASSI OGGETTO
        this.now = new Date().toLocaleString();
        // API RISPOSTE AUTOMATICHE
        jokeGenerator = () => {
            axios.get('https://api.sampleapis.com/jokes/goodJokes')
                .then((response) => {
                    this.jokeNumber = Math.floor(Math.random() * 379)
                    this.firstPartJoke = response.data[this.jokeNumber].setup;
                    this.secondPartJoke = response.data[this.jokeNumber].punchline;
                });
        }
        
    },   
  }).mount('#app')


