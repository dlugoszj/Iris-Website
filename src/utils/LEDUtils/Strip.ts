import { RGBColor } from "./RGBColor";

/**
 * LEDStrip Class
 * 
 * @class LEDStrip
 * @description This class represents an LED strip, and provides certain methods for LED strip manuiplation
 * 
 * @property {number} numLEDs - The number of LEDs in the LED strip
 */
export class LEDStrip {

    public LEDs: RGBColor[];

    /**
     * 
     * @param numLEDs The number of LEDs in the LED strip
     */
    constructor(public numLEDs: number = 60) {

        this.numLEDs = numLEDs;
        this.LEDs = new Array<RGBColor>(numLEDs);

        for (let i = 0; i < numLEDs; i++) {
            this.LEDs[i] = new RGBColor(0, 0, 0);
        }
    }

    /**
     * getLEDs
     * 
     * @returns {RGBColor[]} The array of RGB colors representing the LED strip
     */
    public getLEDs(): RGBColor[] {
        return this.LEDs;
    }

}