function afficherPointeSapin(hauteur) {
    console.log(" ".repeat(hauteur + 1) + "+")
    console.log(" ".repeat(hauteur) + "/|\\")
    for (let i = 0; i < hauteur; i++) {
        console.log(" ".repeat(hauteur - i - 1) + "/"+"*".repeat(i+1) + "|" + "*".repeat(i + 1) + "\\")
    }
  }
  
//   afficherPointeSapin(4)


  function afficherEtoiles(n) {
    console.log(" ".repeat(n - 1) + "*")
    for (let i = 1; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1))
    }
  }
  
//   afficherEtoiles(5)

  function afficherRectangle(hauteur, largeur) {

    for (let i = 1; i < hauteur ; i++) {
        console.log("  "+"*".repeat(largeur))
    }
  }
  
//   afficherRectangle(5, 5)


  function afficherTriangleDroite(n) {
    console.log("\\")
    let brancheDroite = "*\\";
    for (let i=0; i < n; i++) {
    console.log("*".repeat(i) + brancheDroite)
    }
  }
  
//   afficherTriangleDroite(5)


  function afficherTriangleGauche(n) {
    let espace;
    console.log(" ".repeat(n+1) + "/")
    let brancheGauche = "/*";
    for (let i=0; i < n; i++) {
        espace = " ".repeat(n - i);
    console.log(espace + brancheGauche + "*".repeat(i) )
    }
  }



  function afficherEtage2(hauteur, pointe_offset) {
   if (pointe_offset == 0) {
    console.log(" ".repeat(hauteur + 1) + "+")
    console.log(" ".repeat(hauteur) + "/|\\")
    for (let i = 0; i < hauteur; i++) {
        console.log(" ".repeat(hauteur - i - 1) + "/"+"*".repeat(i+1) + "|" + "*".repeat(i + 1) + "\\")
    }
    } else {
        for (let i = 0; i < hauteur; i++) {
            console.log(" ".repeat(hauteur - i - 1) + "/"+"*".repeat(i+1+pointe_offset) + "|" + "*".repeat(i + 1 + pointe_offset) + "\\")
        }
    }
    // comment sauter les premières lignes d'étoiles pour ne commencer qu'à la ligne numero 'pointe_offset' ?
 }

//  afficherEtage(3, 0) // les 3 premières lignes
//  afficherEtage(3, 1) // affiche à partir de la deuxième ligne, et continue sur 3 lignes
//  afficherEtage(3, 2) // affiche à partie de la troisième lige, et continue sur 3 lignes


 function afficherEtage1(hauteur, pointe_offset, espacement) {
    const decoration = '*O+~❄️'
    let result = "";
    
    if (pointe_offset == 0) {
        console.log(" ".repeat(espacement) +" ".repeat(hauteur + 1) + "+")
        console.log(" ".repeat(espacement) +" ".repeat(hauteur) + "/|\\")
        for (let i = 0; i < hauteur; i++) {
            console.log( " ".repeat(espacement) + " ".repeat(hauteur - i - 1) + "/"+ "*".repeat(i+1) + "|" + "*".repeat(i + 1) + "\\")
        }
        } else {
            for (let i = 0; i < hauteur; i++) {
                console.log(" ".repeat(espacement) + " ".repeat(hauteur - i - 1) + "/"+"*".repeat(i+1+pointe_offset) + "|" + "*".repeat(i + 1 + pointe_offset) + "\\")
            }
        }
 }
 
//-------TEST DECO ------------------

 function afficherEtage(hauteur, pointe_offset, espacement) {
    const decoration = '*o***o***+***~**'
    // let result = "";
    
    if (pointe_offset == 0) {
        console.log(" ".repeat(espacement) +" ".repeat(hauteur + 1) + "+")
        console.log(" ".repeat(espacement) +" ".repeat(hauteur) + "/|\\")
        for (let i = 0; i < hauteur; i++) {
          // Générer une séquence pour la ligne
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
            // if (result === "*"){
            //     result = decoration.charAt(Math.floor(Math.random() * decoration.length));
            // } else {
            //     result = "*";
            // }
            // result = decoration.charAt(Math.floor(Math.random() * decoration.length));
            // console.log( " ".repeat(espacement) + " ".repeat(hauteur - i - 1) + "/"+ "*".repeat(i+1) + "|" + "*".repeat(i + 1) + "\\")
            // console.log( " ".repeat(espacement) + " ".repeat(hauteur - i - 1) + "/"+ result.repeat(i+1) + "|" + result.repeat(i + 1) + "\\")
            console.log(" ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"/" +result +"|" +result +"\\");
          }
        } else {
          for (let i = 0; i < hauteur; i++) {
            // Générer une séquence pour la ligne
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
                // result = decoration.charAt(Math.floor(Math.random() * decoration.length));
                // console.log(" ".repeat(espacement) + " ".repeat(hauteur - i - 1) + "/"+result.repeat(i+1+pointe_offset) + "|" + result.repeat(i + 1 + pointe_offset) + "\\")
                console.log(" ".repeat(espacement) +" ".repeat(hauteur - i - 1) +"/" +result +"|" +result +"\\");
                // console.log(" ".repeat(espacement) + " ".repeat(hauteur - i - 1) + "/"+"*".repeat(i+1+pointe_offset) + "|" + "*".repeat(i + 1 + pointe_offset) + "\\")
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