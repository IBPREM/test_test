export function sold(list_iter, list_2){
    let countersold = 0
    for (let i = 0; i < list_iter.length; i++) {
        countersold += list_iter[i].sold}
    return countersold + list_2.sold;
}

export function bought(list_iter, list_2){
    let countersold = 0
    for (let i = 0; i < list_iter.length; i++) {
        countersold += list_iter[i].originalStock}
    return countersold + list_2.originalStock;
}

export function needToBeSold(bought,sold) {
    return bought - sold;
}

export function bestName(list){
    return list.brand +" "+ list.type + "  -  " + list.name
}

export function bestImage(list){
    return list.sourceImg
}

export function bestPrice(list){
    return "€"+ list.price + ",-"
}

export function screensSize(list){
    let screens_list = []
    for (let i = 0; i <list.availableSizes.length ; i++) {
        screens_list.push(list.availableSizes[i], " inch (",Math.round(list.availableSizes[i]*2.54),"cm) ","| ")
    }
    screens_list.length = screens_list.length -1;
    return screens_list
}

export function applicable(list, name){
    for (let i = 0; i < list.options.length ; i++) {
        if (list.options[i].name === name) {
            if (list.options[i].applicable === true){
                return "src/assets/check.png"
            } else {
                return "src/assets/minus.png"
            }
        }
    }
}


export function buttonMost() {
    console.log("Meest verkocht eerst");
}

export function buttonCheap() {
    console.log("Goedkoopste eerst");
}

export function buttonSport() {
    console.log("Meest geschikt voor sport eerst");
}





