window.onload = function(){
    var objectif  = document.getElementById("slidetitre");
    var site = document.getElementById("slidetitre1");
    var social = document.getElementById("slidetitre2");
    var concours = document.getElementById("slidetitre3");
    var budget = document.getElementById("slidetitre4");
    var para = document.getElementById("txt6");

    objectif.onclick = function(){
        para.classList.remove("opacity_on");
        para.classList.add("opacity_on");
        para.innerHTML = "";
            para.innerHTML = "L’objectif de notre campagne est d’amener <br>un maximum de vente de pérenniser la clientèle.<br><br><br> Plus précisément nous attendons de cette campagne un <span class='gras'>taux de conversion magasins élevé </span>mais surtout l’acquisition d’une <span class='gras'>nouvelle clientèle</span>. <br><br>Notre campagne se base sur <span class='gras'>1 mois</span>, et en deux parties, la première semaine se fera exclusivement autour de la réalité augmentée dans le centre commercial de Beaugrenelle, puis la campagne s’ouvrira sur toute la France (Lyon, Lille, Toulouse , Marseille) autour d’un site événementiel."
    };

    site.onclick = function(){
        para.classList.remove("opacity_on");
        para.classList.add("opacity_on");
        para.innerHTML = "";
            para.innerHTML = "<span class='gras'>Un site éphémère dédié à l’évènement</span>,<br> et sur lequel l’utilisateur peut <br><span class='gras'>héberger une photo</span> et <br><span class='gras'>essayer des modèles de baskets</span>,<br> dans le même esprit que les bornes sur site.<br><br> Il peut obtenir la <span class='gras'>référence des chaussures</span> qui lui plaisent et les commander en ligne ou retrouve en magasin grâce à la référence. Nous ferons la promotion du site avec du <span class='gras'>référencement Adwords</span>, ainsi qu’une <span class='gras'>campagne Display.</span>"
    };

    social.onclick = function(){
        para.classList.remove("opacity_on");
        para.classList.add("opacity_on");
        para.innerHTML = "";
            para.innerHTML = "Nous avons décidé de concentrer notre campagne<br> sur <span class='gras'>Twitter</span> et sur <span class='gras'>Facebook</span>, s’agissant des <br>réseaux où Nike est le plus actif.<br> C’est également sur ces canaux que se situe<br> notre cœur de cible, les <span class='gras'>18-35 ans.</span> <br><br><br>Nous débuterons la campagne social média en ciblant seulement Beaugrenelle pendant 1 semaine, puis nous l’élagirons à la France entière, notamment les villes de <span class='gras'>Lyon, Marseille, Lille, et Toulouse.</span>"
    };

    concours.onclick = function(){
        para.classList.remove("opacity_on");
        para.classList.add("opacity_on");
        para.innerHTML = "";
            para.innerHTML = "Les internautes qui partageront leur photo<br> avec le <span class='gras'>#JustTryIt</span> bénéficieront d’une <span class='gras'>remise de 10%</span> <br>au Nike Store de Beaugrenelle, <br>et participeront donc à un <span class='gras'>jeu concours</span> qui<br> leur permettra de <span class='gras'>gagner une paire 100% personnalisée</span><br> avec nos créateurs, dans nos locaux, situés à Paris.<br><br> La photo qui obtiendra le plus de likes remportera le prix. Nous comptons sur le concours pour créer une <span class='gras'>viralité</span> importante autour de notre événement à Beaugrenelle."
    };

    budget.onclick = function(){
        para.classList.remove("opacity_on");
        para.classList.add("opacity_on");
        para.innerHTML = "";
            para.innerHTML = "<span class='gras'>ESTIMATION DES COÛTS</span><br>- Location équipement : 40 950 € <br>- Loyer JCDécaux : 4 187 €<br>- Communication (Social Média) : 50 000 €<br>- Hôte : 79 €<br>- Coût Total HT : 95 216 €<br>- Coût Total TTC : 114 259 €<br><span class='gras'>ESTIMATION DU CHIFFRE D'AFFAIRES</span><br>- Prévision influence : 1350 personnes<br>- Panier Moyen : 90 €<br>- Estimation CA : 121 500 €<br><br>Nous estimons la marge à <span class='gras'>7 241 €</span>, sans compter le lifetime value."
    };

};