/*

const fs = require("fs");


fs.readFile("new.txt" , function(error,data){
if(error){
    return console.log(error);
}
console.log(data.toString());
});
console.log("Робит");


const data = fs.readFileSync("new.txt");
console.log(data.toString());
console.log("Робит");



let player = {
    class: "Воин",
    name: "Санек",
    lvl: 1,
    hp: 100,
    exp: 0,
    damage: 25,
    rost: 1.79
};
const data = `Имя:${player.name}\nКласс:${player.class}\nЛевол:${player.lvl}\nЗдоровье:${player.hp}\nОпыт:${player.exp}\nУрон:${player.damage}`;


fs.writeFile("new.txt", data, function(error){
    if(error){
        return console.log("Ошибка");
    }
    console.log("Сохранение прошло успешно");
    const read = fs.readFileSync("new.txt");
    console.log(read.toString());
   
});


/*
function saveProgress(){
fs.writeFile("new.txt" , data , function(error){
    if(error){
        console.log("Не получилось сохранить");
    }
    console.log("Сохранение прошло успешно");
    const read = fs.readFileSync("new.txt");
console.log(read.toString());
});
}

saveProgress();

*/

  
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });




/*
const ps = require("prompt-sync");
const prompt = ps();
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

/*
function ShowPLayer(){
    console.log("Ура ты создал персонажа")
    console.log(`Имя ${player.name}`);
    console.log(`Город ${player.city}`);
    console.log(`Класс ${player.className}`);
    console.log(`Лвл ${player.lvl}`);
    console.log(`Здоровье ${player.hp}`);
    console.log(`Мана ${player.mana}`);
    console.log(`Оружие ${player.weapon}`);
}

let player =  {
    name: "",
    city: "",
    class: "",
    lvl: 1,
    className: "",
    hp: 0,
    damage: 0,
    armor: 0,           
    mana: 0,
    weapon: "",
    lvl: 1


};

let enemyGoblin = {
        enemyName: "Гоблин",
        enemyClass: "Мечник",
        enemyHp: 20,
        enemyLvl: 1,
        enemyWeapon: "Одноручный мечь",
        enemyExp: 10,
    }


function Nachalo() {
    console.log ("Добро пожаловать в мир РПГташкент");
    rl.question("Как же тебя зовут путник? ",function(ans){
        player.name = ans;
        Gorod();
    });
};
function Gorod (){
    console.log("Приятно познакомится "+ player.name);
    rl.question("Откуда ты к нам прибыл дорогой "+ player.name +"\n",function(ans){
    player.city = ans;
    KakoyClass();
    });
    
}


function KakoyClass(){
    console.log("Еще раз приятно познакомится " +player.name +" c "+player.city);
    console.log("Кем же ты хочешь тут быть дорогой "+player.name +"\n1.Лучник\n2.Магом\n3.Воином")
    console.log("У каждого класса есть свои плюшки");
    console.log("Лучник: 70 здоровья, 30 урона ,50 маны, 3 брони");
    console.log("Маг: 50 здоровья, 45 урона ,100 маны, 2 брони");
    console.log("Воин: 125 здоровья, 25 урона ,30 маны, 8 брони");
    rl.question("Твой выбор дорогой друг ",function(ans){
        player.class = ans;
        const choise = parseInt(ans,10);
        player.class = choise;
        switch(choise){
            case 1:
                console.log("Хороший выбор дорогой друг будешь самым лучшим стрелком");
                    player.className = "Лучник",
                    player.hp = 70,
                    player.damage= 30,
                    player.armor = 3,           
                    player.mana = 50,
                    player.weapon = "Лук",
                    player.lvl = 1
                break;
            case 2:
                console.log("Хороший выбор дорогой друг будешь самым лучшим магом");
                    player.className = "Маг",
                    player.hp = 50,
                    player.damage = 45,
                    player.armor = 2,
                    player.mana = 100,
                    player.weapon = "ЖезолАлександра 1",
                    player.lvl = 1
                break;
            case 3:
                console.log("Хороший выбор дорогой друг будешь самым лучшим Воином")
                    player.className = "Воин",
                    player.hp =125,
                    player.damage = 25,
                    player.armor = 8,
                    player.mana = 30,
                    player.weapon = "Секира",
                    player.lvl = 1
                break;
            default:
                console.log("Введите от 1 до 3");
                break;
        }
        ShowPLayer();
        Nextstap();
    });
}

function saveprogres(){
   const dataString = `Имя ${player.name}Город ${player.city} Класс ${player.className} Здоровье ${player.hp} Урон ${player.damage} Броня ${player.armor} Мана ${player.mana} Оружие ${player.weapon} Левол ${player.lvl}`

    fs.writeFile("saverpg.txt", JSON.stringify(dataString),function(error){
        if(error){
            console.log("Ошибка");
            return;
        }
        console.log("Сохранение прошло успешно")
        const read = fs.readFileSync("saverpg.txt");
        console.log("Данные в файле ",read.toString());
        Nextstap();
    });
    
}

    




function Nextstap(){
    console.log("Хоршо Чем тут будешь заниматься");
    rl.question ("Можешь отправиться в лес , в горы , или хочешь сохраниться\n1.Лес\n2.Горы\n3.Сохранение ",(Nextstapchar)=>{
        const choise = Number(Nextstapchar);
    switch(choise){
        case 1: 
        console.log("Хорошо вот эта тропинка ведет в лес удачи тебе ",player.className);
        console.log("Ты попал в лес на пути встал "+ enemyGoblin.enemyName );
        console.log("У тебя нет другого выхода как сразиться с ним в битве");
        break;
        case 2:
            console.log("Хорошо вот эта тропинка ведет в горы удачи тебе ",player.className);
            break;
        case 3: 
        saveprogres();
            break;
        default:
            console.log("От 1 до 3");
            break;
    }
    });
}
Nachalo();

*/

function shoowEnemy(){
    console.log(`Здоровье врага ${enemy.goblin.hp}`);
    console.log(`Урон ${enemy.goblin.damage}`);
    console.log(`Броня ${enemy.goblin.armor}`);
    console.log(`Награда ${enemy.goblin.loot}`);
}
let player = {
    voin:{
    hp: 50,
    damage: 10,
    armor: 2
    }
};

let enemy = {
    goblin:{
        hp: 30,
        damage: 5,
        armor: 2,
        loot: ["10 монетов , 1 зелье здоровья "]
    }
}

console.log("Битва началась")
shoowEnemy();
while(player.voin.hp > 0 && enemy.goblin.hp > 0){
 const answer = await rl.question('\nЧто ты будешь делать? 1-Атаковать 2-Обороняться: ');

    if(answer == 1){
    const atk = Math.max(0, player.voin.damage - enemy.goblin.armor);
    enemy.goblin.hp -= atk;
    
    console.log(`Вы наносите ${atk} У гоблина осталось ${enemy.goblin.hp}`);
    }
    if(enemy.goblin.hp > 0){
        const enemyAtk = Math.max(0, enemy.goblin.damage - player.voin.armor);
        player.voin.hp -= enemyAtk;
        console.log(`Гоблин наносит по вам урон ${enemyAtk} У вас отсалось ${player.voin.hp}`);
    }
    else if (answer == 2){
        console.log("Вы встали в защиту");
        const enemyAtk = Math.max(0,(enemy.goblin.damage - player.voin.armor));
        player.voin.hp -= enemyAtk;
        console.log(`Гоблин наносит по вам урон ${enemyAtk} У вас отсалось ${player.voin.hp}`);
    }

   
}

if(enemy.goblin.hp <= 0){
        console.log(`Вы победили ваша награда ${enemy.goblin.loot}`);
     }
     
     else{
        console.log("Вы проиграли");
     }

