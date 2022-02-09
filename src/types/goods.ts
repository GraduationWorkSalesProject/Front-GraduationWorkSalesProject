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
      categoryId: number;
      categoryName: string;
      follow:number;
      hashtagList: HashProps[];
      id:number; 
      productDeliveryPrice:number;
      productDeliveryTerm:number;
      productImageList:ImageProps[];
      productInformation:string;
      productName:string;
      productPrice:number;
      productRating:number;
      productRegisterDate:string;
      productUpdateDate:string;
      representationImage:ImageProps;
      sellerId:number;
      sellerInformation:string;
      sellerName:string; 
  };

  export interface ProductResponse {
    id: number;
    code:string;
    message:string;
    data: GoodsProps
  }