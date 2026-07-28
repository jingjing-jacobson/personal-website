export const profile = {
  name: 'JingJing Jacobson',
  title: 'Senior Software Engineer',
  location: 'Raleigh, NC',
  email: 'jingjing.jacobson@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jingjing-jacobson/',
  github: 'https://github.com/jingjing-jacobson',
  summary: [
    'Senior software engineer with a drive to craft intuitive, high-impact user experiences at scale. I bridge design and engineering to deliver polished solutions, and take pride in deep product ownership.',
    'In my free time, I enjoy indoor rock climbing, reading, and more recently have been dabbling in DJ-ing!',
  ],
};

export type Role = {
  title: string;
  dates: string;
  description: string;
  tags: string[];
};

export type Employer = {
  company: string;
  roles: Role[];
};

export const experience: Employer[] = [
  {
    company: 'Pendo',
    roles: [
      {
        title: 'Senior Software Engineer',
        dates: '2024 – Present',
        description:
          "Led development of an AI-powered analytics insights feature with automated Slack reporting, plus a complete redesign of the Pendo home page. Implemented WCAG 2.1 AA accessibility improvements across the Analytics suite to meet a major enterprise customer commitment, and shipped a highly requested screenshot capture feature for the tagging workflow. Built the chat interface for Leo, Pendo's AI agent chatbot for analytics. Established as the team's subject matter expert for Pendo's core Tagging product, and co-chair of Pendo's Femmegineers ERG.",
        tags: ['Vue.js', 'Typescript', 'Go', 'Node.js,', 'Express.js'],
      },
      {
        title: 'Software Engineer',
        dates: '2022 – 2024',
        description:
          "Architected side-by-side tagging for Pendo's Visual Design Studio, letting users tag features in a separate browser window alongside their live app instead of through a cramped iframe that got in the way of the product itself. Redesigned the end-to-end user invite flow, introducing team creation as part of the subscription model, and built Suggested Features to fully automate the tagging experience — eliminating the need for CSS expertise.",
        tags: ['Vue.js', 'Typescript', 'Architecture', 'State Management',],
      },
    ],
  },
  {
    company: 'IBM',
    roles: [
      {
        title: 'Software Developer',
        dates: '2021 – 2022',
        description:
          'Owned and developed UI components to display anomalous data for KPIs, using Node, Angular, and Angular Material.',
        tags: ['Angular', 'Node.js'],
      },
      {
        title: 'Associate Software Developer',
        dates: '2020 – 2021',
        description:
          'Built ML pipelines for anomaly detection using Python, Scala, Pandas, and Apache Spark. Owned and built the front end of a web app that tracked security tasks and exported data to Jira and Trello, using React and Carbon Design.',
        tags: ['Python', 'Apache Spark', 'React'],
      },
    ],
  },
  {
    company: 'UNC Department of Economics',
    roles: [
      {
        title: 'Full Stack Developer',
        dates: '2019 – 2020',
        description:
          'Built a full-stack platform that helped honors students stay on track with their thesis — submitting research notes and journal entries, completing daily check-ins, and requesting feedback from their advisor, all in one place. Built the front end in React and the API in Express, backed by PostgreSQL.',
        tags: ['React', 'Express.js', 'PostgreSQL'],
      },
    ],
  },
  {
    company: 'UNC Department of Computer Science',
    roles: [
      {
        title: 'Undergraduate Teaching Assistant',
        dates: '2019 – 2020',
        description: 'Undergraduate Teaching Assistant for a web development course that focused on HTML, CSS, Bootstrap, Javascript, and design principles.',
        tags: ['HTML/CSS', 'JavaScript', 'Bootstrap'],
      },
      {
        title: 'Full Stack Developer',
        dates: '2018 – 2019',
        description:
          "Built a full-stack web app for the department's BS/MS program that let students submit applications and let admins review, accept, or deny them, using PHP and SQL, on the back end and HTML/CSS, jQuery, and Bootstrap on the front end.",
        tags: ['PHP', 'SQL', 'jQuery'],
      },
    ],
  },
  {
    company: 'Deutsche Bank',
    roles: [
      {
        title: 'Technology Analyst Intern',
        dates: 'June 2019 – Aug 2019',
        description:
          'Converted Pentaho KTL transformations into Python scripts to improve processing efficiency. As part of a group intern project, used Vue.js to build the front end for a web app that scraped public sentiment on stocks to surface investment suggestions.',
        tags: ['Python', 'Vue.js'],
      },
    ],
  },
];

export type Education = {
  degree: string;
  dates: string;
  school: string;
  location: string;
};

export const education: Education[] = [
  {
    degree: 'BS Computer Science',
    dates: '2016 – 2020',
    school: 'University of North Carolina at Chapel Hill',
    location: 'Chapel Hill, NC',
  },
  {
    degree: 'High School Diploma',
    dates: '2014 – 2016',
    school: 'The North Carolina School of Science and Mathematics',
    location: 'Durham, NC',
  },
];

export type Project = {
  title: string;
  company: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: 'Leo & Signals',
    company: 'Pendo',
    description:
      "Built the chat interface for Leo, Pendo's AI intelligence layer, and led development of Signals — automated analytics insights delivered straight to Slack — giving customers a conversational, proactive way to understand shifts in their product data.",
    tags: ['Vue.js', 'Langchain', 'Slack API'],
    link: 'https://www.pendo.io/product/leo/',
  },
  {
    title: 'Pendo Analytics',
    company: 'Pendo',
    description:
      "Built and maintained core parts of Pendo's Analytics suite — dashboards, reports, and funnels — giving product teams a clear view into how people use their products.",
    tags: ['Vue.js', 'Analytics'],
    link: 'https://www.pendo.io/product/analytics/',
  },
  {
    title: 'Side-by-Side Tagging',
    company: 'Pendo',
    description:
      "Architected the cross-window communication system behind side-by-side tagging in Pendo's Visual Design Studio, letting users tag features in a separate browser window positioned right alongside their live app instead of through a cramped iframe that got in the way of the product itself.",
    tags: ['Vue.js', 'Architecture', 'State Management'],
    link: 'https://support.pendo.io/hc/en-us/articles/360032293971',
  },
];
