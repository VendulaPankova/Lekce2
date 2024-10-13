const cenaListku = 12 // cena lístku v eurech
const navstevnici = 174 //průměrný počet návštěvníků
const predstaveni = 15 // pocet predstavení za měsíc

// Uložte výsledek do proměnné prijem. 
const prijem = cenaListku * navstevnici * predstaveni

//Hodnotu proměnné prijem vypište do stránky.

document.body.innerHTML += "<p> měsíční příjem divadla bez slev:" + prijem + " eur</p>"

//výpočet slevy a změna příjmu

const studentskaSleva = 0.65 * cenaListku
const navstevnostStudenti = 0.4
const pocetStudentu = navstevnici * navstevnostStudenti
const plnaCenaPlaticich = navstevnici - pocetStudentu 

//příjem divadla se započítanou slevou pro studenty

const prijemSeSlevou = ((plnaCenaPlaticich * cenaListku) + (pocetStudentu * studentskaSleva)) * predstaveni

ukol1Lekce2.body.innerHTML += "<p>Měsíční příjem se slevou:" + prijemSeSlevou + " eur</p>"

// házení kostkou - NEVĚDĚLA!!

//const cisloNaKostce = 1 + Math.floor(Math.random() * 6)






