import { DefaultHtmlAttributes } from "../../Utilities/HTMLDefaultAttributes/DefaultHtmlAttributes";

export default interface IButtonProps extends DefaultHtmlAttributes{
    text?:string;
    id?:string;
    className?:string;
    rightIcon?:{name:string,color?:string,iconSet?:IconSet,variant?:"outline"|"fill"|"custom"};
    leftIcon?:{name:string,color?:string,iconSet?:IconSet,variant?:"outline"|"fill"|"custom"};
    isRightIcon?:boolean;
    isLeftIcon?:boolean;

}