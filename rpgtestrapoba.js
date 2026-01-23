const fs = require("fs");

//сначала выводит что в коде потом выводит сам файл что написанно там
/*
fs.readFile("new.txt" , function(error,data){
if(error){
    return console.log(error);
}
console.log(data.toString());
});
console.log("Робит");*/
//читает файл сначало а потом идет по коду
/*
const data = fs.readFileSync("new.txt");
console.log(data.toString());
console.log("Робит");
*/

let player = {
    class: "Воин",
    name: "Санек",
    lvl: 1,
    hp: 100,
    exp: 0,
    damage: 25
};
const data = JSON.stringify(player,null,2);

fs.writeFile("new.txt", data, function(error){
    if(error){
        return console.log("Ошибка");
    }
    console.log("Сохранение прошло успешно" +player);
    const read = fs.readFileSync("new.txt");
    console.log(read.toString());
});


