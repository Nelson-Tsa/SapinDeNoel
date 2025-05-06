
// Sapin de Noël Test pour comprendre les étapes ------

function afficherPointeSapin(hauteur) {
    console.log(" ".repeat(hauteur + 1) + "+")
    console.log(" ".repeat(hauteur) + "/|\\")
    for (let i = 0; i < hauteur; i++) {
        console.log(" ".repeat(hauteur - i - 1) + "/"+"*".repeat(i+1) + "|" + "*".repeat(i + 1) + "\\")
    }
  }

  function afficherEtoiles(n) {
    console.log(" ".repeat(n - 1) + "*")
    for (let i = 1; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1))
    }
  }
  
  function afficherRectangle(hauteur, largeur) {

    for (let i = 1; i < hauteur ; i++) {
        console.log("  "+"*".repeat(largeur))
    }
  }
  
  function afficherTriangleDroite(n) {
    console.log("\\")
    let brancheDroite = "*\\";
    for (let i=0; i < n; i++) {
    console.log("*".repeat(i) + brancheDroite)
    }
  }

  function afficherTriangleGauche(n) {
    let espace;
    console.log(" ".repeat(n+1) + "/")
    let brancheGauche = "/*";
    for (let i=0; i < n; i++) {
        espace = " ".repeat(n - i);
    console.log(espace + brancheGauche + "*".repeat(i) )
    }
  }



//   Fonction définitive pour afficher le sapin de Noël avec des décorations aléatoires ------

 function afficherEtage(hauteur, pointe_offset, espacement) {
    const decoration = '*o***o***+***~**'
    if (pointe_offset == 0) {
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
                console.log(" ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"/" +result +"|" +result +"\\");
          }
        }
 }


 function afficherSapin(etages, hauteur_etage) {
    let espacement = hauteur_etage;
    for (let i = 0; i < etages; i++) {
        afficherEtage(hauteur_etage, i, espacement)
        espacement -= 1;
    }
    for (let j = 0; j < etages ; j++) {
        if(etages%2 == 0) {
            console.log(" ".repeat(etages+hauteur_etage / 2 -1) +"  "+"#".repeat(etages+1))
        }
        else {
            console.log(" ".repeat(etages+hauteur_etage / 2) +"  "+"#".repeat(etages))
        }
    }
 }

afficherSapin(3, 3)
afficherSapin(1, 1)
afficherSapin(2, 2)
afficherSapin(4, 4)
afficherSapin(5, 5)