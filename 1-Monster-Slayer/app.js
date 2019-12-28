new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        logs: [],
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.logs = [];
        },
        attack() {
            let damage = this.calcDamage(3, 10);
            this.monsterHealth -= damage;

            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage,
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        calcDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if(this.monsterHealth <= 0) {
                if(confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0) {
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        },
        specialAttack() {
            let damage = this.calcDamage(6, 14);
            this.monsterHealth -= damage;
            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage,
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttacks();
        },
        monsterAttacks() {
            let damage = this.calcDamage(4, 12);
            this.playerHealth -= damage;
            this.checkWin();

            this.logs.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage,
            });
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.logs.unshift({
                isPlayer: true,
                text: 'Player heals for 10',
            });

            this.monsterAttacks();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
    },
})