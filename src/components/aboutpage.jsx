import headCoordinatorImg from '../assets/team/johnson.png';
import coordinatorTwoImg from '../assets/team/joy.png';
import treasurerImg from '../assets/team/sandra.png';
import proImg from '../assets/team/adepeju.png';
import classes from '../styles/about.module.css';
import CEOImg from '../assets/ceo.jpg';
import childenImg from '../assets/home-img/volunteer-img.png';

//data & information displaying on screen
const aboutPageData = {
    hero: {
        title: "Empowering Nigeria's Future: Providing Free Education for Every Child",
    },
    team :[
        {
            role: 'head coordinator',
            name: 'johnson akinwale',
            img : headCoordinatorImg
        },
        {
            role: 'coordinator II',
            name: 'joy husaini',
            img : coordinatorTwoImg
        },
        {
            role: 'treasurer',
            name: 'sandra ofeli',
            img : treasurerImg
        },
        {
            role: 'public relations officer',
            name: 'johnson akinwale',
            img : proImg
        }
    ],
    ceoMessage:{
        name : 'Prof. Musa Ali',
        img : CEOImg,
        message : "As the CEO of R.A.G.E, I am honored to lead an organization committed to transforming lives through education. In Nigeria, millions of children are denied the opportunity to learn due to various barriers. Our mission is clear: to break down these barriers and provide free, quality education to every child. With innovation, dedication, and the support of our community, we are making strides towards our goal. Together, we are shaping a future where every child has the chance to fulfill their potential. Join us on this journey as we empower Nigeria's youth and build a nation of opportunity and progress. Thank you for your unwavering support as we continue on this journey. Together, we can truly make a difference in the lives of Nigeria's children. With gratitude."
    },
    agenda:{
        aboutUs : {
            title: 'who we are',
            text: "Established in 2024, R.A.G.E is a beacon of hope for Nigeria's children, dedicated to providing free education and unlocking the potential of every young mind. Our vision is a nation where no child is left behind, where education is accessible to all, regardless of circumstance. Guided by our mission, we tirelessly work to break the cycle of poverty through quality education, empowering children to shape their destinies and contribute positively to society. At RAGE, we believe that education is the cornerstone of progress, and with your support, we are committed to building a future where every child's dreams are within reach."
        },
        mission : {
            title: 'our mission',
            text: "Our mission at R.A.G.E is to provide free, quality education to every child in Nigeria, ensuring equal opportunities for all. Through innovative programs, community engagement, and advocacy efforts, we aim to break down barriers to education, empower marginalized communities, and foster a culture of lifelong learning. By investing in the potential of our youth, we strive to create a brighter future for Nigeria, where every child has the knowledge, skills, and opportunities to thrive and contribute positively to society.",
            img: childenImg
        },
        vision : {
            title: 'our vision',
            text: "Our vision at R.A.G.E is to create a Nigeria where every child has access to quality education, regardless of their background or circumstances. We envision a nation where education is a fundamental right, not a privilege, and where every child has the opportunity to unlock their full potential and contribute meaningfully to society. Through our relentless commitment to breaking down barriers, empowering communities, and fostering a culture of learning, we strive to build a brighter future for generations to come. Together, we can transform Nigeria into a beacon of educational excellence and opportunity for all."
        },
        solution :{
            title: 'our solution',
            text:"At R.A.G.E, our mission is simple: to ensure every child in Nigeria receives quality education, regardless of their circumstances. We propose a comprehensive solution to address barriers hindering education access. Firstly, we'll engage closely with local communities to understand their unique challenges and co-create tailored solutions. Next, we'll deploy mobile education units to remote areas, equipped with trained teachers and resources. Additionally, we'll empower teachers through training and support programs to enhance teaching quality. Infrastructure enhancement is key; we'll invest in schools, ensuring safe and conducive learning environments. Parental and community involvement will be fostered through associations and forums. Lastly, we'll advocate for policy reforms to secure adequate funding and implementation of inclusive policies. With these initiatives, we'll take significant steps towards our goal of providing free education to every child in Nigeria, breaking down barriers and paving the way for a brighter future. Join us in our commitment to education and transformation.",
        }
    }

}

//hero section
const HeroSection = ({title})=>{
    const titles = title.split(':');

    return(
        <section className={`${classes.heroSection}`}
        >
            <h1>
                {titles[0]}
            </h1>
            <h4>
                {titles[1]}
            </h4>
            
        </section>
    )
}

// team member card
const TeamMemberCard = ({role, name, img}) =>{
    return (
        <>
            <div className={`${classes.teamMemCard}`}>
                <img className="card-img-top" src={img} alt={`${role}'s`} />
                <div className={`${classes.teamMemCardBody}`}>
                    <p className="card-title">{name}</p>
                    <small className="card-text">{role}</small>
                </div>
            </div>
            
        </>
    )
}

const TeamSection = ({team}) => {
    return(
        <section>
            <h5 className="title">our team</h5>
            <div className={`${classes.teamWrapper}`}>
                {team.map((i, index) =>(
                    <TeamMemberCard {...i} key={index}/>
                ))}
            </div>
        </section>
    )
}

// message from ceo section
const CEOSection = ({message, name, img}) =>{
    return (

        <section className={`${classes.ceoSection}`}>
            <img className="ceo-img" src={img} alt={`CEO's message`} />
            <div className={`${classes.ceoMsgWrap}`}>
                <h5>
                 message from our CEO
                </h5>
                <p className="section-body">{message}</p>
                <h6 className={`${classes.ceoName}`}>~ {name}</h6>
            </div>
        </section>
        
    )
}

const Article = ({title, text, img}) =>{
    return(
        <section className={`${classes.articleSection}`}>
            <h5 className="title">
                {title}
            </h5>
            <p className='section-body' >{text}</p>
            {
                img && (
                    <img src={img} alt={`${title}`} />
                )
            }
        </section>
    )
}


export const AboutUsPage = () =>{
    const agenda = [aboutPageData.agenda.aboutUs, aboutPageData.agenda.mission, aboutPageData.agenda.solution, aboutPageData.agenda.vision];
    return(
        <>  
            <HeroSection {...aboutPageData.hero}/>
            { agenda.map((i, index) => (<Article {...i} key={index} />))}
            <CEOSection {...aboutPageData.ceoMessage}/>
            <TeamSection {...aboutPageData} />
        </>
    )
}