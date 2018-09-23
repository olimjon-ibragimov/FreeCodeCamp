function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(fahrenheit) {
            this._fahrenheit = fahrenheit;
        }
        // getter    
        get celsius() {
            return 5 / 9 * (this._fahrenheit - 32);
        }
        //setter    
        set celsius(newValue) {
            this._fahrenheit = newValue * 9.0 / 5 + 32;
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C