"use strict";
// Ente: bei jedem Klick ein anderer Spruch (nur textContent, kein HTML)
const sprueche = [
  "Hier gibt es nichts zu sehen. Wirklich. Wir haben extra nachgeschaut.",
  "Inhalt nicht gefunden. Die Domain dagegen schon – Glückwunsch!",
  "E-Mail an diese Domain? Haben wir per DNS abbestellt. Sogar mit Nachdruck.",
  "Diese Seite wird von einem Raspberry Pi bewacht. Er macht gerade ein Backup.",
  "Keine Cookies hier. Nicht mal die zum Essen.",
  "Under Construction seit … eigentlich nie. Und das bleibt auch so.",
  "Sie haben das Ende des Internets erreicht. Bitte drehen Sie um.",
  "Diese Seite hat mehr Firewall-Regeln als Inhalt.",
  "Quak. (Übersetzung: Bitte gehen Sie weiter.)",
  "Gehostet auf GitHub, bewacht von einer Ente, gepflegt von niemandem.",
  "Uptime: 100 %. Nützlichkeit: 0 %. Wir nennen das Balance.",
  "Diese Website ist vollständig barrierefrei. Es gibt ja auch nichts, woran man scheitern könnte.",
  "Wir haben die Seite mit KI optimiert. Sie hat empfohlen, nichts draufzuschreiben.",
  "Ladezeit: unter einer Sekunde. Der Trick: weglassen.",
  "Datenschutzerklärung: Wir wissen nichts. Über Sie nicht und über vieles andere auch nicht.",
  "Impressum: eine Ente. Ladungsfähige Anschrift: der Teich.",
  "Sie suchen den Admin? Der dokumentiert gerade, dass er dokumentiert.",
  "Hier könnte Ihre Werbung stehen. Tut sie aber nicht.",
  "Fun Fact: Diese Seite wurde öfter gesichert als besucht.",
  "Es ist nicht kaputt. Es ist minimalistisch.",
  "Wenn Sie lange genug auf diese Seite starren, starrt die Ente zurück.",
  "Version 1.0. Changelog: Ente hinzugefügt.",
  "Nächstes Update: wenn die Ente es sagt.",
  "Sie haben jetzt offiziell mehr Zeit hier verbracht als der Webdesigner.",
  "Dies ist keine Website. Dies ist ein Zustand.",
  "Wir bitten um Ihr Verständnis. Wofür, wissen wir selbst nicht genau.",
  "Diese Seite wurde ohne Tierversuche erstellt. Die Ente war freiwillig hier.",
  "Bitte nicht füttern. Weder die Ente noch den Server.",
  "Fehler 418: Ich bin eine Teekanne. Nein, Moment – eine Ente."
];
let i = 0;
const el = document.getElementById("spruch");
document.getElementById("ente").addEventListener("click", () => {
  i = (i + 1 + Math.floor(Math.random() * (sprueche.length - 1))) % sprueche.length;
  el.classList.add("fade");
  setTimeout(() => { el.textContent = sprueche[i]; el.classList.remove("fade"); }, 200);
});
// Nicht in fremde Seiten einbetten lassen (frame-ancestors geht per meta nicht)
if (window.top !== window.self) { window.top.location = window.self.location.href; }
