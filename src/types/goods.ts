interface HashProps{
    id:number;
    hashtagName:string;
  }
  
  interface ImageProps{
    imageHref:string;
    imageName:string;
    imageType:string;
    imageUuid:string;
  }
  
  export interface GoodsProps  {
    data:{
      categoryId: number;
      categoryName: string;
      hashtagList: HashProps[];
      id:number;
      like?:number;
      productInformation:string;
      productName:string;
      productPrice:number;
      productRating:number;
      productRegisterDate:string;
      productUpdateDate:string;
      representationImage:ImageProps;
      sellerName:string;
    }
  };