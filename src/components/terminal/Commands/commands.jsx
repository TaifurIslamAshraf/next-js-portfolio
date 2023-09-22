export const commands = {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    about: {
      description: "About Me.",
      usage: "about",
      fn: () => {
        return "About Me.\n---\nI'm a passionate MERN stack web developer with a knack for creating robust web applications. With a focus on delivering exceptional user experiences, I thrive on transforming complex ideas into elegant solutions. Client satisfaction is my top priority, and I approach every project with a detail-oriented and client-focused mindset.\n";
      },
    },
    linkedin: {
      description: "Opens my Linkedin Profile.",
      usage: "linkedin",
      fn: () => {
        window.open("https://www.linkedin.com/in/mdtaifur/", "_blank");
        return "opening twitter handle...";
      },
    },
    github: {
      description: "Opens my GitHub Profile.",
      usage: "github",
      fn: () => {
        window.open("https://github.com/TaifurislamAshraf", "_blank");
        return "opening github account...";
      },
    },
    cv: {
      description: "Download my cv.",
      usage: "cv",
      fn: () => {
        window.open(
          "https://drive.google.com/file/d/1ACkQAuLQJIatCcC5DbcbtIiE7y73vMMu/view",
          "_blank"
        );
        return "downloading my cv...";
      },
    },
    skills: {
      description: "Skills I have.",
      usage: "skills",
      fn: () => {
        return `
                      these are the skills I have.\n---\n
                      React.js  -
                      Next.js           
                      Node.js         
                      Express.js     
                      mongodb    
                      Other dev tool \n---\n
                  `;
      },
    },
  
    editor: {
      description: "Details about my current editor",
      usage: "editor",
      fn: () => {
        return `
                      Editor: Visual Studio Code\n
                      Theme : Catpuccin\n
                      Font  : Fira Code
                  `;
      },
    },
    repo: {
      description: "Opens my github repository.",
      usage: "repo",
      fn: () => {
        window.open(
          "https://github.com/TaifurIslamAshraf?tab=repositories",
          "_blank"
        );
        return "opening repository...";
      },
    },
  };
  
  export const overwrites = {
    help: {
      description: "List all available commands",
      usage: "help",
    },
    clear: {
      description: "Clears the terminal",
      usage: "clear",
    },
  };
  