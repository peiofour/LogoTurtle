function Parser(text, canvasElem) {
    this.text = text.toUpperCase();
    this.text = this.text.replace(/\n/g, ' ');
    this.text = this.text.replace('[', '[ ');
    this.text = this.text.replace(']', ' ]');
    this.commands = this.text.split(' ');
    this.canvasElem = canvasElem;

    let turtle = new Logo(this.canvasElem);
    let angle;
    let number;
    let repeatNb;
    let repeatCommands = [];
    let newCommands = [];

    function run(commands) {
        while(commands.length !== 0){
            switch(commands[0]){
                /*
                LC : pen up (no trace)
                 */
                case 'LC':
                    turtle.lc();
                    commands.shift();
                    break;
                /*
                BC : pen down (trace active)
                 */
                case 'BC':
                    turtle.bc();
                    commands.shift();
                    break;
                /*
                TD {degrees} : turn {degrees} to the right
                 */
                case 'TD':
                    angle = parseInt(commands[1]);
                    turtle.td(angle);
                    commands.shift();
                    commands.shift();
                    break;
                /*
                TG {degrees} : turn {degrees} to the left
                 */
                case 'TG':
                    angle = parseInt(commands[1]);
                    turtle.tg(angle);
                    commands.shift();
                    commands.shift();
                    break;
                /*
                AV {distance} : move {distance} forward
                 */
                case 'AV':
                    number = parseInt(commands[1]);
                    turtle.av(number);
                    commands.shift();
                    commands.shift();
                    break;
                /*
                RE {distance} : move {distance} backward
                 */
                case 'RE':
                    number = parseInt(commands[1]);
                    turtle.re(number);
                    commands.shift();
                    commands.shift();
                    break;
                /*
                FCC {color} : change the {color} (RGB color) of the trace
                 */
                case 'FCC':
                    turtle.fcc(commands[1]);
                    commands.shift();
                    commands.shift();
                    console.log("color");
                    break;

                /*
                VE : clear the canvas and put the trace coordinates to the center
                 */
                case 'VE':
                    turtle.ve();
                    commands.shift();
                    break;
                /*
                CT : Hide the turtle
                 */
                case 'CT':
                    turtle.ct();
                    commands.shift();
                    break;
                /*
                MT : Show the turtle
                 */
                case 'MT':
                    turtle.mt();
                    commands.shift();
                    break;
                /*
                REPETE {times} [{commands}] : Do {commands} {times} times
                 */
                case 'REPETE':
                    repeatNb = parseInt(commands[1]);
                    commands.shift();
                    commands.shift();
                    repeatCommands = [];
                    commands.shift();
                    while(commands[0] !== ']'){
                        repeatCommands.push(commands[0]);
                        commands.shift();
                    }
                    commands.shift();
                    for(let i = 0; i < repeatNb; i++){
                        newCommands.push.apply(newCommands, repeatCommands);
                        run(newCommands);
                    }
                    break;
                default:
                    commands.shift();
                    console.log("error");
            }
        }
    }
    this.runAll = function () {
        run(this.commands)
    }
}
