import { Link } from "react-router-dom";
import classes from '../styles/cta-btn.module.css';


export const CTABtn = ({type, title, link}) =>{

    let componentToRender;

    switch (type) {

        case 'route':
            componentToRender = <Link className={`${classes.cta} cta`} to={link}><p>{title}</p></Link>   

            break;

        case 'anchor':
            componentToRender = <a className={`${classes.cta} cta`} href={link}><p>{title}</p></a>   
            
            break;  
            
        case 'button':
            componentToRender = <button className={`${classes.cta} cta`} href={link}><p>{title}</p></button>   
            
            break;  
        default:
            break;
    }

    return(
        <>
            { componentToRender }
        </>
    )
    
}