import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nur',
    lastName:  'Karakaş',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Frontend Developer',
    avatar:    '/images/nur2.jpg',
    location:  'İstanbul',
    languages: ['Turkish', 'English']  // optional: Leave the array empty if you don't want to display languages
}

// Newsletter bölümü kaldırıldı

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
    subline: <>As an experienced Frontend Developer, I stand out with strong communication skills and effectiveness in teamwork. I develop user-focused, high-performance projects using modern technologies such as React, Next.js, and TypeScript. I am confident in delivering innovative solutions and adding tangible value to projects. In every project I take part in, I prioritize quality, efficiency, and success.</>
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
        description: <>As an experienced Frontend Developer, I stand out with strong communication skills and effectiveness in teamwork. I develop user-focused, high-performance projects using modern technologies such as React, Next.js, and TypeScript. I am confident in delivering innovative solutions and adding tangible value to projects. In every project I take part in, I prioritize quality, efficiency, and success.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Ogrit Information Technologies',
                timeframe: 'March 2025 - July 2025',
                role: 'Front End Developer',
                achievements: [
                    <>Led ~70% of frontend development and API integrations in a logistics-focused project, improving load and response times by 40%.</>,
                    <>Delivered scalable, user-friendly web applications that enhanced core business processes.</>,
                    <>Implemented CI/CD pipelines and streamlined team workflows, ensuring timely project delivery.</>
                ],
                images: []
            },
            {
                company: 'Pr Yazılım',
                timeframe: 'March 2024 - January 2025',
                role: 'Front End Developer',
                achievements: [
                    <>Developed dynamic, high-performance web applications, enhancing user experience by 40%.</>,
                    <>Contributed significantly to API integrations and database management (SQL/NoSQL), boosting application performance and visibility.</>,
                    <>Streamlined development processes using GitHub and CI/CD, directly supporting company growth.</>
                ],
                images: []
            },
            {
                company: 'TTL Connect',
                timeframe: 'November 2023 - March 2024',
                role: 'Web Developer',
                achievements: [
                    <>Optimized web applications, improving page load and responsiveness by 25%.</>,
                    <>Collaborated closely with a team to achieve project goals, contributing approximately 60% to development efforts.</>,
                    <>Applied PHP, Laravel, and Docker knowledge to small-scale projects, accelerating development workflows.</>
                ],
                images: []
            },
            {
                company: 'Egegen',
                timeframe: 'September 2022 - March 2023',
                role: 'Web Developer',
                achievements: [
                    <>Contributed ~50% to both frontend and backend development, enhancing website maintenance and infrastructure reliability.</>,
                    <>Improved client satisfaction through active involvement in communication and support processes.</>
                ],
                images: []
            },
            {
                company: 'ClickToPeak',
                timeframe: 'January 2022 - June 2022',
                role: 'Intern Engineer',
                achievements: [
                    <>Assisted in website development and digital marketing projects, achieving a ~30% improvement in project delivery efficiency.</>,
                    <>Gained practical frontend experience and actively supported multiple projects, strengthening teamwork and development process understanding.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Dumlupınar University',
                description: <>B.Sc. in Computer Engineering (2017 - 2021)</>,
            },
            {
                name: 'Bartın Anatolian High School',
                description: <>High School Diploma</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        useSkillIcons: true, // use animated tech icons
        skillCategories: [
            {
                title: 'Hard Skills',
                icon: 'code',
                skills: [
                    { name: 'react', icon: 'react', label: 'React' },
                    { name: 'redux', icon: 'redux', label: 'Redux' },
                    { name: 'typescript', icon: 'typescript', label: 'TypeScript' },
                    { name: 'javascript', icon: 'javascript', label: 'JavaScript' },
                    { name: 'html5', icon: 'html5', label: 'HTML5' },
                    { name: 'css3', icon: 'css3', label: 'CSS3' },
                    { name: 'sass', icon: 'sass', label: 'SASS' },
                    { name: 'less', icon: 'less', label: 'LESS' },
                    { name: 'materialui', icon: 'materialui', label: 'Material UI' },
                    { name: 'bootstrap', icon: 'bootstrap', label: 'Bootstrap' },
                    { name: 'websocket', icon: 'websocket', label: 'WebSocket' },
                    { name: 'git', icon: 'git', label: 'Git' },
                    { name: 'php', icon: 'php', label: 'PHP' },
                    { name: 'figma', icon: 'figma', label: 'Figma' },
                    { name: 'photoshop', icon: 'photoshop', label: 'Photoshop' }
                ]
            },
            {
                title: 'Soft Skills',
                icon: 'brain',
                skills: [
                    { name: 'curlyBrackets', icon: 'curlyBrackets', label: 'Clean code' },
                    { name: 'brain', icon: 'brain', label: 'Problem-solving' },
                    { name: 'person', icon: 'person', label: 'Teamwork' },
                    { name: 'grid', icon: 'grid', label: 'Creative thinking' },
                    { name: 'book', icon: 'book', label: 'Documentation' },
                    { name: 'check', icon: 'check', label: 'Debugging' },
                    { name: 'refresh', icon: 'refresh', label: 'Optimization' }
                ]
            },
            {
                title: 'Frameworks & Libraries',
                icon: 'grid',
                skills: [
                    { name: 'react', icon: 'react', label: 'React.js' },
                    { name: 'vue', icon: 'vue', label: 'Vue.js' },
                    { name: 'laravel', icon: 'laravel', label: 'Laravel' },
                    { name: 'tailwind', icon: 'tailwind', label: 'Tailwind CSS' },
                    { name: 'bootstrap', icon: 'bootstrap', label: 'Bootstrap' }
                ]
            },
            {
                title: 'Languages',
                icon: 'translate',
                skills: [
                    { name: 'globe', icon: 'globe', label: 'English' },
                    { name: 'translate', icon: 'translate', label: 'Turkish' }
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`,
    posts: [
        {
            title: 'Micro-Frontend Architecture and Applications',
            slug: 'micro-frontend-architecture-and-applications',
            publishedAt: '2025-09-01',
            summary: 'A comprehensive review of micro-frontend architecture providing modularity and scalability in large-scale web applications.',
            tag: 'Architecture',
            image: '/images/blog/design-systems-and-component-libraries.jpg',
            language: 'en'
        },
        {
            title: 'Frontend Performance Optimization Techniques',
            slug: 'frontend-performance-optimization-techniques',
            publishedAt: '2025-08-15',
            summary: 'Advanced strategies and best practices for improving web application performance and user experience.',
            tag: 'Performance',
            image: '/images/blog/frontend-performance-optimization-techniques.jpg',
            language: 'tr'
        },
        {
            title: 'Modern State Management: Redux Toolkit vs Zustand',
            slug: 'modern-state-management-redux-toolkit-vs-zustand',
            publishedAt: '2025-07-20',
            summary: 'A comparative analysis of state management libraries in modern React applications.',
            tag: 'State Management',
            image: '/images/blog/blog3.jpg',
            language: 'en'
        },
        {
            title: 'Frontend\'de Yapısal Zeka Entegrasyonu',
            slug: 'frontendde-yapisal-zeka-entegrasyonu',
            publishedAt: '2025-10-01',
            summary: 'Modern web uygulamalarında yapay zeka teknolojilerinin frontend entegrasyonu ve pratik kullanım örnekleri.',
            tag: 'Yapay Zeka',
            image: '/images/blog/blog4.webp',
            language: 'tr'
        },
        {
            title: 'Frontend Performans Optimizasyonu Teknikleri',
            slug: 'frontend-performans-optimizasyonu-teknikleri',
            publishedAt: '2025-09-15',
            summary: 'Web uygulamalarında performansı artırmak için gelişmiş optimizasyon stratejileri ve pratik yaklaşımlar.',
            tag: 'Performans',
            image: '/images/blog/blog5.webp',
            language: 'tr'
        },
        {
            title: 'Mikro Frontend Mimarisi ve Uygulamaları',
            slug: 'mikro-frontend-mimarisi-ve-uygulamalari',
            publishedAt: '2025-08-10',
            summary: 'Büyük ölçekli web uygulamalarında modülerlik ve ölçeklenebilirlik sağlayan mikro frontend mimarisi.',
            tag: 'Mimari',
            image: '/images/blog/blog6.webp',
            language: 'tr'
        },
        {
            title: 'Design Systems: Building a Scalable UI Framework',
            slug: 'design-systems-scalable-ui-framework',
            publishedAt: '2025-11-15',
            summary: 'Creating a comprehensive design system that ensures consistency, reusability, and efficiency across large-scale projects.',
            tag: 'Design',
            language: 'en'
        },
        {
            title: 'WebAssembly: Revolutionizing Web Performance',
            slug: 'webassembly-web-performance-revolution',
            publishedAt: '2025-12-01',
            summary: 'Exploring how WebAssembly is transforming web application performance and enabling complex computations in the browser.',
            tag: 'Performance',
            language: 'en'
        },
        {
            title: 'Serverless Architecture: Future of Backend Development',
            slug: 'serverless-architecture-backend-future',
            publishedAt: '2026-01-10',
            summary: 'A deep dive into serverless computing, its benefits, challenges, and how it\'s reshaping backend development.',
            tag: 'Architecture',
            language: 'en'
        },
        {
            title: 'Progressive Web Apps: Bridging Web and Mobile',
            slug: 'progressive-web-apps-web-mobile-bridge',
            publishedAt: '2026-02-20',
            summary: 'Understanding Progressive Web Apps (PWAs) and how they provide a native app-like experience on the web.',
            tag: 'Mobile',
            language: 'en'
        },
        {
            title: 'Tasarım Sistemleri ve Ölçeklenebilir Arayüz Çerçeveleri',
            slug: 'tasarim-sistemleri-olceklenebilir-arayuz',
            publishedAt: '2025-11-20',
            summary: 'Büyük ölçekli projelerde tutarlılık, yeniden kullanılabilirlik ve verimlilik sağlayan kapsamlı bir tasarım sistemi oluşturma.',
            tag: 'Tasarım',
            language: 'tr'
        },
        {
            title: 'WebAssembly ile Web Performansını Devrimleştirmek',
            slug: 'webassembly-web-performans-devrimi',
            publishedAt: '2025-12-05',
            summary: 'WebAssembly\'nin web uygulama performansını nasıl dönüştürdüğünü ve tarayıcıda karmaşık hesaplamaları nasıl etkinleştirdiğini keşfetme.',
            tag: 'Performans',
            language: 'tr'
        },
        {
            title: 'Sunucusuz Mimari: Backend Geliştirmenin Geleceği',
            slug: 'sunucusuz-mimari-backend-gelecegi',
            publishedAt: '2026-01-15',
            summary: 'Sunucusuz bilişim hakkında derinlemesine bir inceleme, avantajları, zorlukları ve backend geliştirmeyi nasıl yeniden şekillendirdiği.',
            tag: 'Mimari',
            language: 'tr'
        },
        {
            title: 'Progresif Web Uygulamaları: Web ve Mobili Birleştirmek',
            slug: 'progresif-web-uygulamalari-web-mobil',
            publishedAt: '2026-02-25',
            summary: 'Progresif Web Uygulamalarını (PWA) anlamak ve web üzerinde nasıl yerli bir uygulama benzeri deneyim sağladığını keşfetmek.',
            tag: 'Mobil',
            language: 'tr'
        }
    ]
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
    projects: [
        {
            title: 'E-Commerce',
            description: 'E-commerce platform',
            image: '/images/projects/e-commerce.png',
            features: [
                { text: 'Promotional Products', icon: 'code' },
                { text: 'Installment Payment Options', icon: 'code' },
                { text: 'Category Filtering', icon: 'code' },
                { text: 'Product Reviews', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['React.js', 'Next.js 15.3.2', 'Swiper', 'Framer Motion', 'Tailwind CSS', 'HSTS'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Product Catalog System', 'Multi-language Integration', 'Payment System Integration'],
                features: ['Slider Display', 'Product Categories', 'Discounted Products', 'Installment Options', 'Customer Reviews', 'YouTube Integration'],
                description: 'E-Commerce is a modern online shopping platform focused on technology products. It offers a wide range of products including phones, computers, tablets, and home electronics. The platform stands out with discounts of up to 15% on selected products, 6-18 month installment options, and a user-friendly interface. It provides a comprehensive shopping experience with English and Turkish language options, detailed product descriptions, customer reviews, and YouTube product review videos. Additionally, it ensures secure shopping with various payment options such as Visa, PayPal, and MasterCard.',
                productCategories: ['Technology', 'Phones', 'Computers', 'Tablets', 'Home Electronics']
            }
        },
        {
            title: 'Alius Card',
            description: 'Digital Business Card Platform',
            image: '/images/projects/alius.png',
            features: [
                { text: 'NFC and QR Technology', icon: 'code' },
                { text: 'Online Support System', icon: 'code' },
                { text: 'Custom Management Panel', icon: 'code' },
                { text: 'Eco-Friendly Solution', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Responsive Interface', 'NFC Integration', 'QR Code System', 'Panel Management'],
                features: ['Social Media Integration', 'Location Information', 'Catalog & Price List', 'IBAN Addition', 'Photo Gallery', 'Easy Sharing'],
                description: 'Alius Card is a next-generation digital business card brand equipped with NFC and QR Code technology, 100% recyclable. It allows sharing all information including social media accounts, location details, corporate catalog, product and price information with a single touch. With the special Alius Panel, information can be updated instantly, saving on printing costs.',
                cardTypes: ['Black Card', 'Gold Card', 'Platinum Card', 'Color Card', 'Special Card']
            }
        },
        {
            title: 'Bright',
            description: 'Agency Project',
            image: '/images/projects/bright.png',
            features: [
                { text: 'Multi-language Support', icon: 'code' },
                { text: 'Custom Designs', icon: 'code' },
                { text: 'Web Design and Development', icon: 'code' },
                { text: 'Social Media Management', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['Astro', 'Tailwind CSS', 'React.js', 'Next.js', 'Responsive Design'],
                developmentProcess: ['UI/UX Design', 'Brand Identity Creation', 'Social Media Strategy', 'Content Production', 'Graphic Design'],
                features: ['Social Media Management', 'Brand Identity Creation', 'Graphic Design', 'YouTube Channel Management', 'Web Design'],
                description: 'Bright is an innovative agency platform that responds to all your creative needs, from custom social media graphics to digital advertising designs. It offers customized, attention-grabbing social media graphic designs for Instagram, Facebook, Twitter, and other platforms that suit your brand. Additionally, it helps you stand out by creating unique and memorable logos with visuals that represent your business. To meet your digital advertising needs, it provides effective and original campaign designs, optimized designs for your website or social media ads to increase conversion rates, and SEO-friendly visual and content optimization to increase visibility in search engines.',
                serviceCategories: ['Social Media Designs', 'Professional Logo Design', 'Advertising and Campaign Designs', 'Web Design', 'Graphic Design']
            }
        },
        {
            title: 'Brussels',
            description: 'Transfer Services',
            image: '/images/projects/bruseels.png',
            features: [
                { text: 'Professional Driver Service', icon: 'code' },
                { text: 'Luxury Vehicle Fleet', icon: 'code' },
                { text: 'Online Reservation', icon: 'code' },
                { text: 'Corporate Services', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Reservation System', 'Fleet Management System', 'Mobile App Integration'],
                features: ['Online Reservation System', 'Fleet Management', 'Customer References', 'Multi-language Support', 'Mobile Application'],
                description: 'Brussels Limousine Services is a Brussels-based limousine company specializing in limousine, van, minibus, and chauffeur-driven bus rentals. With thirty years of excellence, it provides professional and high-quality Belgian limousine service. The company offers ideal solutions for business travel, special events, and group transfers, aiming to provide its customers with a comfortable and luxurious travel experience.',
                vehicleTypes: ['Business Class', 'First Class', 'Prestige Class', 'Van (MVP)', 'Minibus', 'Autocars', 'Limousine']
            }
        },
        {
            title: 'Chef',
            description: 'Gastronomy services',
            image: '/images/projects/chef.png',
            features: [
                { text: 'Gastronomy Consulting', icon: 'code' },
                { text: 'Menu Planning', icon: 'code' },
                { text: 'Kitchen Project Design', icon: 'code' },
                { text: 'Franchise Consulting', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Content Management System', 'Gallery Integration', 'FAQ Module'],
                features: ['Corporate Presentation', 'Service Details', 'Gallery', 'Frequently Asked Questions', 'Contact Form'],
                description: 'Chef is a platform offering professional consulting services in the field of gastronomy. By approaching companies or restaurants with the right strategies, it provides consulting on good analysis, accurate diagnosis, staff and personal training, friendly service, cost reduction, and establishing standards. Specialized in menu planning, training, kitchen project design, and franchise, the platform offers solutions tailored to its customers\'s needs.',
                serviceCategories: ['Consulting', 'Menu Planning', 'Training', 'Kitchen Project Design', 'Franchise']
            }
        },
        {
            title: 'UnoLife',
            description: 'Modern real estate project',
            image: '/images/projects/uno.png',
            features: [
                { text: 'Contemporary Architectural Design', icon: 'code' },
                { text: 'Private Living Spaces', icon: 'code' },
                { text: 'Multi-language Support', icon: 'code' },
                { text: 'Online Meeting System', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Nginx', 'particles.js', 'Animate.css', 'Bootstrap'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Interactive Map Integration', 'Multi-language System', 'Online Appointment System'],
                features: ['Project Detail Pages', 'Interactive Map', 'Online Appointment System', 'Real Estate Filtering', '3D Visualization'],
                description: 'UnoLife is a web platform that introduces and markets modern real estate projects. UnoLife Villas, located at a rapidly developing point with complete dominance over the city in Kyrenia, the popular city of Cyprus, are positioned just 14 minutes from the city center, 4 minutes from Girne American University, and only 7 minutes from Escape Beach. Villa options with two different designs are built according to a 3+1 apartment plan. Each house includes a private living area and parking area. The settlement layout is designed parallel to sea and mountain views.',
                propertyTypes: ['3+1 Villa', 'Villa with Private Pool', 'Sea View Villa', 'Mountain View Villa']
            }
        },
        {
            title: 'Erol Bakır',
            description: 'E-commerce website',
            image: '/images/projects/erol.png',
            features: [
                { text: 'Wholesale Sales System', icon: 'code' },
                { text: 'Multi-lingual Interface', icon: 'code' },
                { text: 'Catalog Download', icon: 'code' },
                { text: 'Order Tracking', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Product Management System', 'Order Tracking System', 'Inventory Management'],
                features: ['Product Categories', 'Wholesale Sales Module', 'Best Sellers List', 'Promotional Products', 'Catalog Download'],
                description: 'Erol Bakır is an e-commerce platform specializing in souvenir production and wholesale. The company brings its experience and knowledge from the past to the future with its expert staff, offering quality and locally produced products. The platform, which sells handmade copper products such as copper earrings, tourist magnets, copper coffee pots, decorative plates, coffee and tea sets, stands out with its user-friendly interface and advanced order management system.',
                productCategories: ['Copper Earrings', 'Tourist Magnets', 'Copper Coffee Pots', 'Decorative Plates', 'Coffee Sets', 'Tea Sets']
            }
        },
        {
            title: 'Hecotec',
            description: 'Engineering and construction company',
            image: '/images/projects/heco.png',
            features: [
                { text: 'Engineering Services', icon: 'code' },
                { text: 'Construction Projects', icon: 'code' },
                { text: 'Project Management', icon: 'code' },
                { text: 'Consulting Services', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Project Showcase', 'Content Management System', 'Multi-language Integration'],
                features: ['Corporate Presentation', 'Service Details', 'Project Portfolio', 'Careers Page', 'Multi-language Support'],
                description: 'Hecotec is an innovative EPC (Engineering, Procurement, Construction) contractor company established in Baku, Azerbaijan in 2016. With its experienced multinational engineering staff, it aims to provide world-class Engineering, Procurement, Construction, Management, and Consulting services in the regional and global market. It has industrial business relationships with leading companies in various engineering and design fields, especially in the Oil and Gas industry.',
                serviceCategories: ['Engineering', 'Procurement', 'Construction', 'Project Management', 'Consulting']
            }
        },
        {
            title: 'LocateMyWill',
            description: 'Will and trust registry platform',
            image: '/images/projects/locate.png',
            features: [ 
                { text: 'Secure Will Registry', icon: 'code' },
                { text: 'Heir Access System', icon: 'code' },
                { text: 'Strong Encryption', icon: 'code' },
                { text: 'Pre-planning Survey', icon: 'code' },
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Security System', 'User Management', 'File Storage System'],
                features: ['Will Registry', 'Heir Access', 'Document Upload', 'Secure Storage', 'Subscription Plans'],
                description: 'LocateMyWill is a secure platform for registering wills or trust documents and providing heirs access to these documents. Users can register their will or trust documents, allowing their heirs to easily access these documents after their death. The platform protects users\'s information using the strongest encryption methods and servers reinforced six times against hacking. It provides users with a password-protected area, allowing them to securely store funeral preferences, religious needs, bank accounts, and other important information.',
                planTypes: ['Standard Plan', 'Upgrade Plan']
            }
        },
        {
            title: 'KaliteliTakipçi',
            description: 'Social media follower sales platform',
            image: '/images/projects/sosyal.png',
            features: [
                { text: 'Instagram Follower Packages', icon: 'code' },
                { text: 'Twitter Follower Packages', icon: 'code' },
                { text: 'Secure Payment System', icon: 'code' },
                { text: '24/7 Customer Support', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['GSAP', 'Vimeo', 'Google Font API', 'Font Awesome', 'Bootstrap Icons', 'IconScout', 'Popper', 'Google Hosted Libraries', 'jsDelivr', 'cdnjs', 'Google Maps', 'AOS', 'SweetAlert2', 'Lightbox', 'Swiper', 'FancyBox', 'jQuery', 'Plesk', 'Cloudflare'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Order Tracking System', 'Payment System Integration', 'Customer Panel'],
                features: ['Product Categories', 'Order Inquiry', 'Compensation Request System', 'Membership System', 'Balance Loading'],
                description: 'KaliteliTakipçi is an e-commerce platform offering follower, like, view, and engagement services for social media platforms. Established in 2020 and Turkey\'s leading social media service provider, the platform serves both individual and corporate customers. It offers various packages for popular social media platforms such as Instagram, TikTok, Twitter, Facebook, and YouTube. The platform, which doesn\'t require passwords, has a secure payment infrastructure, and provides 24/7 customer support, has more than 500,000 active customers and more than 2,500,000 completed orders.',
                serviceCategories: ['Instagram Services', 'TikTok Services', 'Twitter Services', 'Facebook Services', 'YouTube Services']
            }
        },
        {
            title: 'Surre Mobile House',
            description: 'Tiny house production and sales platform',
            image: '/images/projects/suree.png',
            features: [
                { text: 'Custom Design Tiny House', icon: 'code' },
                { text: 'O1-O2 Certified Production', icon: 'code' },
                { text: 'Earthquake Resistant Structure', icon: 'code' },
                { text: 'Four-Season Use', icon: 'code' },
            ],
            technicalDetails: {
                technologies: ['React.js', 'Next.js', 'E-Catalog System', 'Contact Forms', 'Responsive Design'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Product Presentation Pages', 'Contact Form', 'Video Integration'],
                features: ['Tiny House Presentation', 'Model Gallery', 'Frequently Asked Questions', 'Dealership Application', 'E-Catalog Download'],
                description: 'Surre Mobile House is a brand that produces ultra-luxury earthquake containers with steel frames. The company, which has O1-O2 International Type Approval Certificate, Industry Registration Certificate, Capacity Report, and ISO 9001 Certificate, produces according to international standards. A minimalist and functional lifestyle is offered with Tiny Houses that users can also bring to life with their own designs. Products that stand out with their trailer system, exterior cladding, interior space, and custom design features are offered in standard, professional, and expert bungalow categories. Surre Mobile House serves as the Surre A.Ş. brand.',
                houseTypes: ['Standard Bungalow', 'Professional Bungalow', 'Expert Bungalow']
            }
        },
        {
            title: 'Netbilsis',
            description: 'Corporate management system',
            image: '/images/projects/netbilsis.png',
            features: [
                { text: 'Document management', icon: 'code' },
                { text: 'Workflow automation', icon: 'code' },
                { text: 'Department reporting', icon: 'code' },
                { text: 'Data analysis', icon: 'pieChart' }
            ],
            technicalDetails: {
                technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Responsive Design'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Backend Development', 'Database Design', 'Security Integration'],
                features: ['Document Management', 'Workflow Automation', 'Department Reporting', 'User Authorization', 'Data Analysis'],
                description: 'Netbilsis is a comprehensive management system developed for corporate companies. With features such as document management, workflow automation, department reporting, user authorization, and data analysis, it makes companies\' business processes more efficient. The system contributes to the digital transformation of institutions with its user-friendly interface and powerful infrastructure.',
                moduleTypes: ['Document Management', 'Human Resources', 'Finance', 'Sales', 'Reporting']
            }
        },
        {
            title: 'TTB Tavla',
            description: 'Backgammon tournaments organization platform',
            image: '/images/projects/tavla.png',
            icon: 'gamepad',
            features: [
                { text: 'Tournament Organization', icon: 'calendar' },
                { text: 'Player Ranking', icon: 'trophy' },
                { text: 'Multi-language Support', icon: 'globe' },
                { text: 'Tournament Registration System', icon: 'clipboard' },
                { text: 'Tournament Rules', icon: 'info' }
            ],
            technicalDetails: {
                technologies: ['React.js', 'Next.js', 'Tournament Management API', 'Multi-language Support', 'Responsive Design'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Tournament Management System', 'Player Registration System', 'Ranking Algorithm'],
                features: ['Tournament List', 'Player Registration', 'Tournament Ranking', 'Tournament Rules', 'Association and Club Information'],
                description: 'TTB Tavla is a platform that organizes and manages backgammon tournaments in Turkey. It includes tournaments organized by the Turkish Backgammon Federation (TTB), association tournaments, TTB rankings, and tournament rules. Users can register on the platform to participate in tournaments, follow tournament results, and see their places in the TTB ranking. The platform lists tournaments held in different cities, the number of participants, and tournament winners. Additionally, tournament rules, league information, and association/club information are also accessible through the platform.',
                tournamentTypes: ['TTB Tournaments', 'Association Tournaments', 'City Tournaments', 'International Tournaments']
            }
        },
        {
            title: 'Yeşilköy Ayvalık',
            description: 'Real estate project',
            image: '/images/projects/yesilkoy.png',
            features: [
                { text: 'Swimming Pools', icon: 'code' },
                { text: 'Social Areas', icon: 'code' },
                { text: 'Private Security', icon: 'code' },
                { text: 'Mobile Home Concept', icon: 'code' }
            ],
            technicalDetails: {
                technologies: ['React.js', 'Next.js', 'Contact Forms', 'Gallery System', 'Responsive Design'],
                developmentProcess: ['UI/UX Design', 'Frontend Development', 'Project Presentation Pages', 'Contact Form', 'E-Catalog System'],
                features: ['Project Features', 'Project Images', 'House Plans', 'Contact Form', 'E-Catalog Download'],
                description: 'Yeşilköy Ayvalık is a real estate project designed as Ayvalık\'s first natural living area. The project includes social areas, swimming pools, cafeteria, and children\'s play areas. Surrounded by olive groves, the project is located entirely within a green cover. It has features such as electricity, water, drainage infrastructure, pool and social areas, cafeteria, market, children\'s play areas, and central parking. It also offers cleaning service, gardener service, shuttle line to beaches, and 24/7 private security services. In the project consisting of 221 usage areas, the structures are designed as O2 certified standard mobile homes.',
                houseTypes: ['Type 1 House', 'Type 2 House', 'Type 3 House', 'Type 4 House']
            }
        }
    ]
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    
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

const skills = {
    label: 'Skills',
    title: 'My Skills',
    description: 'Core competencies in modern web development',
    
    items: [
        {
            name: 'React.js',
            level: 5,
            icon: 'react',
            description: 'Advanced proficiency in React ecosystem'
        },
        {
            name: 'Next.js',
            level: 5,
            icon: 'nextjs',
            description: 'Expert level in Next.js applications'
        },
        {
            name: 'TypeScript',
            level: 4,
            icon: 'typescript',
            description: 'Strong typing and advanced features'
        },
        {
            name: 'JavaScript',
            level: 5,
            icon: 'javascript',
            description: 'Expert in modern JavaScript'
        },
        {
            name: 'Tailwind CSS',
            level: 5,
            icon: 'tailwind',
            description: 'Mastery in utility-first CSS'
        },
        {
            name: 'Figma',
            level: 4,
            icon: 'figma',
            description: 'UI/UX design and prototyping'
        },
        {
            name: 'Git',    
            level: 4,
            icon: 'git',
            description: 'Version control and collaboration'
        },
        {
            name: 'Node.js',
            level: 3,
            icon: 'node',
            description: 'Server-side development'
        },
        {
            name: 'PHP',
            level: 3,
            icon: 'php',
            description: 'Web development and CMS'
        },
        {
            name: 'Laravel',
            level: 3,
            icon: 'laravel',
            description: 'PHP framework development'
        },
        {
            name: 'MySQL',
            level: 4,
            icon: 'mysql',
            description: 'Database design and optimization'
        },
        {
            name: 'MongoDB',
            level: 3,
            icon: 'mongodb',
            description: 'NoSQL database management'
        }
    ]
}

export { person, social, home, about, work, blog, gallery, skills };