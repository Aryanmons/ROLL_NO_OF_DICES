function rolldice() {
    let noofdice = document.getElementById("noofdice").value;
    let diceimage = document.getElementById("diceimage");
    let diceans = document.getElementById("diceans");
    let values = [];
    let images = [];
  
    for (let i = 0; i < noofdice; i++) {
      let value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="Dice_Images/${value}.png" alt="Dice ${value}">`);
    }
  
    diceans.textContent = `Dice: ${values.join(', ')}`;
    diceimage.innerHTML = images.join('');
  }
  