export interface IQQInfo {
  /**
   * 1: success
   * 201702: server error
   */
  code: 1 | 201702;
  qq: string;
  name: string;
  qlogo: string;
  lvzuan: {
    code: number;
    subcode: number;
    level: number;
    vip: number;
    score: number;
    place: number;
    payway: number;
    isyear: number;
    vendor: number;
  };
}
