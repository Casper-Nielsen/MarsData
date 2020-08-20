export class Weather {
    sol : number;
    season : string;
    measurement : DateHolder;
    air : Air;
    wind : Wind;
}

export class Air{
    temperature : Data;
    pressure : Data;
}
export class Wind{
    speed : Data;
    directions : Compass[];
}

export class DateHolder{
    first : Date;
    last : Date;
}

export class Data{
    average : number;
    minimum : number;
    maximum : number;
}

export class Compass{
    point : string;
    degrees : number;
    up : number;
    right : number;
}