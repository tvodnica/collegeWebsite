$(document).ready(function () {
  $("#rezultati-tablica").hide();

  var listaKolegija = [
    { label: "Autentikacijski sustavi i baze podataka", value: 16 },
    { label: "Engleski jezik", value: 1 },
    { label: "Građa računala", value: 9 },
    { label: "ICT alati u projektnom menadžmentu", value: 39 },
    { label: "Interoperabilnost informacijskih sustava", value: 35 },
    { label: "Izrada aplikacija za mobilne uredžaje", value: 32 },
    { label: "Izrada završnog projekta/Praksa", value: 36 },
    { label: "Java Web Programiranje", value: 40 },
    { label: "Kineziološka kultura", value: 2 },
    { label: "Kineziološka kultura 2", value: 10 },
    { label: "Matematika 1", value: 3 },
    { label: "Matematika 2", value: 11 },
    { label: "Objektno orijentirano programiranje", value: 17 },
    {
      label: "Objektno orijentirano programiranje - praktikum u .NET okolini",
      value: 22,
    },
    { label: "Oblikovanje baza podataka", value: 18 },
    {
      label: "Oblikovanje i izrada cjelovitog aplikativnog rješenja",
      value: 37,
    },
    { label: "Operacijski sustavi", value: 12 },
    { label: "Organizacija i managemenet", value: 28 },
    { label: "Osnove digitalne elektronike", value: 4 },
    { label: "Osnove poslovne ekonomije", value: 13 },
    { label: "Osnove poslovnog komuniciranja", value: 19 },
    { label: "Poslovni informacijski sustavi", value: 38 },
    { label: "Pristup podacima iz programskog koda", value: 29 },
    { label: "Programiranje", value: 5 },
    { label: "Programiranje u Javi 1", value: 23 },
    { label: "Programiranje u Javi 2", value: 33 },
    { label: "Programsko inženjerstvo", value: 30 },
    { label: "Projektni menadžment", value: 24 },
    { label: "Projektni razvoj aplikacija", value: 25 },
    { label: "Računalna podrška uredskom poslovanju", value: 6 },
    { label: "Razvoj web aplikacija", value: 26 },
    { label: "Sigurnost informacijskih sustava 1", value: 27 },
    { label: "Standardi u primjeni internetske tehnologije", value: 20 },
    { label: "Strukture podataka i algoritmi", value: 14 },
    { label: "Sustavi potpore odlučivanju", value: 34 },
    { label: "Upravljanje informacijskim sustavima", value: 31 },
    { label: "Uvod u baze podataka", value: 15 },
    { label: "Uvod u računalne mreže", value: 7 },
    { label: "Vjerojatnost i statistika", value: 21 },
  ];

  var maxID = 0;
  function getTemplateRow() {
    var x = document.getElementById("idea").cloneNode(true);
    x.id = "";
    x.style.display = "";
    x.innerHTML = x.innerHTML.replace(/{id}/, ++maxID);
    return x;
  }
  function addRow() {
    var t = document.getElementById("rezultati-tablica");
    var rows = t.getElementsByTagName("tr");
    var r = rows[rows.length - 1];
    r.parentNode.insertBefore(getTemplateRow(), r);
  }

  $("#trazilica-kolegiji").autocomplete({
    source: listaKolegija,
    focus: (e, ui) => {
      e.preventDefault();
      $("#trazilica-kolegiji").val(ui.item.label);
    },
    select: (e, ui) => {
      e.preventDefault();
      $("#trazilica-kolegiji").val(ui.item.label);
      
      $("#rezultati-tablica").show();
      addRow();
      detaljiKolegija(ui.item.value);
    },
  });

  $(".tipka-obrisi").click(function () {});

  const detaljiKolegija = (id) => {
    http: $.ajax({
      url: "http://www.fulek.com/VUA/supit/GetKolegij",
      data: { id: id },
      success: (kolegij) => {
        $("#tablica-kolegij").text(kolegij.kolegij);
        $("#tablica-ects").text(kolegij.ects);
        $("#tablica-sati").text(kolegij.sati);
        $("#tablica-p").text(kolegij.predavanja);
        $("#tablica-v").text(kolegij.vjezbe);
        $("#tablica-tip").text(kolegij.tip);
      },
    });
  };
});
