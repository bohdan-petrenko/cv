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
    github: "View on GitHub",
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
        description: "An application that allows to work with a database of mobile phones and to add and edit data " +
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
            "Develop web site structure and navigation",
            "Select libraries and frameworks for web site",
            "Develop user interface design: write css, select icons ect",
            "Develop web site functionality according to customer requirement",
            "Cross browser testing and bugs fixing"
        ]
    },
    {
        name: "GlobalMoney Documentation",
        period: "August 2015 - October 2015",
        link: "http://sandbox.globalmoney.ua/gm-doc",
        role: "Lead developer",
        tools: ["Html 5", "Css 3", "Bootstrap 3", "JavaScript", "JQuery 2.2", "EasyDropdownJs", "MomentJs",
            "KnockoutJs 3.3", "DavisJs", "RequireJs", "Bower", "Java EE", "Spring MVC", "Spring HTTP", "UML", "Maven",
            "Git"],
        description: "Application that contains interactive documentation for GlobalMoney projects. This application " +
            "developed for GlobalMoney agents and partners. Feature of this application is the ability to test the " +
            "functionality of the protocol in real time. The client side is implemented as a single page web site.",
        functionality: [
            "View project protocol",
            "Test protocol performance in real time",
            "Download test client on the chosen programming language"
        ],
        responsibilities: [
            "Develop web site structure and navigation",
            "Select libraries and frameworks",
            "Develop user interface design: write css, select icons ect",
            "Develop whole client side functionality",
            "Writing the protocol for transactions server"
        ]
    },
    {
        name: "Pay Client Web",
        period: "March 2015 - August 2015",
        link: "http://sandbox.globalmoney.ua/pay-client-web",
        role: "Frontend developer, Backend developer",
        tools: ["Html 5", "Css 3", "Bootstrap 3", "JavaScript", "JQuery 2.1", "EasyDropdownJs", "MomentJs",
            "KnockoutJs 3.3", "DavisJs", "RequireJs", "PostgreSQL", "Java EE", "Spring MVC", "Spring JDBC",
            "Spring HTTP", "Junit", "Maven", "Git"],
        /** додаток, призначений для роботи у касових відділеннях ГлобалМані. Для початку роботи необхідно авторизуватись. За допомогою додатку можна здійснювати поповнення послуг і формувати касову документацію. Послуги згруповано за категоріями. Також є пошук послуги за іменем. На різних касових відділеннях список доступних послуг може відрізнятися. Касир може скласти список улюблених послуг для подальшого швидкого доступу до них. Додатком можна користуватися виключно з клавіатури, оскільки реалізовано підтримку гарячих клавіш. Додаток дозволяє переглядати історію платежів, а також друкувати різні види чеків і документів. Клієнтська частина реалізована як односторінковий сайт*/
        description: "Application, designed for GlobalMoney cash branch office workers. Only authorized users can use " +
            "this application. With the application you can pay for services and generate cash documentation. Services " +
            "are grouped by categories. There is a search service by name. At various cash offices the list of the " +
            "available services may vary. The cashier can make a list of favorite services for future quick access. " +
            "There are hot keys support in application. The application allows you to view payment history and print " +
            "various types of checks and cash documents. The client side is implemented as a single page web site.",
        functionality: [
            "View payments history",
            "View payment services and categories: more than 100 services",
            "Pay for services",
            "Favorite services",
            "Cash documentation: 8 types of documents",
            "Cash books",
            "Print payment bills and cash documentation"
        ],
        responsibilities: [
            "Develop application structure",
            "Select libraries and frameworks",
            "Develop user interface design: write css, select icons ect",
            "Develop whole client side and a part of sever side functionality",
            "Write interactive protocol for transactions server",
            "Participate in the development of database",
            "Participate in the development backend REST API"
        ]
    },
    {
        name: "Nova Poshta Pay Client",
        period: "September 2014 - March 2015",
        role: "Developer",
        tools: ["Java", "Java Swing", "JUnit", "Maven", "Svn"],
        description: "Application, designed for Nova Poshta cash branch office workers. Only authorized users " +
            "can use this application. With the application you can pay for services and generate cash documentation. " +
            "Services are grouped by categories. There is a search service by name. The cashier can make a list of" +
            " favorite services for future quick access. There are hot keys support in application. The application " +
            "allows you to view payment history and print various types of checks and cash documents. " +
            "The client side is implemented as a desktop application using Java Swing.",
        functionality: [
            "View payments history",
            "View payment services and categories: more than 20 services",
            "Pay for services",
            "Favorite services",
            "Cash documentation: 4 types of documents",
            "Cash books",
            "Print payment bills and cash documentation"
        ],
        responsibilities: [
            "Develop user interface design: create custom Look&Feel",
            "Develop application functionality"
        ]
    },
    {
        name: "GlobalMoney Technical Support Helpers",
        period: "September 2013 – January 2014",
        role: "Developer",
        tools: ["Java", "Java Swing", "JUnit", "Maven", "Svn"],
        description: "Desktop application designed for GlobalMoney technical support. " +
            "The main goal of the application - automation a same type of work. Application implemented using Java Swing" +
            " and Nimbus Look&Feel.",
        functionality: [
            "Generate SQL requests from .csv files",
            "Load, store and modify information about Nova Poshta departments",
            "Print bills"
        ],
        responsibilities: [
            "Develop whole application functionality"
        ]
    },
    {
        name: "LiveGm",
        period: "February 2013 – August 2013",
        role: "Developer",
        tools: ["Java", "Google Web Toolkit", "Maven", "soapUI", "Svn"],
        description: "Application that allows to activate products promo codes in GlobalMoney payment system. " +
            "Client side implemented as web application using Google Web Toolkit.",
        functionality: [
            "Promo codes processing",
            "Transfer promo code founds to GlobalMoney wallet"
        ],
        responsibilities: [
            "Develop admin web site, that allows application administrators add, remove, modify and activate " +
                "promo codes, view activation history.",
            "Write server site protocol tests on SoapUi and integrate them to Maven build lifecycle."
        ]
    },
    {
        name: "Maven Internationalization Plugin",
        period: "November 2012 – February 2013",
        role: "Developer",
        github: "https://github.com/viktor-podzigun/i18n-maven-plugin",
        tools: ["Java Core", "Java Reflection", "Maven", "JUnit", "Svn"],
        description: "Maven plugin that allows to check internationalization during project building. Plugin disables" +
            " when you skip tests. Plugin has wide range of options to customize by the user.",
        functionality: [
            "Check internationalization during project building",
            "Check the availability of translation for each message"
        ],
        responsibilities: [
            "Develop all plugin functionality",
            "Develop Unit tests"
        ]
    },
    {
        name: "Transactions Server",
        period: "September 2012 - Current",
        role: "Backend developer",
        link: "https://globalmoney.ua/",
        tools: ["Java EE", "Spring MVC", "SimpleXml", "FasterXML", "Wsdl", "JUnit", "Mockito", "Apache Tomcat", "Maven", "Svn"],
        description: "Application developed for GlobalMoney. The application allows to create payments " +
            "in partners systems through Rest Api. Partners has different types of protocols. ",
        functionality: [
            "Check internationalization during project building",
            "Check the availability of translation for each message"
        ],
        responsibilities: [
            "Develop all plugin functionality",
            "Develop Unit tests"
        ]
    }
];