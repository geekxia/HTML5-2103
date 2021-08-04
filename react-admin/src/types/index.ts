export interface Good { name: string, desc: string, price: number, hot?: boolean, img?: string, rank?: number, cate: string }

export enum GoodCate {
  office = '办公用品',
  car = '汽车生活',
  chothe = '男装女装'
}
