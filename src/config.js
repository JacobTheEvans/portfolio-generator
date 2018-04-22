// mainColor: '#3399ff',
// secondaryColor: '#a0cfff',

export const theme = {
  main: 'purple',
  secondary: 'red'
}

export const templates = [
  {
    language: 'EN',
    header: {
      brand: 'Jacob Evans',
      slogan: 'Nerdy Developer'
    },
    about: {
      img: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/20246187_10207080425568691_3859849211000359817_n.jpg?_nc_cat=0&oh=5516a8f92fb9379b56c3d191ab3e2365&oe=5B37D4F6',
      description: `I am Jacob Evans. I have a passion for programming and an overwhelming zeal when it comes to learning. I am an avid Linux user, a supporter of open source software, and an advocate of using technology to improve the world. I currently work at Cybus GmbH as a NodeJS IoT Developer.`
    },
    projects: [
      {
        name: 'swagger-validator-middleware',
        description: 'Restify middleware for validating Swagger 2.0 specifications against incoming requests.',
        url: 'https://github.com/JacobTheEvans/swagger-validator-middleware'
      },
      {
        name: 'react-adinkra',
        description: 'West African Adinkra symbols made into a web font wrapped in a react component.',
        url: 'https://github.com/JacobTheEvans/react-adinkra'
      },
      {
        name: 'twitter-crawler',
        description: 'Python crawler bot that maps over a twitter user and makes a network graph of their followers and their followers followers.',
        url: 'https://github.com/JacobTheEvans/twitter-crawler'
      }
    ],
    skills: {
      languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
      frontend: ['React', 'Redux', 'Apollo', 'Angular', 'WordPress'],
      backend: ['Express', 'Restify', 'GraphQL', 'Mongoose', 'Mocha/Chai'],
      databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
      tools: ['Docker', 'Docker-compose', 'Proto.io']
    },
    testimonials: [
      {
        author: 'Jacob Quinn Sanders',
        authorTitle: 'Software Engineer and Storyteller',
        text: 'Jacob is one of those people who\'s always doing something to make himself better. Not only that, he\'s more than willing to share that knowledge to help those around him. He simply doesn\'t stop learning.'
      },
      {
        author: 'Michael Montgomery',
        authorTitle: 'Full-Stack Web Developer and UI/UX Consultant',
        text: 'As a teacher/mentor with V School, Jacob has not only taught me how to write code, but more importantly how to approach tasks with a development-centric mindset. Jacob is an incredibly talented developer whose never-ending thirst for knowledge is matched only by his desire to contribute to the software development community through teaching and taking part in open-source projects. I consider myself extremely lucky to have been one of Jacob\'s students.'
      },
      {
        author: 'Sendus Majanni',
        authorTitle: 'Student From Makkasid/Vschool',
        text: 'Here we are talking about the teacher, programmer and friend Jacob. The person who managed to take normal people, who had zero coding backgrounds and turn them into actual programmers. We are also talking about the person who managed to create an amazing family from a class.'
      }
    ],
    footer: {
      social: [
        {
          link: 'https://github.com/JacobTheEvans',
          icon: 'github'
        },
        {
          link: 'https://www.linkedin.com/in/jacobtheevans',
          icon: 'linkedin'
        },
        {
          link: 'https://twitter.com/jacobtheevans',
          icon: 'twitter'
        },
        {
          link: 'mailto:jacobtheevans@hotmail.com',
          icon: 'comment'
        }
      ],
      year: 2018
    }
  },
  {
    language: 'DE',
    header: {
      brand: 'Jacob Evans',
      slogan: 'Computerfreak'
    },
    headerOverrides: {
      about: 'Über mich',
      skills: 'Fertigkeit',
      projects: 'Projekte',
      testimonials: 'Referenzen'
    },
    about: {
      img: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/20246187_10207080425568691_3859849211000359817_n.jpg?_nc_cat=0&oh=5516a8f92fb9379b56c3d191ab3e2365&oe=5B37D4F6',
      description: `Ich heiß Jacob Evans. Ich liebe es zu programmieren und lernen gern. Ich bin ein begeisterter Linux-Benutzer, und a unterstütze Open-Source-Software, und Verfechter der Verwendung von Technologie zur Verbesserung der Welt. Ich arbeite zur Zeit bei der Cybus GmbH als NodeJS IoT Entwickler.`
    },
    projects: [
      {
        name: 'swagger-validator-middleware',
        description: 'Stellen Sie die Middleware wieder her, um die Swagger 2.0-Spezifikationen für eingehende Anforderungen zu überprüfen.',
        url: 'https://github.com/JacobTheEvans/swagger-validator-middleware'
      },
      {
        name: 'react-adinkra',
        description: 'Westafrikanische Adinkra-Symbole wurden zu einem Web-Font gemacht, der in eine React-Komponente eingewickelt wurde.',
        url: 'https://github.com/JacobTheEvans/react-adinkra'
      },
      {
        name: 'twitter-crawler',
        description: 'Python-Crawler, der ein Netzwerkdiagramm von Twitter-Benutzer-Followern erstellt.',
        url: 'https://github.com/JacobTheEvans/twitter-crawler'
      }
    ],
    skills: {
      sprachen: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
      frontend: ['React', 'Redux', 'Apollo', 'Angular', 'WordPress'],
      backend: ['Express', 'Restify', 'GraphQL', 'Mongoose', 'Mocha/Chai'],
      databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
      werkzeuge: ['Docker', 'Docker-compose', 'Proto.io']
    },
    testimonials: [
      {
        author: 'Jacob Quinn Sanders',
        authorTitle: 'Software Engineer und Geschichtenerzähler',
        text: 'Jacob is one of those people who\'s always doing something to make himself better. Not only that, he\'s more than willing to share that knowledge to help those around him. He simply doesn\'t stop learning.'
      },
      {
        author: 'Michael Montgomery',
        authorTitle: 'Full-Stack-Webentwickler und UI / UX-Berater',
        text: 'As a teacher/mentor with V School, Jacob has not only taught me how to write code, but more importantly how to approach tasks with a development-centric mindset. Jacob is an incredibly talented developer whose never-ending thirst for knowledge is matched only by his desire to contribute to the software development community through teaching and taking part in open-source projects. I consider myself extremely lucky to have been one of Jacob\'s students.'
      },
      {
        author: 'Sendus Majanni',
        authorTitle: 'Student von Makkasid / Vschool',
        text: 'Here we are talking about the teacher, programmer and friend Jacob. The person who managed to take normal people, who had zero coding backgrounds and turn them into actual programmers. We are also talking about the person who managed to create an amazing family from a class.'
      }
    ],
    footer: {
      social: [
        {
          link: 'https://github.com/JacobTheEvans',
          icon: 'github'
        },
        {
          link: 'https://www.linkedin.com/in/jacobtheevans',
          icon: 'linkedin'
        },
        {
          link: 'https://twitter.com/jacobtheevans',
          icon: 'twitter'
        },
        {
          link: 'mailto:jacobtheevans@hotmail.com',
          icon: 'comment'
        }
      ],
      year: 2018
    }
  }
]
