import {
  TCData,
  InAppTCData,
  Ping,
} from './model/';

export type Param = number[] | Callback | number | string;
export type ArgSet = [ string, number, Callback, Param];
export type TCDataCallback = (tcData: TCData, success: boolean) => void;
export type IATCDataCallback = (IATCData: InAppTCData, success: boolean) => void;
export type PingCallback = (pingReturn: Ping) => void;
export type Callback = TCDataCallback | IATCDataCallback | PingCallback;
