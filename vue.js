var courses = new Vue({
    el: '#courseTableBody',
    data: {
        "courses": [
            {
                "name": "Wunschprojekt",
                "date": "28. September"
            },
            {
                "name": "Wunschprojekt",
                "date": "01. Oktober"
            },
            {
                "name": "Wunschprojekt",
                "date": "08. Oktober"
            },
            {
                "name": "Pulli nähen",
                "date": "19., 26. Oktober und 02. November"
            },
            {
                "name": "Kinderkleidung",
                "date": "12., 19. und 26. November"
            },
            {
                "name": "Anfängernähkurs AE",
                "date": "22., 29. Oktober. und 05. November"
            },
            {
                "name": "Anfängernähkurs AF",
                "date": "09., 16. und 23. November"
            }
        ]
    }
});

var infos = new Vue({
    el: '#courseInfos',
    data: {
        "infos": [
            {
                "name": "Anfängernähkurs",
                "description": "Ihr erlernt die Bedienung der Nähmaschine von Grund auf (Unterfaden aufspulen, einfädeln, geradeaus nähen,  um die Ecke nähen, Schnittkanten versäubern...). Als fertiges Werkstück entsteht ein gefüttertes Täschchen mit Reißverschluss.",
                "imgSource" : "pics/tasche.png",
                "price" : "€ 87"
            },
            {
                "name": "Taschenspezial mit Kate",
                "description": "Es werden verschiedene Schnittelemente und Schmuckelemente besprochen. Mit diesem Wissen und unter professioneller Anleitung werdet ihr euch zunächst eure eigene Schultertasche designen und anschließend nähen. Dabei werdet ihr lernen, wie ihr feste Stoffe wie Kunstleder, aber auch Reißverschlüsse, Gurtbänder und verschiedene Vliese verarbeitet. Die Kursleiterin Kate hat jahrelang Taschen gewerblich designt und genäht und hat allerhand Insiderwissen.",
                "imgSource" : "pics/taschenspezial.png",
                "price" : "€ 116"
            },
            {
                "name": "Pulli nähen",
                "description": "Anhand eines gut passenden Pullovers wird ein individueller Schnitt erstellt. Ihr erlernt die Verarbeitung von Sweatshirt-Stoff und Bündchenware. Als fertiges Stück nehmt ihr einen schicken, neuen Pullover bzw. ein Pulli-Kleid mit nach Hause.",
                "imgSource" : "pics/pulli.png",
                "price" : "€ 87"
            },
            {
                "name": "Kinderkleidung nähen",
                "description": "Genäht wird mit dem Schnittmuster  \"Jogginganzug Maren\" von Farbenmix.  Dabei wählt ihr selber aus, ob ihr die Jogginghose oder -jacke aus dem Schnittset nähen wollt.",
                "imgSource" : "pics/stoffcollage.png",
                "price" : "€ 87"
            },
            {
                "name": "Mein Wunschprojekt",
                "description": "Ihr braucht spezielle Hilfe mit einem Projekt oder wollt einfach noch ein paar Extraskills lernen? Dann sind die einzelnen Nähabende genau richtig für euch. Ihr könnt die Abende einzeln buchen und besprecht vorher mit mir, was ihr gern machen möchtet.",
                "imgSource" : "",
                "price" : "€ 29"
            }
        ]
    }
});