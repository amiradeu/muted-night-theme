/**
 * 
 */

 class Color{
    constructor(props){
        this.world = props.world;
        this.yellow = props.yellow;
        this.red = props.red;
        this.blue = props.blue;
    }

    get world(){
        return this.findWorld();
    }

    findWorld(){
        return random(100);
    }
 }

 const Muted = new Color({
    world: "Gravity Breath",
    yellow: 10,
    red: 10,
    blue: 10
 });