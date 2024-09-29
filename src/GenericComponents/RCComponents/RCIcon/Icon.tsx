export interface IconVariantProps {
  variant?: "outline" | "fill" | "custom";
  iconSet?: IconSet;
}

export declare type IconSet = {
  icons: IconSetItem[];
};

export type IconSetItem = {
  properties: {
    name: string;
  };
  icon: {
    paths: string[];
    attrs?: Object[];
    width?: number | string;
  };
};

const Icon = (props: IconVariantProps) => {
  const { variant, iconSet, ...rest } = props;
  if(!variant || variant === "outline" || variant === "fill"){
    return <></>
  }else if(variant==="custom" && iconSet){
    return
  }
};

export default Icon;
