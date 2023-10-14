import { RGBColor } from "../RGBColor";
import { LEDActionType } from "./ActionTypes";
import { LEDStrip } from "../Strip";

export abstract class LEDActionBase {

    protected pColors: RGBColor[];

    constructor(public type: LEDActionType, public colors: RGBColor[], public numLEDs: number = 60) {
        this.type = type;
        this.colors = colors;
        this.pColors = new Array<RGBColor>(this.colors.length);
        
        for(let i = 0; i < this.colors.length; i++){
            this.pColors[i] = new RGBColor(0, 0, 0);
        }

        this.updatepColors();
    }

    protected updatepColors() {
        this.colors.map((col, idx) => {this.pColors[idx].copyFrom(col)})
    }

    protected hasColorsChanged(): boolean {
        for(let i = 0; i < this.colors.length; i++){
            if(!this.colors[i].equals(this.pColors[i])){
                this.updatepColors()
                return true
            }
        }

        return false
    }

    public abstract update(LEDStrip: LEDStrip): void;

    public abstract getActionType(): LEDActionType;
}

