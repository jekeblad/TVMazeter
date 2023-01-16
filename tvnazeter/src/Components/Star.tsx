import { FC } from 'react';
import "./Star.scss";

interface IStarProps{
    isFilled?:boolean, className?:string
}

const Star:FC<IStarProps> = (props:IStarProps) => {
    return <svg className={props.isFilled ? "filled-star" : "star"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1416 1254l248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784l-632 486z"></path></svg>
}
export default Star;