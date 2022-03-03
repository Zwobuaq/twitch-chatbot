const zwo = require('zwo.js'); // Zwobuaq

const client = new zwo.Client({// Zwobuaq

    options: { debug: true },// Zwobuaq

    connection: {// Zwobuaq

        secure: true,// Zwobuaq

        reconnect: true// Zwobuaq

    },// Zwobuaq

    identity: {// Zwobuaq

        username: "", // Twitch kullanıcı adını yaz buraya

        password: "" // OAuth key (README.md kısmında nasıl alacağınızı açıkladım okuyun aq.)

    },// Zwobuaq

    channels: [""] // Mesaj yazılıcak kanalların adları Örn: ["Kanal1", "Kanal2", "Kanal3"]

});// Zwobuaq

client.connect();// Zwobuaq

client.on("message", (zkanal, zwomsj, message, self) => {// Zwobuaq

    if (self) return; // Kendi gönderdiği mesajları görmezden gelir.

  // Örn:

    if (message== "Biri bunu yazınca") {// Zwobuaq

        client.say(zkanal, "@" + zwomsj["username"] + " Cevap olarak bunu yazar");// Zwobuaq

    }// Zwobuaq

    if (message == "Zwo") {// Zwobuaq

        client.say(zkanal, "@" + zwomsj["username"] + " Zwonuaq");// Zwobuaq

    }// Zwobuaq

    if (message == "Zwo") {// Zwobuaq

        client.say(zkanal, "@" + zwomsj["username"] + " Zwobuaq");// Zwobuaq

    }// Zwobuaq

    if (message == 'Zwo') {// Zwobuaq

        client.say(zkanal, "Zwobuaq");// Zwobuaq

    }// Zwobuaq

    if (message == 'Zwo') {// Zwobuaq

        client.say(zkanal, "Zwobuaq");// Zwobuaq

    }// Zwobuaq

    if (message == 'Zwo') {// Zwobuaq

        client.say(zkanal, "Zwobuaq");// Zwobuaq

    }// Zwobuaq

  // Burdan bişiler yazmaya devam edersin

});// Zwobuaq

