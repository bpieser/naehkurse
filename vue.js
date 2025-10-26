var app = new Vue({
    el: '#courses',
    data: {
        "courses": [            
            {
                "name": "Anfängerkurs „Täschchen nähen\"",
                "description": "In entspannter Atmosphäre zeige ich euch die Grundlagen in der Bedienung einer Nähmaschine. Als erstes Projekt wird ein gefüttertes Täschchen mit Reißverschluss genäht.",
                "imgSource" : "pics/tasche.png",
                "price" : "€ 120",
                "courseList": [
                    {
                        "title": "Täschchen A",
                        "dates": [
                            "2026-01-06",
                            "2026-01-13",
                            "2026-01-20"
                        ]
                    },
                    {
                        "title": "Täschchen B",
                        "dates": [
                            "2026-04-14",
                            "2026-04-21",
                            "2026-04-28"
                        ]
                    }
                ]
            },
            {
                "name": "Pullover nähen",
                "description": "Ihr bringt einen gutpassenden Lieblings-Pulli mit und ich zeige euch, wie ihr davon den Schnitt abnehmt und ihn gegebenenfalls verändert. Anschließend näht ihr unter meiner Anleitung den Pulli.",
                "imgSource" : "pics/pulli.png",
                "price" : "€ 120",
                "courseList" : [
                    {
                        "title": "Pulli",
                        "dates": [
                            "2026-01-27",
                            "2026-02-03",
                            "2026-02-10"
                        ]
                    }
                ]
            },
            {
                "name": "Anfängerkurs „Leggings nähen\"",
                "description": "In entspannter Atmosphäre zeige ich euch die Grundlagen in der Bedienung einer Nähmaschine. Als erstes Projekt wird eine Leggings genäht. (Keine Angst vor dehnbaren Stoffen. Ich bin bei euch.) Schnitte hierfür bringe ich mit. Eure Größe erfrage ich vorher.",
                "imgSource" : "pics/leggings.png",
                "price" : "€ 120",
                "courseList" : [
                    {
                        "title": "Leggings A",
                        "dates": [
                            "2026-02-17",
                            "2026-02-24",
                            "2026-03-03"
                        ]
                    },
                    {
                        "title": "Leggings B",
                        "dates": [
                            "2026-06-02",
                            "2026-06-09",
                            "2026-06-16"
                        ]
                    }
                ]
            },
            /*{
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
            },*/
            {
                "name": "T-Shirt nähen",
                "description": "Ihr bringt ein gutpassendes Lieblings-T-Shirt mit und ich zeige euch, wie ihr davon den Schnitt abnehmt und ihn gegebenenfalls verändert. Anschließend näht ihr unter meiner Anleitung das T-Shirt.",
                "imgSource" : "pics/tshirt.png",
                "price" : "€ 120",
                "courseList" : [
                    {
                        "title": "T-Shirt A",
                        "dates": [
                            "2026-03-10",
                            "2026-03-17",
                            "2026-03-24"
                        ]
                    },
                    {
                        "title": "T-Shirt B",
                        "dates": [
                            "2026-06-23",
                            "2026-06-30",
                            "2026-07-07"
                        ]
                    }
                ]
            },
            {
                "name": "Rock nähen",
                "description": "Mit Hilfe von einfachen geometrischen Formen zeige ich euch, wie ihr den Schnitt für einen Rock selber konstruiert und ihn anschließend natürlich auch näht. Es wird nach dem Tellerrock-Prinzip gearbeitet. Möglich sind folgende Optionen:",
                "infoList" : [
                    {
                        "name": "Ganzer Tellerrock",
                        "description" : "Der ganze Tellerrock ist vom Schnitt-Prinzip ein kompletter Kreis, schwingt sehr weit und fällt (je nach Stoff mehr oder weniger) in schönen dramatischen Falten. "
                    },
                    {
                        "name": "Halber Tellerrock",
                        "description" : "Der halbe Tellerrock ist vom Schnitt-Prinzip ein Halbkreis, welcher an den geraden Seiten zusammengenäht wird, fällt auch wirklich schön, aber nicht so üppig wie der ganze Tellerrock und verbraucht etwas weniger Stoff. "
                    },
                    {
                        "name": "Viertel Tellerrock",
                        "description" : "Ein viertel Tellerrock ist vom Schnitt-Prinzip ein Viertel eines Kreis´, welches an den geraden Seiten zusammengenäht wird. Er bietet immer noch genügend Bewegungsfreiheit, fällt aber eher gerade in A-Linie und ohne die weichen Falten. Außerdem zeige ich im Rock-Kurs auch, wie man einen nahtverdeckten Reißverschluss einnäht."
                    },
                ],
                "imgSource" : "pics/tellerrock.png",
                "price" : "€ 120",
                "courseList" : [
                    {
                        "title": "Rock",
                        "dates": [
                            "2026-05-05",
                            "2026-05-12",
                            "2026-05-19"
                        ]
                    }
                ]
            },
            /*{
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
            }*/
        ]
    },
    computed: {
        currentCourseList : function() {
            const list = [];
            this.courses.forEach(function(course){
                var i;
                for (i = course.courseList.length - 1; i >= 0; i--){
                    if(course.courseList[i].dates.length > 0){
                        var startDate = new Date(course.courseList[i].dates[0]);
                        startDate.setDate(startDate.getDate() + 1);
                        if (startDate - Date.now() < 0){
                            course.courseList.splice(i, 1);
                        }
                    }
                }
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