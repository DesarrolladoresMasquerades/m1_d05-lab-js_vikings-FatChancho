// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `${this.name} has received ${damage} points of damage`;
    else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0)
      return `A Saxon has received ${damage} points of damage`;
    else return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSanxon = Math.floor(Math.random() * this.saxonArmy.length);

    const beat = this.saxonArmy[randomSanxon].receiveDamage(
      this.vikingArmy[randomViking].strength
    );

    if (this.saxonArmy[randomSanxon].health <= 0)
      this.saxonArmy.splice(randomSanxon, 1);
    return beat;
  }
  saxonAttack() {
    const randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSanxon = Math.floor(Math.random() * this.saxonArmy.length);

    const beat = this.vikingArmy[randomViking].receiveDamage(
      this.saxonArmy[randomSanxon].strength
    );

    if (this.vikingArmy[randomViking].health <= 0)
      this.vikingArmy.splice(randomViking, 1);

    return beat;
  }
  showStatus() {
    if (this.vikingArmy.length != 0 && this.saxonArmy.length != 0)
      return 'Vikings and Saxons are still in the thick of battle.';
    if (!this.vikingArmy.length)
      return 'Saxons have fought for their lives and survived another day...';
    if (!this.saxonArmy.length)
      return 'Vikings have won the war of the century!';
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
