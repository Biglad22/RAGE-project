import ongoingProjImg from '../assets/projects-img/ongoing-proj.png';
import shopRite from '../assets/our-sponsors/shoprite.svg';
import coursera from '../assets/our-sponsors/Coursera.svg';
import nestle from '../assets/our-sponsors/nestle.svg';
import unicef from '../assets/our-sponsors/UNICEF USA.svg';
import dangote from '../assets/our-sponsors/Dangote Group.svg';
import uba from '../assets/our-sponsors/UBA Group.svg';
import { Link } from 'react-router-dom';
import classes from '../styles/projects.module.css';
import { CTABtn } from '../extracomponents/cta-btn';

const projectsPageData ={
    ongoing:{
        img:ongoingProjImg,
        status: 'ongoing',
        title: 'help me learn',
        details: 'Help Me Learn aims to 1 million Nigerian kids off the street and into a classroom by the end of 2024. Through the help of our sponsors, volunteers and donors, R.A.G.E aims to achieve the following:',
        objectives: [
            'Provide school placement for 1 million under previllaged kids.',
            'Provide daily breakfast and lunch for all 1 million children.',
            'Ensure adequate housing for all 1 million children.'
        ],
        budget:'NGN 1 billion',
        sponsors:[
            shopRite,
            coursera,
            nestle
        ]
    },
    otherProjects:[
        {
            status: 'ended 30th jan, 2022',
            title:'feed a kid (2021)',
            details:'Help 75 thousand African kids off the street go to bed with a full belly by the end of 2021.',
            funds: 'NGN 2 billion',
            NOC: '75 thousand',
            NOV: '1 hundred',
            sponsors:[
                dangote, 
                unicef,
                uba
            ]
        },
        {
            status: 'ended 30th dec, 2021',
            title:' keep in the circle (2021)',
            details:'Help 5 thousand African from 20 communities learn a new skills and start their own businesse by the end of 2021.',
            funds: 'NGN 50 million',
            NOC: '5 thousand',
            NOV: '2 hundred',
            sponsors:[
                coursera, 
                shopRite,
                dangote
            ]
        },
        {
            status: 'ended 2nd jan, 2021',
            title:' feed a kid (2020)',
            details:'Help 50 thousand African kids off the street go to bed with a full belly by the end of 2020.',
            funds: 'NGN 1.5 billion',
            NOC: '50 thousand',
            NOV: '1.5 hundred',
            sponsors:[
                unicef, 
                shopRite,
                dangote
            ]
        },
        {
            status: 'ended 15th jan, 2020',
            title:' feed a kid (2019)',
            details:'Help 25 thousand African kids off the street go to bed with a full belly by the end of 2019.',
            funds: 'NGN 0.5 billion',
            NOC: '25 thousand',
            NOV: '1 hundred',
            sponsors:[
                unicef, 
                shopRite,
                dangote
            ]
        }
    ]
} 


//ongoing project 
const OngoingProject = ({status, title, details, objectives, budget, sponsors, img}) => {
    return(
        <section className={`${classes.ongoingProjectSection}`}>
            <div className={`${classes.mainWrapper}`}>
                <div className={`${classes.projectInfo}`} >
                    <div>
                        <div  className={`${classes.status}`}>
                            <span  className={`${classes.bulb}`}></span> 
                            <p>{status}</p>
                        </div>
                        <h4>
                            {title}
                        </h4>
                    </div>

                    <div className={`${classes.details}`}>
                        <p>
                            {details}
                        </p>
                        <ul>
                            {objectives.map( (i, index) => (<li key={index}>{i}</li>)) }
                        </ul>
                    </div>
                    
                    <div className={`${classes.budget}`}>
                        
                        <h6>
                            budget:  
                            <span>
                                {` ${budget}`}
                            </span>
                        </h6>
                    </div>

                    <div className={`${classes.btns}`}>
                        <CTABtn link='/volunteer' title='donate' type='route' />
                        <Link to="/volunteer" className='outlined-btn'>volunteer</Link>
                    </div>
                </div>
                <img src={img} alt='school children' />
            </div>

            {/* <div className={`${classes.sponsors}`}>
                <h5>sponsors</h5>
                <div>
                    {sponsors.map((i, index) =>(<img src={i} alt='our sponsors' key={index} />))}
                </div>
            </div> */}
        </section>
    )
}


//other projects card

const OtherProject = ({status, title, details, funds, NOC, NOV, sponsors})=>{

    const performanceStat = [
        {type : 'raised', stat : funds},
        {type : 'children', stat : NOC},
        {type : 'volunteers', stat : NOV}
    ];

    const handleReportCheck = () => {
        alert('the information you seek is not available.')
    } 

    return(
        <div  className={`${classes.projectContainer}`}>
            <small>~ {status}</small>

            <div className={`${classes.mainDetail}`}>
                <h5>{title}</h5>
                <p>{details}</p>
            </div>

            <div className={`${classes.performanceWrapper}`}>
                { performanceStat.map((i) => (
                    <div key={i.type}>
                        <p>{i.stat}</p>
                        <small>{i.type}</small>
                    </div>
                )) }
            </div>

            <div className={`${classes.sponsors}`} >
                <small>
                    sponsors:
                </small>
                <div className={`${classes.sponsorsWrapper}`}>
                    {sponsors.map((i, index) =>(
                        <img src={i} key={index} alt="our sponsors" />
                    ))}
                </div>
            </div>

            <button type="button" className={`${classes.outlinedBtn}  outlined-btn`} onClick={handleReportCheck} >view report</button>
        </div>
    )
}


export const ProjectsPage = () =>{
    return(
        <>
            <OngoingProject {...projectsPageData.ongoing} /> 
            <section className={`${classes.projectsPageWrap}`}>
                <h5 className="title">our other projects</h5>
                <div className={`${classes.otherProjectsWrapper}`}>
                    {projectsPageData.otherProjects.map((i, index) => (
                        <OtherProject {...i} key={index} />
                    ))}
                </div>
            </section>
        </>
    )
}