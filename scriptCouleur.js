const tailleInput = document.getElementById("taille");
const divSapin = document.getElementById("sapinDiv");
const boutonGenerer = document.getElementById("generer");
const tailleValue = document.getElementById("tailleValue");
const supprimerForet = document.getElementById("supprimerForet");
let tailleChoisie 
const couleurDecoration = ['bleu', 'rouge', 'orange', 'violet','rose'];
// Fonction pour colorer le texte avec les décorations
function colorerTexte(texte) {
  let couleur = couleurDecoration[Math.floor(Math.random() * couleurDecoration.length)];
  let texteColore = '';
  for (let i = 0; i < texte.length; i++) {
    if (texte[i] === '*') {
      texteColore += '<span class="vert">*</span>';
    } else if (texte[i] === 'o') {
      texteColore += `<span class=${couleur}>o</span>`;
    } else if (texte[i] === '+') {
      texteColore += `<span class=${couleur}>+</span>`;
    } else {
      texteColore += texte[i];
    }
  }
  return texteColore;
}



supprimerForet.addEventListener("click", function() {
    divSapin.innerHTML = '';
    sapin = [];
    console.log("La forêt a été supprimée.");
  })

tailleChoisie = tailleInput.value;
tailleValue.innerHTML = tailleChoisie;



    tailleInput.addEventListener("input", function() {
      tailleChoisie = tailleInput.value;
      tailleValue.innerHTML = tailleChoisie;
      console.log(tailleChoisie);
  })

  boutonGenerer.addEventListener("click", function() {
    // divSapin.innerHTML = '';
    afficherSapin(tailleChoisie, tailleChoisie);
  })


  const nouveauSapin = document.createElement("p")
  let sapin = [];

  function afficherSapin(etages, hauteur_etage) {
     divSapin.innerHTML = '';
    let troncPaire = Number(etages)+ 1;
    let espacement = hauteur_etage;
    for (let i = 0; i < etages; i++) {
        afficherEtage(hauteur_etage, i, espacement)
        espacement -= 1;
    }
    for (let j = 0; j < etages ; j++) {
        if(etages%2 == 0) {
            console.log(" ".repeat(etages+hauteur_etage / 2 - 1) +"  "+"#".repeat(etages+1))
            nouveauSapin.innerHTML += " ".repeat(((etages+hauteur_etage )/ 2) - 1) +"  "+"<span class='marron'>#</span>".repeat(etages) + "<br>";
            divSapin.appendChild(nouveauSapin)
           
        }
        else {
            nouveauSapin.innerHTML += " ".repeat(etages+hauteur_etage / 2) +"  "+"<span class='marron'>#</span>".repeat(etages)+ "<br>";
            divSapin.appendChild(nouveauSapin)
            console.log(" ".repeat(etages+hauteur_etage / 2) +"  "+"#".repeat(etages))
        }
    }
    
    for (let i = 0; i < sapin.length; i++) {
        const sapinConteneur = document.createElement('div'); // Conteneur pour un sapin
        sapinConteneur.className = 'sapin'; // Classe pour le style
        sapinConteneur.innerHTML = sapin[i]; // Ajouter le contenu du sapin
        divSapin.appendChild(sapinConteneur); // Ajouter au conteneur principal
      }
      sapin.push(nouveauSapin.innerHTML)
//     for (let i=0 ; i < sapin.length; i++) {
//         nouveauSapin.innerHTML += sapin[i];
//         divSapin.innerHTML += nouveauSapin;
//     }
//     sapin.push(nouveauSapin.innerHTML)
//   nouveauSapin.innerHTML = sapin.join('');
// //   divSapin.appendChild(nouveauSapin)
// //   divSapin.innerHTML = sapin.join('');

 }

 

  function afficherEtage(hauteur, pointe_offset, espacement) {
    // const nouveauSapin = document.createElement("p")
    const decoration = '*o***o***+***o**'
    if (pointe_offset == 0) {
      
        nouveauSapin.innerHTML = " ".repeat(espacement) +" ".repeat(hauteur + 1) + "<span class='jaune'>+</span>" + "<br>";
        divSapin.appendChild(nouveauSapin)
        nouveauSapin.innerHTML += " ".repeat(espacement) +" ".repeat(hauteur) + "<span class='aiguilles'>/|\\</span>" + "<br>";
        divSapin.appendChild(nouveauSapin)
        console.log(" ".repeat(espacement) +" ".repeat(hauteur + 1) + "+")
        console.log(" ".repeat(espacement) +" ".repeat(hauteur) + "/|\\")
        for (let i = 0; i < hauteur; i++) {
          let result = '';
          for (let j = 0; j < i + 1; j++) {
              let choix;
              if (j > 0 && (result[j - 1] === 'O' || result[j - 1] === '+' || result[j - 1] === '~')) {
                  choix = '*';
                  
              } else {
                  choix = decoration[Math.floor(Math.random() * decoration.length)];
              }
              result += choix;
          }
          nouveauSapin.innerHTML += " ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"<span class='aiguilles'>/</span>" + colorerTexte(result) +"<span class='aiguilles'>|</span>" + colorerTexte(result) +"<span class='aiguilles'>\\</span>" + "<br>";
          divSapin.appendChild(nouveauSapin)
            console.log(" ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"/" +result +"|" +result +"\\");
          }
        } else {
          for (let i = 0; i < hauteur; i++) {
             let result = '';
            for (let j = 0; j < i + 1 + pointe_offset; j++) {
                let choix;
                if (j > 0 && (result[j - 1] === 'O' || result[j - 1] === '+' || result[j - 1] === '~' )) {
                    choix = '*';
                    
                } else {
                    choix = decoration[Math.floor(Math.random() * decoration.length)];
                }
                result += choix;
            }
            nouveauSapin.innerHTML += " ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"<span class='aiguilles'>/</span>" + colorerTexte(result) +"<span class='aiguilles'>|</span>" + colorerTexte(result) +"<span class='aiguilles'>\\</span>" + "<br>";
            divSapin.appendChild(nouveauSapin)
                console.log(" ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"/" +result +"|" +result +"\\");
          }
        }
 }


