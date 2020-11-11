var app = new Vue({
    el: '#courses',
    data: {
        "courses": [            
            {
                "name": "Anfänger",
                "description": "Ihr erlernt die Bedienung der Nähmaschine von Grund auf (Unterfaden aufspulen, einfädeln, geradeaus nähen,  um die Ecke nähen, Schnittkanten versäubern...). Als fertiges Werkstück entsteht ein gefüttertes Täschchen mit Reißverschluss.",
                "imgSource" : "pics/tasche.png",
                "price" : "€ 87",
                "courseList": [
                    {
                        "title": "AE",
                        "dates": [
                            "2020-10-22",
                            "2020-10-29",
                            "2020-11-05"
                        ]
                    },
                    {
                        "title": "AF",
                        "dates": [
                            "2020-11-09",
                            "2020-11-16",
                            "2020-11-23"
                        ]
                    }
                ]
            },
            {
                "name": "Pulli",
                "description": "Anhand eines gut passenden Pullovers wird ein individueller Schnitt erstellt. Ihr erlernt die Verarbeitung von Sweatshirt-Stoff und Bündchenware. Als fertiges Stück nehmt ihr einen schicken, neuen Pullover bzw. ein Pulli-Kleid mit nach Hause.",
                "imgSource" : "pics/pulli.png",
                "price" : "€ 87",
                "courseList" : [
                    {
                        "title": "PA",
                        "dates": [
                            "2020-10-19",
                            "2020-10-26",
                            "2020-11-02"
                        ]
                    }
                ]
            },
            {
                "name": "Kinderkleidung",
                "description": "Genäht wird mit dem Schnittmuster  \"Jogginganzug Maren\" von Farbenmix.  Dabei wählt ihr selber aus, ob ihr die Jogginghose oder -jacke aus dem Schnittset nähen wollt.",
                "imgSource" : "pics/stoffcollage.png",
                "price" : "€ 87",
                "courseList" : []
            },
            {
                "name": "Taschenspezial mit Kate",
                "description": "Es werden verschiedene Schnittelemente und Schmuckelemente besprochen. Mit diesem Wissen und unter professioneller Anleitung werdet ihr euch zunächst eure eigene Schultertasche designen und anschließend nähen. Dabei werdet ihr lernen, wie ihr feste Stoffe wie Kunstleder, aber auch Reißverschlüsse, Gurtbänder und verschiedene Vliese verarbeitet. Die Kursleiterin Kate hat jahrelang Taschen gewerblich designt und genäht und hat allerhand Insiderwissen.",
                "imgSource" : "pics/taschenspezial.png",
                "price" : "€ 116",
                "courseList" : []
            },
            {
                "name": "Mein Wunschprojekt",
                "description": "Ihr braucht spezielle Hilfe mit einem Projekt oder wollt einfach noch ein paar Extraskills lernen? Dann sind die einzelnen Nähabende genau richtig für euch. Ihr könnt die Abende einzeln buchen und besprecht vorher mit mir, was ihr gern machen möchtet.",
                "imgSource" : "",
                "price" : "€ 29",
                "courseList" : []
            },
        ]
    },
    computed: {
        currentCourseList : function() {
            var list = []  
            this.courses.forEach(function(course){
                if (course.courseList.length > 0)
                    list.push(course)
            })
            return list
          },
    },
    methods: {
        getGermanDateFormat(dateString){
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var date = new Date(dateString);
            return date.toLocaleDateString("de-DE", options)
        }
    }
});