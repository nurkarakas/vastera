import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nur',
    lastName:  'Karakaş',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Frontend Developer',
    avatar:    '/images/nur.jpg',
    languages: ['Turkish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I would love to use my knowledge in real projects, gain experience,and work with skilled computer engineers and programmers. Moreover, I am good at teamwork . I have excellent communication skills and a positive attitude. I am open to learning and trying new ideas. In addition, my goal is to keep improving myself while making valuable contributions to every project I take part in.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nurkarakas1/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:sumeyyenurkarakas@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `I am a creative frontend developer specializing in building responsive, user-friendly web applications using modern technologies. From design to deployment, I focus on delivering exceptional digital experiences.`,
    headline: <>Frontend Developer</>,
    subline: <>I'm Nur, a frontend developer. I have experience with 
    <InlineCode>Next.js </InlineCode> <InlineCode>TypeScript</InlineCode><InlineCode>React.js</InlineCode> and <InlineCode>TailwindCSS</InlineCode>.I build single-page, static, and server-rendered applications that are fast, user-friendly, and work well on all devices and browsers.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a Front-End Developer with strong skills in creating high-quality web applications. I have experience with Next.js, TypeScript, React.js, and TailwindCSS. I build single-page, static, and server-rendered applications that are fast, user-friendly, and work well on all devices and browsers.

        I am good at connecting web applications with REST APIs, improving website speed, and following SEO and accessibility rules like WCAG standards. I enjoy learning about new technologies in frontend development and using them to create better digital experiences..</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Pr Yazılım',
                timeframe: 'March 2024 - January 2025',
                role: 'Front-End Developer',
                achievements: [
                    <>We are a technology company creating dynamic and user-friendly web applications. Using
                    modern tools like React, Next.js, and TypeScript, we deliver fast and reliable solutions
                    focusing on user experience.</>,
                    <> Our skills in API integration, database management (SQL/NoSQL),
                    and SEO help us to improve performance and visibility. With GitHub and CI/CD processes, we
                    ensure smooth teamwork and on- time delivery of quality projects.</>
                ],
                images: [ 
                  
                ]
            },
            {
                company: 'TTL Connect',
                timeframe: 'November 2023 - March 2024',
                role: 'Web Developer',
                achievements: [
                    <>I have experience in optimizing web applications, working with teams to achieve goals, and
continuously learning new IT trends.</>,
                    <>I also have basic knowledge of PHP, Laravel, and Docker,
with experience in simple projects and understanding development processes.</>
                ],
                images: [ ]
            },
            {
                company: 'Egegen',
                timeframe: 'September 2022 - March 2023',
                role: 'Web Developer',
                achievements: [
                    <>I worked on both backend and frontend development for a company focusing on web
maintenance and infrastructure improvements.</>,
                    <> Additionally, I played an active role in customer
relations and communication.</>
                ],
                images: [ ]
            },
            {
                company: 'ClickToPeak',
                timeframe: 'January 2022 - June 2022',
                role: 'Intern Engineer',
                achievements: [
                    <>I worked at a company that offers website development, social media management, and
Google Ads consultancy to businesses.</>,
                    <> When I was an employee there, I learned basic frontend
skills and actively took part in various projects.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Dumlupinar University ',
                description: <>Computer Engineering</>,
            },
            {
                name: 'Bartın Anatolian High School',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };