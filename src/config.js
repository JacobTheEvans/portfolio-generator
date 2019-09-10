export const theme = {
  main: '#3399ff',
  secondary: '#a0cfff'
}

export const templates = [
  {
    language: 'EN',
    header: {
      brand: 'Jacob Evans',
      slogan: 'Nerdy Developer'
    },
    about: {
      img: 'https://avatars0.githubusercontent.com/u/8763146?s=400&u=a516801fb3a69c366967711ea5c6a1ef57b2b342&v=4',
      description: 'I am Jacob Evans. I have a passion for programming and an overwhelming zeal when it comes to learning. I am an avid Linux user, a supporter of open source software, and an advocate of using technology to improve the world. I currently work at Cybus GmbH as a NodeJS IoT Developer.'
    },
    skills: {
      languages: ['Javascript', 'HTML', 'CSS', 'Python', 'PHP'],
      frontend: ['React', 'Redux', 'Apollo', 'AngularJS', 'WordPress'],
      backend: ['Express', 'GraphQL (Apollo)', 'Restify', 'Mocha/Chai', 'MQTT'],
      databases: ['PostgreSQL', 'InfluxDB', 'Mongo', 'MySQL'],
      tools: ['Docker', 'Docker-compose', 'Grafana', 'Jenkins'],
      aws: ['Clould Formation', 'ECS', 'EC2', 'Cognito']
    },
    projects: [
      {
        name: 'Swagger Validator Middleware',
        description: 'Restify middleware for validating Swagger 2.0 specifications against incoming requests.',
        url: 'https://github.com/JacobTheEvans/swagger-validator-middleware'
      },
      {
        name: 'React Adinkra',
        description: 'Restify middleware for validating Swagger 2.0 specifications against incoming requests.',
        url: 'https://github.com/JacobTheEvans/react-adinkra'
      },
      {
        name: 'Twitter Crawler',
        description: 'Python crawler bot that maps over a twitter user and makes a network graph of their followers and their followers followers.',
        url: 'https://github.com/JacobTheEvans/react-adinkra'
      },
      {
        name: 'GRPC Web Talk',
        description: 'Talk on GRPC and if the GRPC-web library is mature enough for use in production.',
        url: 'https://github.com/HamburgChimps/node-hh-talk-grpc-web-primer'
      },
      {
        name: 'GraphQL Primer Talk',
        description: 'Talk on the basics of GraphQL and whats the uses of GrapQL are in the world today.',
        url: 'https://github.com/HamburgChimps/node-hh-talk-graphql-primer'
      }
    ],
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
      year: 2019
    }
  }
]
