let EmptyShip = new Ship(3, 5);

function Ship (draft, crew){
    this.draft = draft;
    this.crew = crew;
}


Ship.prototype.hasil = function() {
    kapal = this.draft + (this.crew * 1.5);
    if(kapal > 20) {
      return 'lebih banyak muatan orangnya';
    } 
    else {
      return 'Banyak nih muatan kapalnya';
    }
}

console.log(EmptyShip.hasil())