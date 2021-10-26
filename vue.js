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
                            "2021-08-30",
                            "2021-09-06",
                            "2021-09-13"
                        ]
                    },
                    {
                        "title": "B",
                        "dates": [
                            "2021-09-23",
                            "2021-09-30",
                            "2021-10-07"
                        ]
                    }
                ]
            },
            {
                "name": "Pulli oder T-Shirt",
                "description": "Anhand eines gut passenden Pullovers wird ein individueller Schnitt erstellt. Ihr erlernt die Verarbeitung von Sweatshirt-Stoff und Bündchenware. Als fertiges Stück nehmt ihr einen schicken, neuen Pullover bzw. ein Pulli-Kleid mit nach Hause.",
                "imgSource" : "pics/pulli.png",
                "price" : "€ 87",
                "courseList" : [
                    {
                        "title": "Pulli",
                        "dates": [
                            "2021-08-12",
                            "2021-08-19",
                            "2021-08-26"
                        ]
                    }
                ]
            },
            {
                "name": "Leggings / Jogginghose",
                "description": "Leggings sind nicht nur ultrabequem, sondern auch wirklich schnell genäht. Deswegen zeige ich euch in einem Mini-Kurs wie ihr Leggings auch mit einer ganz normalen Haushaltsnähmaschine selber machen könnt. Der Schnitt ist in verschiedenen Größen vorhanden.",
                "imgSource" : "pics/leggings.png",
                "price" : "€ 58",
                "courseList" : [
                    {
                        "title": "Leggings",
                        "dates": [
                            "2021-09-20",
                            "2021-09-27"
                        ]
                    }
                ]
            },
            {
                "name": "Baby-/ Kinderkleidung",
                "description": "Kurs für Babykleidung",
                "imgSource" : "pics/baby.png",
                "price" : "€ 87",
                "courseList" : [
                    {
                        "title": "Babykleidung",
                        "dates": [
                            "2020-03-18"
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
                            "2021-09-02",
                            "2021-09-09",
                            "2021-09-16"
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
            }
        ]
    },
    computed: {
        currentCourseList : function() {
            const list = [];
            this.courses.forEach(function(course){
                var i;
                /*for (i = course.courseList.length - 1; i >= 0; i--){
                    if(course.courseList[i].dates.length > 0){
                        var startDate = new Date(course.courseList[i].dates[0]);
                        startDate.setDate(startDate.getDate() + 1);
                        if (startDate - Date.now() < 0){
                            course.courseList.splice(i, 1);
                        }
                    }
                }*/
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