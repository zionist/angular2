export interface HeroInterface {
    id: number;
    name: string;
    power?: string,
    alterEgo?: string
}

export class Hero implements HeroInterface {
    constructor(
        public id: number,
        public name: string,
        public power?: string,
        public alterEgo?: string
    ) {  }
}