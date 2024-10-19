var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "Documentation This documentation enables you to integrate with our service easily.\nDocumentation Summary Getting StartedChapter 1 Getting Started Build a documentation website for your service using Hugo and hugo-theme-learn in less than an hour.\n--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two]\nInstallationThe following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this great documentation for beginners.\nCreate your project Hugo provides a new command to create a new website.\nhugo new site \u003cnew_project\u003e Install the theme Install the Hugo-theme-learn theme by following this documentation\nThis theme’s repository is: https://github.com/matcornic/hugo-theme-learn.git\nAlternatively, you can download the theme as .zip file and extract it in the themes directory\nContribute to this documentation Feel free to update this content, just click the Edit this page link displayed on top right of each page, and pullrequest it Note Your modification will be deployed automatically when merged.",
    "description": "Documentation This documentation enables you to integrate with our service easily.\nDocumentation Summary Getting StartedChapter 1 Getting Started Build a documentation website for your service using Hugo and hugo-theme-learn in less than an hour.\n--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two]\nInstallationThe following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this great documentation for beginners.",
    "tags": [],
    "title": "Home Page",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Home Page",
    "content": "Chapter 1 Getting Started Build a documentation website for your service using Hugo and hugo-theme-learn in less than an hour.\n--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two]",
    "description": "Chapter 1 Getting Started Build a documentation website for your service using Hugo and hugo-theme-learn in less than an hour.\n--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two]",
    "tags": [],
    "title": "Getting Started",
    "uri": "/getting-started/index.html"
  },
  {
    "breadcrumb": "Home Page \u003e Getting Started",
    "content": "The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this great documentation for beginners.\nCreate your project Hugo provides a new command to create a new website.\nhugo new site \u003cnew_project\u003e Install the theme Install the Hugo-theme-learn theme by following this documentation\nThis theme’s repository is: https://github.com/matcornic/hugo-theme-learn.git\nAlternatively, you can download the theme as .zip file and extract it in the themes directory\nBasic configuration When building the website, you can set a theme by using --theme option. However, we suggest you modify the configuration file (config.toml) and set the theme as the default. You can also add the [outputs] section to enable the search functionality.\n# Change the default theme to be use when building the site with Hugo theme = \"hugo-theme-learn\" # For search functionality [outputs] home = [ \"HTML\", \"RSS\", \"JSON\"] Create your first chapter page Chapters are pages that contain other child pages. It has a special layout style and usually just contains a chapter name, the title and a brief abstract of the section.\n### Chapter 1 # Basics Discover what this Hugo theme is all about and the core concepts behind it. renders as\nHugo-theme-learn provides archetypes to create skeletons for your website. Begin by creating your first chapter page with the following command\nhugo new --kind chapter basics/_index.md By opening the given file, you should see the property chapter=true on top, meaning this page is a chapter.\nBy default all chapters and pages are created as a draft. If you want to render these pages, remove the property draft: true from the metadata.\nCreate your first content pages Then, create content pages inside the previously created chapter. Here are two ways to create content in the chapter:\nhugo new basics/first-content.md hugo new basics/second-content/_index.md Feel free to edit thoses files by adding some sample content and replacing the title value in the beginning of the files.\nLaunching the website locally Launch by using the following command:\nhugo serve Go to http://localhost:1313\nYou should notice three things:\nYou have a left-side Basics menu, containing two submenus with names equal to the title properties in the previously created files. The home page explains how to customize it by following the instructions. When you run hugo serve, when the contents of the files change, the page automatically refreshes with the changes. Neat! Build the website When your site is ready to deploy, run the following command:\nhugo A public folder will be generated, containing all static content and assets for your website. It can now be deployed on any web server.\nNote This website can be automatically published and hosted with Netlify (Read more about Automated HUGO deployments with Netlify). Alternatively, you can use Github pages",
    "description": "The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this great documentation for beginners.\nCreate your project Hugo provides a new command to create a new website.\nhugo new site \u003cnew_project\u003e Install the theme Install the Hugo-theme-learn theme by following this documentation\nThis theme’s repository is: https://github.com/matcornic/hugo-theme-learn.git\nAlternatively, you can download the theme as .zip file and extract it in the themes directory",
    "tags": [],
    "title": "Installation",
    "uri": "/getting-started/installation/index.html"
  },
  {
    "breadcrumb": "Home Page",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Home Page",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
