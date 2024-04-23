
import logo from '../assets/footer-logo.svg';
import { Link } from 'react-router-dom';
import classes from '../styles/footer.module.css';

const links = [
   { page : 'home', link:'/'},
   { page : 'projects', link:'/projects'},
   { page : 'volunteer', link:'/volunteer'},
   { page : 'about us', link:'/about'}
];

const RageSection = () =>{

    return(
        <div>
            <img src={logo} alt="our logo" />
            <p>
                RAGE is certified by (Nigerian National Council of Voluntary Agencies) NNCVA. Our RSIN number is 00123452.
            </p>
        </div>
    )
}

const OurContactsSection = () =>{
    return(
        <div>
            <h5>get in touch</h5>
            <ul>
                <li>
                    <small>for support call:</small>
                    <br />
                    08124499013 | 09088421915
                    <br />
                    <a href="mailto:ragecustomers@gmail.com">ragecustomers@gmail.com</a>
                </li>
            </ul>
        </div>
    )
}

const SiteMap = ()=>{
    return(
        <div>
            <h5>site map</h5>
            <ul>
                {links.map((i, index) => (
                    <li key={index}>
                        <Link to={i.link} className={`${classes.siteLink} site-link`}  > {i.page} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const Footer = () =>{
    return(
        <>
            <section className={`${classes.footerSection}`}>
                <RageSection />
                <OurContactsSection />
                <SiteMap />
            </section>
            <section  className={`${classes.copyRight}`}>
                <small>
                    &copy; 2022, all rights reserved by helpinghands
                </small>
            </section>
        </>
    )
}