new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRunning: false
  },
  methods: {
    startGame: function() {
      this.gameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function() {
      var maxDamage = 10;
      var minDamage = 3;
      var damage = Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
      this.monsterHealth -= damage;
      console.log('monster remaining health' + ' ' + this.monsterHealth);
      
      if (this.monsterHealth <= 0) {
        alert('You won!');
        this.gameRunning = false;
        return; // return to exit out of the function
      } 
      this.playerHealth -= damage;
      if (this.playerHealth <= 0) {
        alert('You lost!');
        this.gameRunning = false;
        return; // return to exit out of the function
      } 
    },
    specialAttack: function() {

    },
    heal: function() {
      
    },
    giveUp: function() {

    }
  }
})