import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Rich Mckay, Andy Sullivan",
            "title": "Trump travels to Atlanta for mug shot, booking in election case - Reuters",
            "description": "Donald Trump arrived in Atlanta on Thursday evening to get his mug shot taken <a href=\"/world/us/trumps-legal-woes-mean-brief-stop-atlanta-jail-2023-08-24/\">at a local jailhouse</a> as part of a wide-ranging criminal case stemming from the former U.S. preside…",
            "url": "https://www.reuters.com/legal/trump-report-atlanta-jail-face-charges-election-subversion-case-2023-08-24/",
            "urlToImage": "https://www.reuters.com/resizer/xPAqCQUx87cWUd7Lq31q2Sp1Nnc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JKATLUE37BLGFLSWL6RMURGZ4U.jpg",
            "publishedAt": "2023-08-24T22:34:00Z",
            "content": "ATLANTA, Aug 24 (Reuters) - Donald Trump arrived in Atlanta on Thursday evening to get his mug shot taken at a local jailhouse as part of a wide-ranging criminal case stemming from the former U.S. pr… [+5330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBC Southern California"
            },
            "author": "Andrew Blankstein, Jonathan Lloyd",
            "title": "OC bar shooter who killed 3 identified as an ex-SoCal police officer - NBC Southern California",
            "description": "The man believed to have opened fire Wednesday night at a crowded Orange County bar, killing three people, was a former law enforcement officer who targeted his…",
            "url": "https://www.nbclosangeles.com/news/local/oc-bar-shooter-mass-shooting-suspect-trabuco-canyon-orange-county-cooks-corner-john-snowling/3212437/",
            "urlToImage": "https://media.nbclosangeles.com/2023/08/cooks-corner-bar-oc-trabuco-canyon-august-24-2023.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2023-08-24T21:41:32Z",
            "content": "The man who opened fire Wednesday night at a crowded Orange County bar, killing three people, was a former Southern California law enforcement officer who targeted his estranged wife, authorities sai… [+3751 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Alexander Tin",
            "title": "New COVID variant BA.2.86 spreading in the U.S. in August 2023. Here are key facts experts want you to know. - CBS News",
            "description": "Officials say testing should still work for the new COVID variant.",
            "url": "https://www.cbsnews.com/news/new-covid-variant-ba286-2023-what-to-know-experts/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2021/06/18/a26bf15d-5dbc-479b-8fd6-e6342d927ff6/thumbnail/1200x630/5e4a444b2538c231e6d93bab07728cd6/hypatia-h_dd57fb94e53193d6b3e50cc0a0e15774-h_1e59bfb69db49010afe30b77e634d668.jpg?v=85153828b1c3c07a041ab8e73ff87e39",
            "publishedAt": "2023-08-24T21:08:00Z",
            "content": "Health authorities and scientists say they are now racing to study BA.2.86, a new strain of the virus that causes COVID-19, after the highly mutated variant was spotted spreading in multiple countrie… [+7388 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Amanda Musa",
            "title": "CDC launches effort to bolster hospital sepsis programs - CNN",
            "description": "In a typical year, at least 1.7 million adults in the US develop sepsis, and at least 350,000 die in the hospital or are moved into hospice care, according to the US Centers for Disease Control and Prevention.",
            "url": "https://www.cnn.com/2023/08/24/health/cdc-sepsis-hospitals/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230612155132-01-cdc-hq-080622-file-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-24T21:02:00Z",
            "content": "In a typical year, at least 1.7 million adults in the US develop sepsis, and at least 350,000 die in the hospital or are moved into hospice care, according to the US Centers for Disease Control and P… [+4869 chars]"
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "Emlyn Travis",
            "title": "Kim Cattrall ad-libbed this 'And Just Like That' moment in season 2 finale - Entertainment Weekly News",
            "description": "\"It's just totally a moment of an actor playing the moment and it's really nice,\" said showrunner Michael Patrick King.",
            "url": "https://ew.com/tv/kim-cattrall-ad-libbed-and-just-like-that-moment-season-2-finale/",
            "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=1%2C56%2C1500%2C806&poi=%5B750%2C260%5D&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F08%2F24%2FKim-Cattrall-Samantha-And-Just-Like-That.jpg",
            "publishedAt": "2023-08-24T21:01:00Z",
            "content": "Warning: This article contains spoilers for the season 2 finale of And Just Like That, \"The Last Supper Part Two: Entreé.\"\r\nTheAnd Just Like That creative team has revealed the sweet little ad-lib th… [+3505 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Adam Clark",
            "title": "Nvidia Stock Hit an Intraday High After Stellar Earnings. What Wall Street Is Saying. - Barron's",
            "description": "Analysts have been upgrading price targets for the chip maker's shares following its impressive report.",
            "url": "https://www.barrons.com/articles/nvidia-wall-street-reaction-stock-price-earnings-87703e67",
            "urlToImage": "https://images.barrons.com/im-436455/social",
            "publishedAt": "2023-08-24T20:56:00Z",
            "content": "Nvidia\r\nshares surged to a record high in intraday trading as analysts welcomed results showing the artificial-intelligence boom is still powering its growth. \r\n Nvidia\r\n(ticker: NVDA) stock was up 4… [+3495 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Anna Chernova, Rob Picheta, Tara John",
            "title": "Putin says Prigozhin was 'talented man' who 'made serious mistakes' in first comments since plane crash - CNN",
            "description": "Russian President Vladimir Putin made his first public comments Thursday on the plane crash believed to have killed Yevgeny Prigozhin, saying the Wagner leader was “talented” but made “serious mistakes in life.”",
            "url": "https://www.cnn.com/2023/08/24/europe/putin-prigozhin-comments-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230204073956-putin-prigozhin-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-08-24T20:46:00Z",
            "content": "Russian President Vladimir Putin made his first public comments Thursday on the plane crash believed to have killed Yevgeny Prigozhin, saying the Wagner leader was talented but made serious mistakes … [+3977 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Gabrielle Fonrouge",
            "title": "Gap reports another period of declining sales across all brands, warns of 'uncertain consumer' - CNBC",
            "description": "Gap reported mixed results on Thursday and underwhelming current-quarter guidance.",
            "url": "https://www.cnbc.com/2023/08/24/gap-gps-earnings-q2-2023.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107252073-1686077299086-gettyimages-1128300965-775307132.jpeg?v=1692908581&w=1920&h=1080",
            "publishedAt": "2023-08-24T20:23:01Z",
            "content": "Pedestrians walk past Old Navy and GAP stores in Times Square, New York City.\r\nGap reported mixed results on Thursday and underwhelming current-quarter guidance as the longtime mall retailer warned o… [+8477 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Doha Madani",
            "title": "75 Pittsburgh officers on leave after hourslong shootout and standoff during eviction attempt - NBC News",
            "description": "At least 75 local law enforcement officers are being placed on leave in Pittsburgh following an hourslong standoff with a man who shot at sheriff's deputies when they went to serve an eviction notice.",
            "url": "https://www.nbcnews.com/news/us-news/75-pittsburgh-officers-leave-hourslong-shootout-standoff-suspect-rcna101668",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230823-pittsburgh-shooter-mn-1305-d12f4b.jpg",
            "publishedAt": "2023-08-24T20:21:40Z",
            "content": "At least 75 local law enforcement officers are being placed on leave in Pittsburgh following an hourslong standoff with a man who shot at sheriff's deputies when they went to serve an eviction notice… [+2196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Katie Kilkenny",
            "title": "Writers Guild Replies to Studios’ Counter Offer: Not “Nearly Enough” - Hollywood Reporter",
            "description": "The update follows a tense back-and-forth between the union and entertainment companies on Aug. 22 following talks.",
            "url": "https://www.hollywoodreporter.com/business/business-news/writers-guild-replies-to-studios-counter-offer-1235573012/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/05/2023_05-WGA-01.jpg?w=1024",
            "publishedAt": "2023-08-24T20:03:45Z",
            "content": "The Writers Guild of America is sharing its perspective on the progress of contract negotiations with studios and streamers since they restarted on Aug. 11. \r\n“The companies’ counteroffer is neither … [+6645 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Shohei Ohtani injury: Angels superstar suffers UCL tear, won't pitch again this season, but could still hit - CBS Sports",
            "description": "The news clouds the future for baseball's most dynamic player ahead of his date with free agency",
            "url": "https://www.cbssports.com/mlb/news/shohei-ohtani-injury-angels-superstar-suffers-ucl-tear-wont-pitch-again-this-season-but-could-still-hit/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/08/24/2ae9bf25-bb4d-4228-9fe2-b785aa5b9773/thumbnail/1200x675/40a18b9a248335e3c087e962387bc8f2/ohtani-getty-32.png",
            "publishedAt": "2023-08-24T19:57:00Z",
            "content": "Los Angeles Angels two-way phenom Shohei Ohtani departed his start Wednesday against the Cincinnati Reds alongside a trainer with what the team called \"arm fatigue.\" Hours later, Angels general manag… [+2925 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Joshua Hawkins",
            "title": "How to Hide Your Phone Number on Android and iPhone - Lifehacker",
            "description": "With these three methods, you can place phone calls anonymously.",
            "url": "https://lifehacker.com/how-to-hide-your-phone-number-on-android-and-iphone-1850771363",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7b5f3866e844c8d55b72bbebb85514cc.jpg",
            "publishedAt": "2023-08-24T19:30:00Z",
            "content": "When you call someone, you usually want them to know who you are. Usually. On the flip side, there are times when you might want or need to hide your phone number from the person on the other end of … [+2784 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Sumayya Ismail",
            "title": "‘A wall of BRICS’: The significance of adding six new members to the bloc - Al Jazeera English",
            "description": "Argentina, Egypt, Ethiopia, Iran, Saudi Arabia and UAE invited to join the grouping of top emerging economies.",
            "url": "https://www.aljazeera.com/news/2023/8/24/analysis-wall-of-brics-the-significance-of-adding-six-new-members",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-23T101005Z_1848209155_RC2MT2A2IB2F_RTRMADP_3_BRICS-SUMMIT-1692848545.jpg?resize=1920%2C1440",
            "publishedAt": "2023-08-24T19:28:18Z",
            "content": "Johannesburg, South Africa The BRICS bloc of top emerging economies have taken a major step in expanding its reach and influence with the announcement that six more nations have been invited join as … [+8344 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Brianna Sacks, Allyson Chiu",
            "title": "Maui fire: Hawaiian Electric faces scrutiny for handling of evidence - The Washington Post",
            "description": "The utility removed damaged poles, lines and other equipment from where the Lahaina fire reportedly started before investigators were able to view the scene.",
            "url": "https://www.washingtonpost.com/climate-environment/2023/08/24/maui-fires-power-utility-lahaina-investigation/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WUUQBQFUW5FZHCUAMTES7QYXN4.jpg&w=1440",
            "publishedAt": "2023-08-24T19:22:34Z",
            "content": "Comment on this story\r\nComment\r\nLAHAINA, Hawaii The Hawaii power utility believed to have started the deadly Lahaina fire removed damaged power poles and other equipment from a key fire scene, potent… [+10131 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "NASA reveals pollution maps gathered by the TEMPO space instrument - Engadget",
            "description": "NASA has published the first maps from its new space-based pollution instrument, TEMPO (Tropospheric Emissions: Monitoring of Pollution). Although you won’t ...",
            "url": "https://www.engadget.com/nasa-reveals-pollution-maps-gathered-by-the-tempo-space-instrument-190539536.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ndVinXg5lpr57v83mVB63Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/1bd84dc0-42ad-11ee-adc3-37f495b94fa0",
            "publishedAt": "2023-08-24T19:06:43Z",
            "content": "NASA has published the first maps from its new space-based pollution instrument, TEMPO (Tropospheric Emissions: Monitoring of Pollution). Although you wont be shocked to learn it reveals higher pollu… [+2442 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Emily Shapiro",
            "title": "Boyfriend arrested in murder of missing North Carolina woman, police say they believe they found remains - ABC News",
            "description": "Allisha Watts had been missing since July 16.",
            "url": "https://abcnews.go.com/US/boyfriend-arrested-murder-missing-north-carolina-woman-police/story?id=102538208",
            "urlToImage": "https://s.abcnews.com/images/US/Allisha-Watts-ht-thg-230824_1692901269492_hpMain_16x9_992.jpg",
            "publishedAt": "2023-08-24T18:52:03Z",
            "content": "Authorities said they believe they've found the remains of 39-year-old Allisha Watts, a North Carolina woman who has been missing for over a month.\r\nWatts' boyfriend, James Dunmore, was arrested Thur… [+1502 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SB Nation"
            },
            "author": "James Dator",
            "title": "HBO BS High review: 10 most shocking revelations from the documentary - SB Nation",
            "description": "These details are unbelievable.",
            "url": "https://www.sbnation.com/college-football/2023/8/24/23844324/hbo-bishop-sycamore-documentary-bill-belichick-review",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/5JsZAbiNoo03L-ErJnIuswA3XoM=/0x25:1280x695/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24871084/bs_high.png",
            "publishedAt": "2023-08-24T18:17:21Z",
            "content": "Do I look cool? I dont look like a con artist? \r\nRoy Johnson, the architect of Bishop Sycamore sits in a dimly lit room, with dire concern about his appearance to a national audience. Within the firs… [+5109 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Alexandra Canal",
            "title": "'Barbie' tops 'Super Mario Bros. Movie' as highest-grossing film of 2023 - Yahoo Finance",
            "description": "\"Barbie\" has officially nabbed the title of highest-grossing movie of the year after topping \"The Super Mario Bros. Movie\" on Wednesday.",
            "url": "https://finance.yahoo.com/news/barbie-tops-super-mario-bros-movie-as-highest-grossing-film-of-2023-172503946.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/WFfNeN_f895dj.wiqam.UQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04ODg-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/7139d400-3a1a-11ee-b7f9-66b2cde1ab20",
            "publishedAt": "2023-08-24T17:25:03Z",
            "content": "Mattel (MAT) and Warner Bros. Discovery's (WBD) \"Barbie\" has officially nabbed the title of highest-grossing movie of 2023, topping Universal's \"The Super Mario Bros. Movie\" according to the latest s… [+2173 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Bryan M. Wolfe",
            "title": "Should you buy the Google Pixel 7 or wait for the Google Pixel 8? - Digital Trends",
            "description": "Google is set to release the new Pixel 8 smartphone lineup, replacing the Pixel 7 and Pixel 7 Pro. Should you wait for the new models?",
            "url": "https://www.digitaltrends.com/mobile/should-you-buy-google-pixel-7-or-wait-for-google-pixel-8/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2023/05/Pixel-7-and-Pixel-7a-Back.jpg?resize=1200%2C630&p=1",
            "publishedAt": "2023-08-24T17:00:34Z",
            "content": "Christine Romero-Chan / Digital Trends\r\nGoogle will soon launch the new Google Pixel 8 smartphone lineup. Although the Google Pixel 7 and Google Pixel 7 Pro are some of the best Android phones, it’s … [+8791 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7306d7bed0a44062bea7fb898a9a2a93&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles, totalResult: parsedData.totalResults, loading: false
        })
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7306d7bed0a44062bea7fb898a9a2a93&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    }

    handleNextClick = async ()=>{
        console.log("Next");
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7306d7bed0a44062bea7fb898a9a2a93&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
    
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
    }

    render() {  
        return (
            <div className='container my-3'>
                <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}

                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem  title={element.title} description={element.description} imgUrl={element.urlToImage} Newsurl={element.url} />
                        </div>
                    })}


                </div>
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-dark" disabled={this.state.page <= 1} type='button' onClick={this.handlePrevClick}> &larr; Previos</button>
                    <button className="btn btn-dark" disabled={this.state.page+1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type='button' onClick={this.handleNextClick}> Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
