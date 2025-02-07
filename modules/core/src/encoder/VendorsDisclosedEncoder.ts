import {

  BitLength,
  Base64Url,
  Encoder,
  EncoderMap,
  IntEncoder,
  SegmentType,

} from '.';

import {

  TCModel,
  TCModelPropType,

} from '..';

import {Vector} from '../model';

export class VendorsDisclosedEncoder implements Encoder<TCModel> {

  private encMap: EncoderMap = new EncoderMap();
  private base64Url: Base64Url = new Base64Url();

  public encode(tcModel: TCModel): string {

    const intEnc: IntEncoder = new IntEncoder();
    const encoder: Encoder<TCModelPropType> = new this.encMap.vendorsDisclosed() as Encoder<TCModelPropType>;

    // first encode the segment type
    let bits: string = intEnc.encode(SegmentType.vendorsDisclosed, BitLength.segmentType);

    // add the vector bits
    bits += encoder.encode(tcModel.vendorsDisclosed);

    return this.base64Url.encode(bits);

  }

  public decode(encodedString: string, tcModel: TCModel): TCModel {

    let bits: string = this.base64Url.decode(encodedString);

    // the first n bits are the type we don't actually care about them
    bits = bits.substr(BitLength.segmentType);
    const encoder: Encoder<TCModelPropType> = new this.encMap.vendorsDisclosed() as Encoder<TCModelPropType>;
    const vector: Vector = encoder.decode(bits) as Vector;

    vector.forEach((isSet: boolean, vendorId: number): void => {

      if (isSet) {

        tcModel.vendorsDisclosed.set(vendorId);

      }

    });

    return tcModel;

  }

}
