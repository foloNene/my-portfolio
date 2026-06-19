// projects.js — All portfolio project data in one place
// To add a new project, just add a new object to this array
 
const projects = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description:
      'A fully responsive personal developer portfolio built with React.js and CSS. ' +
      'Features smooth scrolling, animated hero section, skills display, and project cards.',
    tags: ['React.js', 'CSS', 'Vite', 'Responsive'],
    liveUrl: 'https://your-portfolio.vercel.app',
    githubUrl: 'https://github.com/yourusername/my-portfolio',
    featured: true,
  },
  {
    id: 2,
    title: 'Todo List App',
    description:
      'A functional todo application built with React.js and useState. ' +
      'Users can add tasks, mark them complete, delete them, and filter by status.',
    tags: ['React.js', 'JavaScript', 'useState', 'CSS'],
    liveUrl: 'https://your-todo.vercel.app',
    githubUrl: 'https://github.com/yourusername/todo-app',
    featured: false,
  },
  {
    id: 3,
    title: 'Weather App',
    description:
      'A weather application that fetches real-time weather data from the OpenWeatherMap API. ' +
      'Users can search for any city and see temperature, humidity, and conditions.',
    tags: ['React.js', 'API Integration', 'fetch()', 'CSS'],
    liveUrl: 'https://your-weather.vercel.app',
    githubUrl: 'https://github.com/yourusername/weather-app',
    featured: false,

  },
]
 
export default projects

