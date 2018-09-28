let personne = {
    nom: "Boury",
    prenom: "Antoine",
    dateNaiss: "22-12-91",
    children: [{
            nom: "Boury",
            prenom: "Antoine Jr.",
            dateNaiss: "22 Décembre 1990",
            children: []
        },
        {
            nom: "Boury",
            prenom: "Victor",
            dateNaiss: "12 April 1995",
            children: []
        },
    ],
    age: function() {
        let anniversaire = new Date(this.dateNaiss);
        return new Number((new Date().getTime() - anniversaire.getTime() / 3153600000).toFixed(0))
    }

}

$("#services a").click(function(e) {
            e.preventDefault()
            if ($(this).text() == "Read More »") {
                jQuery.data(
                    $(this).parent().parent().children("p"), "text",
                    $(this).parent().parent().children("p").text() $(this).parent().parent().children("p").append("okokokokokokokokokokokokokokok") $(this).text("Read Less &raquo;")
                }
                else {
                    $(this).text() == ("Read More »")
                }
            })