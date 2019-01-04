new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      var damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      // console.log('monster remaining health' + ' ' + this.monsterHealth);
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      })
      if (this.checkWin()) {
        return;
      } 

      this.monsterAttack();
    },
    specialAttack: function() {
      var damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage
      })
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    monsterAttack: function() {
      var damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      })
    },
    heal: function() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10'
      })
      this.monsterAttack();
    },
    giveUp: function() {
      this.gameRunning = false;
    },
    calculateDamage: function(minDamage, maxDamage) {
      return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
    },
    checkWin: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! Play a new game?')) {
          this.startGame();
        } else  {
          this.gameRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! Play a new game?')) {
          this.startGame();
        } else {
          this.gameRunning = false;
        }
        return true;
      }
      return false;
    }
  }
});