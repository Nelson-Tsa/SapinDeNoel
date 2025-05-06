function afficherPointeSapin(hauteur) {
    let sapin = "";
    for (let i = 0; i < hauteur; i++) {
        sapin += " ".repeat(hauteur - i - 1) + "*".repeat(2 * i + 1) + "\n";
    }
    console.log(sapin);
  }
  
  afficherPointeSapin(4)