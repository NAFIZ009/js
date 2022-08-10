//1


function radianToDegree(radian) {
    //error handaling
    if (typeof radian != 'number') {
        return "Input a Numeric Type Perametter"
    }
    //formula for rad->deg
    let degree=radian*(180/3.14159);
    return degree.toFixed(2);
}


//2


function isJavaScriptFile(fileName) {
        //error handaling
        if (typeof fileName != 'string') {
            return "Input a String Type Perametter"
        }
        //checking the file extangsion
        if (fileName.endsWith(".js")) {
            return true;
        }else{
            return false;
        }
}


//3


function oilPrice(diesel,petrol,octane) {
            //error handaling
            if (typeof diesel != 'number' || typeof petrol != 'number' || typeof octane != 'number') {
                return "Input a Numeric Type Perametter"
            }
            //diesel price
            let dieselPrice = diesel*114;
            //petrol price
            let petrolPrice = petrol*130;
            //octane price
            let octanePrice = octane*135;
            //return the total sum
            return dieselPrice+petrolPrice+octanePrice;
}


//4


function publicBusFare(passangers) {
        //error handaling
        if (typeof passangers != 'number') {
            return "Input a Numeric Type Perametter"
        }
        //initializing variables
    let passangersForPublicBus;
    let passangersForMicro;
    let microNeed;
    //calculating if the passangers ammount is larger or equal then then the capacity of a bus.
    if (passangers>=50) {
        let busNeed=parseInt(passangers/50);
        passangersForMicro=passangers-(50*busNeed);
        if (passangersForMicro>11) {
            microNeed=parseInt(passangersForMicro/11);
            passangersForPublicBus=passangersForMicro-(11*microNeed);
        }else{
            passangersForPublicBus=passangersForMicro;
        }
    }
    //calculating if the passangers ammount is not larger or equal then then the capacity of a bus.
    else{
        passangersForMicro=passangers;
        if (passangersForMicro>=11) {
            microNeed=parseInt(passangersForMicro/11);
            passangersForPublicBus=passangersForMicro-(11*microNeed);
        }else{
            passangersForPublicBus=passangersForMicro;
        }
    }
    return passangersForPublicBus*250;
}


//5


function isBestFriend(friend1,friend2) { 
            //error handaling
            if (typeof friend1 != 'object' || Array.isArray(friend1)) {
                return "Input a Object Type Perametter";
            }
            if ( typeof friend2 != 'object' || Array.isArray(friend2) ) {
                return "Input a Object Type Perametter";
            }
            //checking condition
            if (friend1.name==friend2.friend && friend2.name==friend1.friend) {
                return true;
            } else {
                return false;
            }
}

