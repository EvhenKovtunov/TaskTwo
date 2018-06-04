

export class Settings{
    name:string;
    description:string;
    accentColor:string;
    accentColorSecondary:string;
    enable_multiple_lists:boolean;
    categories:Array<Categories>;
    icon:Icon;
}
export class Icon{
    name:string;
    file:File;
}
export class File{
    url:string;
    thumb:Trumb;
    thumb_retina:TrumbRetinal
} 
export class Trumb{
    url:string;
}
export class TrumbRetinal{
    url:string;
}
export class Categories{
    id:number;
    name: string;
    positionNumber:number;
    items:string;
    active: boolean;
}

export class Item{
    id:number;
    position:number;
    title:string;
    description:string;
    long_description:string;
    gallery_images:Array<GaleryImage>;
    categories:number;
    videoUrl:string;
    videoTitle:string;
}
export class GaleryImage{
    id:number;
    url:string;
    name:string;
    media_type:string;
}