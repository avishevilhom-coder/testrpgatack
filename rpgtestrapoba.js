
import promptSync from 'prompt-sync';
const prompt = promptSync();

let player = {
    voin:{hp:30, damage: 5, armor: 2, magick: 10, mana: 30, manacost: 10},  //стоит магию 10 маны
    strelok:{hp: 20, damage: 7, armor: 1, magick: 10, mana: 30, manacost: 15} // стоит магия 15 маны
    
};

let enemy = {
    goblin:{hp:15, damage: 4, armor: 2},
    bandit:{hp:20, damage: 3, armor: 2}
};






let keysPlayer = Object.keys(player);
let randomPlayer = keysPlayer[Math.floor(Math.random()* keysPlayer.length)];
let randomStatsPlayer = player[randomPlayer];


let keysEnemy = Object.keys(enemy);
let randomEnemy = keysEnemy[Math.floor(Math.random() * keysEnemy.length)];
let randomStatsEnemy = enemy[randomEnemy];



function fight(){
    console.log("Ты" + randomPlayer);
    console.log("Ты попал в лес твой враг " + randomEnemy + "Что ты будешь делать драться или бежать \n 1- Драться 2- Бежать");
    let choise = prompt();

        if(choise == 1){
            while(randomStatsEnemy.hp > 0 && randomStatsPlayer.hp > 0 ){
            let choiseVibor = prompt ("Что ты будешь делать 1- атаковать или Использовать 2 -магию ")

                if(choiseVibor == 1){

        
                    console.log("Ты выбрал атаковать " +randomEnemy)

                        let attackPlayer = Math.max(0,randomStatsPlayer.damage - randomStatsEnemy.armor)
                    randomStatsEnemy.hp -= attackPlayer
                    console.log("Ты ударил нанес " + attackPlayer + " У врага осталось " + randomStatsEnemy.hp)
                    if(randomStatsEnemy.hp < 0) break;

                        let attackEnemy = Math.max(0 , randomStatsEnemy.damage - randomStatsPlayer.armor)
                    randomStatsPlayer.hp -= attackEnemy;
                    console.log("Враг ударил по вам в ответ и нанес " +attackEnemy +  " У вас отслаось " + randomStatsPlayer.hp )
                    if(randomStatsPlayer.hp < 0) break;
        


                }

                else if (choiseVibor == 2){
                    let cost = randomStatsPlayer.manacost;
                    console.log("Ты выбрал ударить магией по врагу ")
                    if(randomStatsPlayer.mana >= cost){
                         let attackMagich = Math.max(0, randomStatsPlayer.magick - randomStatsEnemy.armor)
                    randomStatsEnemy.hp -= attackMagich;
                    randomStatsPlayer.mana -= cost;

                    console.log("Ты ударил по врагу магией урон ваш " + attackMagich + " Здоровья осталось у врага " +randomStatsEnemy.hp + "У вас осталось маны  " +randomStatsPlayer.mana);
                        if(randomStatsEnemy.hp < 0) break;

                        let attackEnemy = Math.max(0 , randomStatsEnemy.damage - randomStatsPlayer.armor)
                    randomStatsPlayer.hp -= attackEnemy;
                    console.log("Враг ударил по вам в ответ и нанес " +attackEnemy +  " У вас отслаось " + randomStatsPlayer.hp )
                    if(randomStatsPlayer.hp < 0) break;

                    }
                    else {
                        console.log("Недостаточно маны")
                    }

                    
                   
                }

            }

        }if(randomStatsEnemy.hp <= 0){
            console.log("Вы победили");
        }else{
            console.log("Вы проиграли");
        }
}

fight();