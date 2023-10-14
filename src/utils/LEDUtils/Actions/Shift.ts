import { LEDActionBase } from "./ActionBase";
import { RGBColor } from "../RGBColor";
import { LEDActionType } from "./ActionTypes";
import { LEDStrip } from "../Strip";

export class LEDActionShift extends LEDActionBase {
    
    shiftAmount: number;
    
    constructor(public colors: RGBColor[], public numLEDs: number = 60) {
        super(LEDActionType.SHIFT, colors, numLEDs);
        this.shiftAmount = 0;
    }

    public update(LEDStrip: LEDStrip) {
        
        // make copy of LEDStrip
        const leds = LEDStrip.LEDs.slice(0);
        
        for (let i = 0; i < this.numLEDs; i++) {
            LEDStrip.LEDs[i] = leds[(i + this.shiftAmount) % this.numLEDs];
        }
        
        this.shiftAmount++;
    }

    public getActionType(): LEDActionType {
        return this.type;
    }

}