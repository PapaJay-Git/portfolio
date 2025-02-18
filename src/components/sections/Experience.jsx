import {Element} from "react-scroll";
import GradientSection from "../containers/GradientSection";
import TitleContainer from "../texts/TitleContainer";
import FontSizeContainer from "../texts/FontSizeContainer";
import GridContainer from "../containers/GridContainer";
import ExperienceCard from "../cards/ExperienceCard";


export default function Experience() {
    const data = [
        {
            position: "Web Developer",
            workplace: "ONSITE",
            duration: "September 2024 - Present",
            type: "FULL TIME",
            company: "Falcon Global Services",
            description: `As a Full Stack Developer, I have played a key role in both development and leadership, particularly in modernizing existing systems. I was one of the developers of the original version of SuperHostDepot, but I took full ownership of converting it from vanilla Express.js to a TypeScript-based system with Prisma, integrating various third-party services like Shopify (GraphQL), Hostaway (RESTful API), Stripe (webhooks & payments), Pusher.js (real-time notifications), Redis (caching & rate limiting), JWT authentication, cookie-based authentication, CORS, and Joi validations.

            I also led the development of key features for XMGA.com, a Next.js-powered static website optimized for SEO. I built its server-side rendering (SSR) and client-side rendering (CSR) strategy, implemented NextAuth.js for authentication, and developed its multilingual support (English, Chinese, Spanish) using next-intl. Additionally, I integrated Prisma for database management, ensuring a highly scalable and performant system.

            As a lead developer, I guided my co-developers in adopting these new technologies, ensuring smooth onboarding and best coding practices. I also managed GitHub collaboration, handling pull requests, code reviews, and structured branching strategies to maintain a seamless development workflow.

            Beyond coding, I took charge of deployment management, overseeing development, staging, and production environments. I set up CI/CD pipelines, automated deployments, and ensured smooth rollouts with minimal downtime. I worked closely with UI/UX designers to refine features for an optimal user experience and collaborated with testers to validate critical functionalities like Stripe payments and recurring subscriptions.

            My role extends beyond development, focusing on mentorship, architectural improvements, and seamless cross-team collaboration to build scalable and high-performance applications.`
        },
        {
            position: "Web Developer",
            workplace: "REMOTE",
            duration: "November 2023 - September 2024",
            type: "Part-Time",
            company: "Multiple Freelance Clients",
            description: `Developed and delivered a diverse range of custom web solutions, each crafted to meet the unique needs of clients. These included a dynamic landing page for consultation services that effectively showcases offerings and engages potential clients, a cemetery locator system integrated with e-payment solutions to streamline location searches and secure payments, and a barangay form inventory system designed to optimize document management and enhance administrative efficiency.

            I also built an Enrollment Management System to simplify student registration and record-keeping processes, along with a comprehensive Guidance Assessment System to improve academic evaluations by assessing students' well-being and facilitating intervention plans.

            All projects were developed using Laravel and PHP, incorporating cutting-edge web technologies like HTML, CSS, JavaScript, jQuery, Tailwind CSS, Bootstrap 5, Animate.css, Owl Carousel, DomPDF, Animate.js, and more. By combining these technologies, I ensured the creation of responsive, engaging, and high-performance user interfaces that deliver seamless functionality and an exceptional user experience across all devices.`
        },        
        {
            position: "Web Developer",
            workplace: "ONSITE",
            duration: "September 2023 - April 2024",
            type: "FULL TIME",
            company: "Enjin Corp.",
            description: `I developed an advanced, department-based Ticketing System, transforming internal communication and support processes into a seamless, social media-like platform. This system features real-time notifications, interactive chat functionality, and satisfaction reviews, ensuring both efficiency and high-quality service delivery. The platform fosters smooth collaboration across departments while empowering users to track, manage, and resolve issues effortlessly.

            Additionally, I designed and implemented an ATM-like Pay Slip System, streamlining the payroll experience with a user-friendly interface for employees to easily access and manage their pay slips. This system enhances transparency and accessibility, offering a secure, efficient way to manage sensitive payroll data.

            I also created the user interface for a cutting-edge POS System, designing an intuitive, visually appealing layout that enhances the retail or service experience. The design focuses on ease of use and efficiency, ensuring smooth and rapid transactions and inventory management.

            These solutions were built using a robust stack of technologies, including Laravel, Vue.js, MySQL, MS SQL, JavaScript, Tailwind CSS, and Bootstrap 5. Each project integrates powerful tools and modern frameworks to ensure smooth and responsive user experiences across all platforms. The complexity and depth of these systems significantly elevate the operational capabilities and user satisfaction for all stakeholders involved.`
        }, 
        {
            position: "Web Developer",
            workplace: "REMOTE",
            duration: "2022 - 2023",
            type: "PART TIME",
            company: "Myo Clinic",
            description: `Designed and developed a fully responsive, interactive website for Myo Clinic, utilizing HTML5, CSS, Bootstrap 5, JavaScript, MySQL, and PHP. The platform enables clinic administrators to efficiently manage dynamic content, including service offerings, staff profiles, and operating hours, with real-time updates. The website is optimized for performance and mobile compatibility, providing patients with seamless access to up-to-date information. The intuitive design ensures a user-friendly experience, enhancing the clinic’s online presence and making it easier for visitors to navigate the site and engage with clinic services.`
        }

    ];

    return (
        <Element name="experince">
            <GradientSection isGradient={false}>
                <GridContainer isGrid={false} additionalClasses="py-10 lg:py-24">
                    <TitleContainer title="EXPERIENCE"/>
                    <FontSizeContainer size="2xl" additionalClass="mb-10">
                        MY WORK <span className="text-custom-light-blue">EXPERIENCE</span>
                    </FontSizeContainer>
                    {data.map((datum, index) => (<ExperienceCard key={index} data={datum} delay={1 + index} />))}
                </GridContainer>
            </GradientSection>
        </Element>
    );
}
