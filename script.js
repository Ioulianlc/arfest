// 1. LA BASE DE DONNÉES DES ARTISTES
const baseArtistes = {
    "juice": {
        nom: "Collectif Juice",
        image: "img/lineUp/collectifJuice.png",
        description: "Le Collectif Juice enflamme les scènes bretonnes avec une énergie communicative. Préparez-vous à groover au soleil avec eux !",
        insta: "https://instagram.com/collectifjuice",
        spotify: "https://spotify.com/" // Remplace par le vrai lien
    },
    "coople": {
        nom: "The Coople",
        image: "img/lineUp/The coopple.png",
        description: "Un duo explosif qui mélange sonorités électroniques et voix envoûtantes. À ne pas rater sur scène pour une ambiance magique.",
        insta: "https://instagram.com/thecoople",
        spotify: "#" // Si pas de spotify, on met "#" ou on laisse vide
    },
    "rush": {
        nom: "Rush Avenue",
        image: "img/lineUp/rushAvenue.png",
        description: "Du rock pur jus qui va vous faire sauter partout. Préparez vos meilleures cordes vocales.",
        insta: "https://instagram.com/rushavenue",
        spotify: "https://spotify.com/"
    }
    // Ajoute la suite de tes artistes ici avec la même structure !
};

// 2. LE MOTEUR D'AFFICHAGE DYNAMIQUE
// On s'assure qu'on est bien sur la page d'un artiste en cherchant l'id "artist-name"
if (document.getElementById("artist-name")) {
    
    // On lit l'URL pour trouver le paramètre "?id=..."
    const parametresUrl = new URLSearchParams(window.location.search);
    const identifiant = parametresUrl.get("id"); // Ex: récupère le mot "juice"

    // On vérifie si l'URL contient bien un id et si cet id existe dans notre base
    if (identifiant && baseArtistes[identifiant]) {
        const artiste = baseArtistes[identifiant]; // On isole les données de l'artiste

        // Remplacement du texte
        document.getElementById("artist-name").textContent = artiste.nom;
        document.getElementById("artist-description").textContent = artiste.description;
        
        // Remplacement de l'image
        document.getElementById("artist-img").src = artiste.image;
        document.getElementById("artist-img").alt = "Portrait de " + artiste.nom;
        
        // Remplacement des liens réseaux sociaux
        // GESTION INSTA
        const btnInsta = document.getElementById("artist-insta");
        if(artiste.insta && artiste.insta !== "#") {
            btnInsta.href = artiste.insta;
        } else {
            btnInsta.style.display = "none"; // Cache l'icône s'il n'y a pas d'Insta
        }

        // GESTION SPOTIFY
        const btnSpotify = document.getElementById("artist-spotify");
        if(artiste.spotify && artiste.spotify !== "#") {
            btnSpotify.href = artiste.spotify;
        } else {
            btnSpotify.style.display = "none"; // Cache l'icône s'il n'y a pas de Spotify
        }

    } else {
        // GESTION D'ERREUR : Si l'utilisateur a tapé une URL qui n'existe pas
        document.getElementById("artist-name").textContent = "Artiste introuvable";
        document.getElementById("artist-description").textContent = "Désolé, nous n'avons pas trouvé cet artiste. Retournez à l'accueil pour découvrir le Line-up.";
        document.getElementById("artist-img").style.display = "none";
        document.getElementById("artist-insta").style.display = "none";
        document.getElementById("artist-spotify").style.display = "none";
    }
}