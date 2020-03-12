let mapA = new Map();

mapA.set("Nike","AIR Monarch");
mapA.set("Adidas","Deerupt");
mapA.set("PUMA","Ignite Evoknit");
mapA.set("New Balance","991");

let mapB = new Map();

mapB.set("Nike",1990);
mapB.set("Adidas",2300);
mapB.set("PUMA",1400);
mapB.set("New Balance",3000);

let mapC = new Map();

mapC.set("Nike",3);
mapC.set("Adidas",4);
mapC.set("PUMA",2);
mapC.set("New Balance",1);

let lowPrice = function() {
    let a = mapB.get("Nike")
    let b = mapB.get("Adidas")
    let c = mapB.get("PUMA")
    let d = mapB.get("New Balance")

    if(a == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("Nike")} / ${mapB.get("Nike")} / ${mapC.get("Nike")}day`)
    }else if(b == Math.min(b, a, c, d)) {
        console.log(`${mapA.get("Adidas")} / ${mapB.get("Adidas")} / ${mapC.get("Adidas")}day`)
    }else if(c == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("PUMA")} / ${mapB.get("PUMA")} / ${mapC.get("PUMA")}day`)
    }else if(d == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("New Balance")} / ${mapB.get("New Balance")} / ${mapC.get("New Balance")}day`)
    }

}

let lowTime = function() {
    let a = mapC.get("Nike")
    let b = mapC.get("Adidas")
    let c = mapC.get("PUMA")
    let d = mapC.get("New Balance")

    if(a == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("Nike")} / ${mapB.get("Nike")} / ${mapC.get("Nike")}day`)
    }else if(b == Math.min(b, a, c, d)) {
        console.log(`${mapA.get("Adidas")} / ${mapB.get("Adidas")} / ${mapC.get("Adidas")}day`)
    }else if(c == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("PUMA")} / ${mapB.get("PUMA")} / ${mapC.get("PUMA")}day`)
    }else if(d == Math.min(a, b, c, d)) {
        console.log(`${mapA.get("New Balance")} / ${mapB.get("New Balance")} / ${mapC.get("New Balance")}day`)
    }

}

let maxPrice = function() {
    let a = mapB.get("Nike")
    let b = mapB.get("Adidas")
    let c = mapB.get("PUMA")
    let d = mapB.get("New Balance")

    if(a == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("Nike")} / ${mapB.get("Nike")} / ${mapC.get("Nike")}day`)
    }else if(b == Math.max(b, a, c, d)) {
        console.log(`${mapA.get("Adidas")} / ${mapB.get("Adidas")} / ${mapC.get("Adidas")}day`)
    }else if(c == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("PUMA")} / ${mapB.get("PUMA")} / ${mapC.get("PUMA")}day`)
    }else if(d == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("New Balance")} / ${mapB.get("New Balance")} / ${mapC.get("New Balance")}day`)
    }

}

let maxTime = function() {
    let a = mapC.get("Nike")
    let b = mapC.get("Adidas")
    let c = mapC.get("PUMA")
    let d = mapC.get("New Balance")

    if(a == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("Nike")} / ${mapB.get("Nike")} / ${mapC.get("Nike")}day`)
    }else if(b == Math.max(b, a, c, d)) {
        console.log(`${mapA.get("Adidas")} / ${mapB.get("Adidas")} / ${mapC.get("Adidas")}day`)
    }else if(c == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("PUMA")} / ${mapB.get("PUMA")} / ${mapC.get("PUMA")}day`)
    }else if(d == Math.max(a, b, c, d)) {
        console.log(`${mapA.get("New Balance")} / ${mapB.get("New Balance")} / ${mapC.get("New Balance")}day`)
    }

}

lowPrice();

lowTime();

maxPrice();

maxTime();