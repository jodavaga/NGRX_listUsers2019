import { IConfig } from '../../models/config.interface';

export interface IConfigState {
    config: string;
}

export const initialConfigState: IConfigState = {
    config: null
}