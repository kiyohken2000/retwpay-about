module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "What is Retwpay?",
    siteShortTitle: "Retwpay", // Used as logo text in header, footer, and splash screen
    siteDescription: "A brief introduction about my app Retwpay.",
    siteUrl: "https://retwpay-portfolio.web.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/Icon-512.png", // Relative to gatsby-config file

    splashScreen: false, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantin.muenster",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Web app",
            url: "https://votepurchase.net/"
        },
        {
            name: "AppStore",
            url: "https://apps.apple.com/jp/app/retwpay/id1505869896?mt=8"
        },
        {
            name: "Google Play",
            url: "https://play.google.com/store/apps/details?id=net.votepurchase.retwpayapp"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "About",
                url: "/#about",
            },
            {
                name: "Features",
                url: "/#projects",
            },
            {
                name: "Technology",
                url: "/#technology",
            },
        ],
        button: {
            name: "Feedback",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
        {
            name: "Imprint",
            url: "/imprint"
        }
    ]
}