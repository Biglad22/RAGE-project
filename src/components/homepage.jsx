import problemImg from "../assets/home-img/problem-sect-img.png";
import missionImgOne from "../assets/home-img/mission-img-one.png";
import missionImgTwo from "../assets/home-img/mission-img-two.png";
import solutionImgOne from "../assets/home-img/solution-img-one.png";
import solutionImgTwo from "../assets/home-img/solution-img-two.png";
import volunteerImg from "../assets/home-img/volunteer-img.png";
import sponsorOne from "../assets/our-sponsors/Coursera.svg";
import sponsorTwo from "../assets/our-sponsors/Dangote Group.svg";
import sponsorThree from "../assets/our-sponsors/Google.svg";
import sponsorFour from "../assets/our-sponsors/UNICEF USA.svg";
import sponsorFive from "../assets/our-sponsors/nestle.svg";
import sponsorSix from "../assets/our-sponsors/shoprite.svg";
import classes from "../styles/home.module.css"; 
import { CTABtn } from "../extracomponents/cta-btn";
import { motion } from "framer-motion";
import { CachedImage } from "../cache-func/CacheImage";



const homePageData = {
    hero : {
        mainText : "Empowering Dreams, Igniting Futures",
        subText : "Join Us in Transforming Lives Through Education"
    },
    problem : {
        title: 'the problem',
        qoute : { text :  "Education is the most powerful weapon which you can use to change the world.", person : "Nelson Mandela"},
        img : problemImg,
        body : "Across Nigeria, millions of children are being left behind, deprived of the basic human right to education. According to recent statistics, an estimated 10.5 million children between the ages of 5 and 14 are out of school, with girls disproportionately affected. Despite efforts to improve access to education, factors such as poverty, cultural barriers, insecurity, and inadequate infrastructure continue to hinder progress. As a result, many of these children are denied the opportunity to learn, grow, and fulfill their potential. Addressing the issue of out-of-school children is critical to ensuring a brighter future for Nigeria, where every child has the chance to thrive and contribute to the nation's development." 
    },
    mission : {
        title: 'our mission',
        qoute : { text :  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", person : "Malcolm X"},
        img : [missionImgOne, missionImgTwo],
        body : "At R.A.G.E, our mission is clear: to ensure that every child has the opportunity to receive a quality education, regardless of their circumstances. We believe that education is the key to unlocking a brighter future, breaking the cycle of poverty, and empowering individuals to reach their full potential." 
    },
    solution : {
        title: 'our solution',
        qoute : { text :  "An investment in knowledge pays the best interest." , person : "Benjamin Franklin"},
        img : [solutionImgOne, solutionImgTwo],
        body : "We propose a multifaceted approach to tackle Nigeria's out-of-school children crisis. Our strategy involves community engagement to address cultural barriers, the establishment of free education programs in undeserved areas, and targeted interventions for vulnerable groups like girls and those in conflict zones. We'll invest in teacher training and school infrastructure to enhance the quality of education, while advocating for policy reforms to address systemic issues. Through these concerted efforts, we aim to provide free education to 1 million children, empowering them to break the cycle of poverty and build a brighter future for themselves and their communities. Join us in transforming lives through education." 
    },
    volunteer : {
        title: 'volunteer',
        img : volunteerImg,
        body : "Together, we're on a mission to provide free education to 1 million children. Imagine the impact we can make, the dreams we can ignite, and the futures we can transform. With your support, we can turn this vision into reality" 
    },
    sponsors :[
        sponsorOne,
        sponsorTwo,
        sponsorThree,
        sponsorFour,
        sponsorFive,
        sponsorSix
    ]
};

//hero section
const HeroSection = ({img, mainText, subText}) =>{
    return(
        <section className={`${classes.heroSection}`} >
            <motion.div
                initial={{y:'50%', x:'-50%', opacity:0,
                transition:{
                    duration: 1,
                    ease:'easeInOut'
                }
                }}
                animate={{y:'-50%', x:'-50%', opacity:1}}
                exit={{y:'50%', x:'-50%', opacity:0, transition:{
                    duration: 0.25,
                    ease:'easeInOut',
                }}}
                transition={{duration:1}}
            >
                <h1>
                    {mainText}
                </h1>
                <h4>
                    {subText}
                </h4>
            </motion.div>
        </section>
    )
};

//the problem section 
const ProblemSection = ({title, qoute, img, body}) =>{

    return(
        <section>
            <h5 className="title">{title}</h5>

            <div className={`${classes.qouteWrapper}`}>
                <h5 className="qoute">
                    "{qoute.text}"
                </h5>
                <p>
                    ~{`${qoute.person}`}
                </p>
            </div>
            <img src={img} alt="out of school kids" className={`${classes.problemImg}`}/>
            <p className="section-body">{body}</p>

        </section>
    )
};

//the our mission & solution section 
const MissionSection = ({title, qoute, img, body}) =>{

    return(
        <section
            initial={{y:'50%', x:'-50%', opacity:0,
            transition:{
                duration: 1,
                ease:'easeInOut'
            }
            }}
            animate={{y:'-50%', x:'-50%', opacity:1}}
            exit={{y:'50%', x:'-50%', opacity:0, transition:{
                duration: 0.25,
                ease:'easeInOut',
            }}}
            transition={{duration:1}}
        >
            <h5 className="title">{title}</h5>

            <div className={`${classes.qouteWrapper}`}>
                <h5 className="qoute">
                    "{qoute.text}"
                </h5>
                <p>
                    ~{`${qoute.person}`}
                </p>
            </div>
            <div className={`${classes.missionImg}`}>
                {img.map((i, index) => (<CachedImage src={i} key={index} alt='children in class' />))}
                {/* <img src={i} key={index} alt='children in class'/> */}
            </div>
            <p className="section-body">{body}</p>

        </section>
    )
};

//volunteer section
const VolunteerSection = ({title, img, body}) =>{
    return(
        <section  className={`${classes.volunteerSection}`}>
            {/* <img src={img} alt="children in class" /> */}
            <CachedImage src={img} alt="children in class" />
            <div>
                <p className="section-body">{body}</p>
                <CTABtn link='/volunteer' type='route' title='join mission' />
            </div>
        </section>
    )
};

//sponsors section
const Sponsors = ({sponsor}) =>{
    return(
        <section className={`${classes.sponsorWrapper}`}>
            <div className={`${classes.sponsor}`}>
                {sponsor.map((i, index) => (<img src={i} key={index} alt="our sponsors"/>))}
            </div>
        </section>
    )
};

export const HomePage = () => {

    const missionAndSolution = [homePageData.mission, homePageData.solution];

    return(
        <>  
            <HeroSection {...homePageData.hero} />
            <ProblemSection {...homePageData.problem}/>
            {
                missionAndSolution.map((i, index)=> (<MissionSection {...i} />))
            }
            <VolunteerSection {...homePageData.volunteer}/>
            <Sponsors sponsor={homePageData.sponsors} /> 
        </>
    )
};