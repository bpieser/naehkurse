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
                        "title": "A",
                        "dates": [
                            "2021-01-11",
                            "2021-01-18",
                            "2021-01-25"
                        ]
                    },
                    {
                        "title": "B",
                        "dates": [
                            "2021-02-08",
                            "2021-02-15",
                            "2021-02-22"
                        ]
                    },
                    {
                        "title": "C",
                        "dates": [
                            "2021-02-10",
                            "2021-02-17",
                            "2021-02-24"
                        ]
                    },
                    {
                        "title": "D",
                        "dates": [
                            "2021-03-01",
                            "2021-03-08",
                            "2021-03-15"
                        ]
                    },
                    {
                        "title": "E",
                        "dates": [
                            "2021-04-14",
                            "2021-04-21",
                            "2021-04-28"
                        ]
                    },
                    {
                        "title": "F",
                        "dates": [
                            "2021-04-15",
                            "2021-04-22",
                            "2021-04-29"
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
                        "title": "Pulli",
                        "dates": [
                            "2021-01-14",
                            "2021-01-21",
                            "2021-01-28"
                        ]
                    }
                ]
            },
            {
                "name": "Leggings",
                "description": "Leggings sind nicht nur ultrabequem, sondern auch wirklich schnell genäht. Deswegen zeige ich euch in einem Mini-Kurs wie ihr Leggings auch mit einer ganz normalen Haushaltsnähmaschine selber machen könnt. Der Schnitt ist in verschiedenen Größen vorhanden.",
                "imgSource" : "pics/leggings.png",
                "price" : "€ 56",
                "courseList" : [
                    {
                        "title": "Leggings",
                        "dates": [
                            "2021-02-11",
                            "2021-02-18"
                        ]
                    }
                ]
            },
            {
                "name": "A-Linien-Rock",
                "description": "Lernt in diesem Kurs, wie ihr einen A-Linien-Rock näht. Die Schnitte sind in verschiedenen Größen vorhanden und bei Bedarf zeig ich euch, wie ihr individuelle Anpassungen vornehmen könnt. Ganz nebenbei lernt ihr, wie ihr schöne Abnäher näht und wie nahtverdeckte Reißverschlüsse verarbeitet werden.",
                "imgSource" : "pics/arock.png",
                "price" : "€ 87",
                "courseList" : [
                    {
                        "title": "Rock",
                        "dates": [
                            "2021-02-25",
                            "2021-03-04",
                            "2021-03-11"
                        ]
                    }
                ]
            },
            {
                "name": "Weekender Tasche",
                "description": "Es wird die Tasche “Pop the Corks” aus dem CUT-Magazin Nr12 genäht. Ihr erlernt die Verarbeitung von festen Materialien wie Canvas, Kork oder (Kunst-)Leder sowie von Gurtband, Karabinern, Reißverschlüssen und so weiter. Es handelt sich um eine größere Tasche mit kleinem Innenfach.",
                "imgSource" : "pics/weekender.png",
                "price" : "€ 112",
                "courseList" : []
            },
            {
                "name": "Mein Wunschprojekt",
                "description": "Ihr braucht spezielle Hilfe mit einem Projekt oder wollt einfach noch ein paar Extraskills lernen? Dann sind die einzelnen Nähabende genau richtig für euch. Ihr könnt die Abende einzeln buchen und besprecht vorher mit mir, was ihr gern machen möchtet.",
                "imgSource" : "pics/alleProdukte.png",
                "price" : "€ 29",
                "courseList" : [
                    {
                        "title": "Wunschprojekt",
                        "dates": [
                            "2021-03-18"
                        ]
                    }
                ]
            },
            {
                "name": "T-Shirt",
                "description": "Anhand eines gut passenden T-Shirts wird ein individueller Schnitt erstellt. Ihr erlernt die Verarbeitung von Jersey und Bündchenware. Als fertiges Stück nehmt Ihr ein schickes, neues T-Shirt oder Shirt-Kleid mit nach Hause.",
                "imgSource" : "pics/tshirt.png",
                "price" : "€ 87",
                "courseList" : [
                    {
                        "title": "Shirt",
                        "dates": [
                            "2021-04-12",
                            "2021-04-19",
                            "2021-04-26"
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
            }
        ]
    },
    computed: {
        currentCourseList : function() {
            const list = [];
            this.courses.forEach(function(course){
                
                if (course.courseList.length > 0)
                    list.push(course);
            })
            return list;
          },
    },
    methods: {
        getDatesFormat(dates){
            let text = "";
            for (let i = 0; i < dates.length; i++) {
                text += this.getGermanDateFormat(dates[i]);
                if (i < dates.length - 1){
                    text += ", ";
                }

            }
            return text;
        },

        getGermanDateFormat(dateString){
            const date = new Date(dateString);
            const month = new Intl.DateTimeFormat('de-DE', { month: 'short' }).format(date);
            const day = new Intl.DateTimeFormat('de-DE', { day: '2-digit' }).format(date);
            return day.concat(". ", month);
        }
    }
});