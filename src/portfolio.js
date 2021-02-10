/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Caio Silveira Telles',
  title: "Bem vindo",
  subTitle: emoji(
    'Meu nome é Caio Silveira Telles  🚀, tenho 19 anos Atualmente curso Ciências da Computação na Univem Tenho experiência em Desenvolvimento Web com JavaScript / Reactjs / Nodejs / React Native / Laravel,Além de programar em ADVPL(advanced Protheus language).'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1DlyVNlEvxiNcVug-JOvIiYQH4iCLFZxp/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/CaioSilveiraTelles',
  linkedin: 'https://www.linkedin.com/in/caio-silveira-telles-9750301a3/',
  gmail: 'caiosilveiratelles@gmail.com',
  instagram: 'https://www.instagram.com/caiosilveira___/?hl=pt-br',
  facebook: 'https://www.facebook.com/caio.silveiratelles/',
  twitter: 'https://twitter.com/silveira_telles',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'Ferramentas',
  subTitle: 'System Analist|Full Stack Developer | ',
  skills: [
    emoji(
      '⚡ Desenvolvo interfaces de usuário / front-end altamente interativas para  aplicativos web e móveis.'
    ),
    emoji('⚡ Desenvolvimento de Aplicações desktop.'),
    emoji(
      '⚡ Integração de outros Sistemas por meio de API/SOAP.'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'PHP',
      fontAwesomeClassname: 'fab fa-php',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
  

    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Centro Universitário Eurípides de Marília - UNIVEM',
      logo: require('./assets/images/logo_univem.png'),
      subHeader: 'Computer Science',
      duration: 'Janeiro 2019 - Janeiro 2022',
      desc: 'Participated in the research  and published 3 papers.',
      descBullets: [
        'Analise das necessidades dos usuários, desenvolvimento de softwares e aplicativos ',
    
	' Gerenciamento de  equipes de criação e instalação de  sistemas de computação. Criação de ferramentas de informática,  softwares ',
      ],
    },
    {
      schoolName: 'Fundação Getulio Vargas',
      logo: require('./assets/images/fgv_nacional.png'),
      subHeader: 'Gestão Estratégica da Tecnologia da Informação',
      duration: 'Setembro 2019 - Fevereiro 2020',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: [' Entendimento sobre conceitos e técnicas associados à gestão de TI',
					'Visão da área de TI como estratégica para as empresas',
					'Conhecimento sobre as principais tendências relacionadas à Tecnologia da Informação.'],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend Node/Laravel',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming Web',
      progressPercentage: '60%',
    },
	
	{
      Stack: 'Full stack Protheus(Advpl)',
      progressPercentage: '100%',
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'System Analist',
      company: 'ZDA ALIMENTOS SA',
      companylogo: require('./assets/images/zda.jpg'),
      date: 'Fevereiro 2019 – Present',
      desc:
        'Atividades e Responsabilidades',
      descBullets: [
        'Programação em ADVPL, desenvolver, testar e implementar, identificar e orientar na solução de problemas, codificar e realizar os testes;',
        'Gerenciamento de acessos, manutenção, disponibilidade de customizações e workflows responsável pelos módulos, Faturamento, Compras, PCP, SIQUALITY, dentre outros.',
		'Criação de sistemas externos , como banco de talentos Desenvolvido em Laravel | MySql|Node JS| , Sistema para armazenar futuro candidatos a vagas da empresa http://cv.zdalimentos.com.br/'
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'JG2 TELECOMUNICAÇOES LTDA.',
      companylogo: require('./assets/images/net.png'),
      date: 'Janeiro 2017 – Fevereiro 2019',
      desc:
        'Atividades e Responsabilidades',
		 descBullets: [
        'Implementar o software backend de acordo com as especificações.',
        'Monitorar e apoiar serviços, no que diz respeito aos recursos de HW e ao consumo de rede.',
		'Realizar desde a unidade até os testes de integração e carga para garantir que seu software atenda aos requisitos funcionais e não funcionais',
		'Analisar, isolar e resolver problemas. Aja para evitar problemas,Avaliar e modificar o desempenho do software no ambiente em nuvem',
		'Impor integração contínua e entrega contínua dos componentes de software'

      ],
	},
  
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'CaioSilveiraTelles', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Projetos',
  subtitle: 'Sistema De Controle de estoque',
  projects: [
    {
      image: require('./assets/images/apple-touch-icon.png'),
      link: 'http://silveiradesenvolvedortestes.epizy.com/index.php/login',
    },
   
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'Eventos',
  subtitle: emoji(
    ''
  ),

  talks: [
    {
      title: 'Criar novas ações para o Google Assistant',
      subtitle: 'Participação maior evento do google no Brasil',
      slides_url: 'https://docs.google.com/presentation/d/1PBdtb9zxKKAKF2PYVa8IVxjtdy5XKh05KLOqwzKNFkI/edit',
      event_url: 'https://devfest.com.br',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
 
};

// Twitter Section

const twitterDetails = {
  userName: 'silveira_telles', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
