export interface Encoder<T> {
  encode(value: T, numBits?: number): string;
  decode(value: string, target?: T): T;
  getBitLength?(): number;
}
