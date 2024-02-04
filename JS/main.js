class coffe {
    constructor() {
      this.espresso = false;
      this.milkFoam = false;
      this.steamedMilk = false;
      this.whippedCream = false;
      this.chocolateSyrup = false;
    }
  
    setEspresso() {
      this.espresso = true;
      return this;
    }
  
    setMilkFoam() {
      this.milkFoam = true;
      return this;
    }
  
    setSteamedMilk() {
      this.steamedMilk = true;
      return this;
    }
  
    setWhippedCream() {
      this.whippedCream = true;
      return this;
    }
  
    setChocolateSyrup() {
      this.chocolateSyrup = true;
      return this;
    }
    build() {
      return {
        espresso: this.espresso,
        milkFoam: this.milkFoam,
        steamedMilk: this.steamedMilk,
        whippedCream: this.whippedCream,
        chocolateSyrup: this.chocolateSyrup,
      };
    }
  }
  
  const cafe = new coffe().build();
  
  const mocha = new coffe()
    .setEspresso()
    .setChocolateSyrup()
    .setSteamedMilk()
    .setWhippedCream()
    .build();
  
  const expresso = new coffe().setEspresso().build();
  
  const espressoMacchiato = new coffe().setEspresso().setMilkFoam().build();
  
  const latteMacchiato = new coffe().setSteamedMilk().setEspresso().build();
  
  const caffeLatte = new coffe()
    .setEspresso()
    .setSteamedMilk()
    .setMilkFoam()
    .build();
  
  console.log(mocha);
  console.log(expresso);
  console.log(espressoMacchiato);
  console.log(latteMacchiato);
  console.log(caffeLatte);
  