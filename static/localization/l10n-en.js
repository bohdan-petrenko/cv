/**
 * Created by Petrenko on 11.03.2016.
 */
window.l10nEn = {};

window.l10nEn.index = {
    personalSkills: "Personal Skills",
    professionalSkills: "Professional Skills",
    experience: "Experience",
    contacts: "Contacts",
    language: "Українська"
};

window.l10nEn.professionalSkills = {
    programming: "Programming",
    html: "HTML 5",
    css: "CSS 3, Bootstrap 3",
    js: "JavaScript, JQuery, KnockoutJs, AngularJs, RequireJs",
    java: "Java, J2EE, Java Swing",
    spring: "Spring MVC, Spring JDBC, Spring HTTP",
    sql: "SQL",
    networking: "Networking",
    dataFormats: "XML, JSON, YAML, SOAP",
    protocols: "HTTP, HTTPS, WebDav, FTP",
    testing: "Testing",
    junit: "JUnit",
    soapui: "SoapUI",
    tools: "Tools",
    maven: "Maven",
    vsc: "Git, Svn",
    servers: "Apache Tomcat",
    db: "PostgreSQL, MySQL, SQLite",
    idea: "Intellij IDEA, Eclipse",
    microsoft: "Microsoft Word/Excel/PowerPoint/Visio",
    systems: "Systems",
    windows: "Windows XP/7/8/10",
    linux: "Linux Ubuntu/Kubuntu/Mint",
    languages: "Languages",
    ua: "Ukrainian - mother tongue",
    ru: "Russian - mother tongue",
    en: "English - intermediate",
    education: "Education",
    bachelorDegree: "Bachelor degree in System Engineering.",
    bachelorUniversity: "Vinnitsa National Technical University",
    bachelorPeriod: "September 2009 - June 2013",
    masterDegree: "Masters degree in System Engineering.",
    masterUniversity: "Vinnitsa National Technical University",
    masterPeriod: "September 2013 - December 2014",
};

window.l10nEn.experience = {
    projectName: "Project",
    timePeriod: "Time period",
    link: "Visit web site",
    role: "Role",
    tools: "Technologies & tools",
    description: "Description",
    functionality: "Functionality",
    responsibilities: "Responsibilities"
};
window.l10nEn.experience.projects = [
    {
        name: "TAC converter",
        period: "October 2015 – January 2016",
        link: "http://tacconverter.com/",
        role: "Lead frontend developer",
        tools: ["Html 5", "Css 3", "Bootstrap 3", "Bootstrap Material", "JavaScript", "JQuery 2.2", "JQuery UI 1.11",
                "AlertifyJs", "Chosen JQuery", "EasyDropdownJs", "MomentJs", "KnockoutJs 3.3", "DavisJs", "RequireJs",
                "Git"],
        /**Додаток, який дозволяє працювати з базою даних мобільних телефонів та додавати і редагувати дані про пристрій згідно шаблону. Також можна створювати і редагувати шаблони, але це доступно лише адміністратору додатку. Клієнтська частина реалізована у вигляді одно-сторінкового сайту з дотриманням основних канонів матеріал дизайну.*/
        description: "An application that allows you to work with a database of mobile phones and to add and edit data " +
                    "on the device according to the template. You can also create and edit templates , but it is only " +
                    "available to the administrator. The client side is implemented as a single page web site in " +
                    "compliance with the basic canons of material design.",
        functionality: [
            "Add new device using template",
            "Modify existing device",
            "Delete device",
            "Create new template",
            "Modify existing template",
            "Delete template",
            "Feedback"
        ],
        responsibilities: [
            "Developing site structure",
            "Developing site functionality",
            "Developing site design",
            "Bugs fixing"
        ]
    }
];