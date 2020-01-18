var config = {
    style: 'mapbox://styles/connorrothschild/ck5ighe0z0pog1ilkwzpn17b7',
    accessToken: 'pk.eyJ1IjoiY29ubm9ycm90aHNjaGlsZCIsImEiOiJjazVpZTN5ZXAwZG1mM2ptbnowa3I4ZW4yIn0.vLvH5zQVcMV3ArgDoqNPYA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Since 2014, over 34,000 migrants have died on their journeys to a better life.',
    subtitle: 'What are their stories?',
    byline: 'Mapping Missing Migrants. By Connor Rothschild',
    footer: 'Source: Missing Migrants Project. https://missingmigrants.iom.int/downloads',
    chapters: [
        {
            id: 'slug-style-id',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: 'The world is facing a migration crisis. In an era of forced exodus and displacement, host governments in developed countries have increasingly turned to turning <em>away</em> migrants. <br>This combination creates a treacherous path for international migrants. Since 2014, nearly 35,000 migrants have died or went missing in their search for a better life.',
            location: {
                center: [-10.098,45.402],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }
            ],
            onChapterExit: []
        },
        {
            id: 'mediterranean',
            title: 'Some paths are more dangerous than others.',
            // image: './path/to/image/source.png',
            description: 'The most dangerous place for migrants is the Mediterranean Sea. <br>Of the 34,688 people who died or went missing on their journeys, 55.6% of them died in the Mediterranean.',
            location: {
                center: [14.350,30.65],
                zoom: 3,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                // {
                //     layer: 'overview-circles',
                //     opacity: .51
                // },
            ],
            onChapterExit: []
        },
        {
            id: 'mediterranean-focus',
            title: 'The deadliest single incident in the last six years:',
            // image: './path/to/image/source.png',
            description: 'One incident, on April 18, 2015, took a higher-than-usual toll, when 750 migrants died of drowning and an additional 252 went missing somewhere between Lampedusa and Libya.<br>In total, 1,022 migrants died or went missing.',
            location: {
                center: [12.350,34.65],
                zoom: 5,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                {   
                    layer: 'overview-circles',
                    opacity: .3
                },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: .9
                }
            ],
            onChapterExit: [
                {   
                    layer: 'overview-circles',
                    opacity: .51
                },                
                // {
                //     layer: 'deadliest-incident-background',
                //     opacity: 0
                // },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico',
            title: 'Closer to Home',
            // image: './path/to/image/source.png',
            description: 'A large number of migrants have also died near the US-Mexico border. In total, 2,405 migrants have died or gone missing in this area, making it the third most dangerous region in the world for migrants. It is only surpassed by the Mediterranean and North Africa. <br><br>This region is worth exploring because it has experienced an upsurge in both migration and migrant deaths in the past few years. Since 2014 (the first year data was collected), the region has observed a 62% increase in migrant deaths.  <br>In 2019, 497 migrants died or went missing near the US-Mexico border.',
            location: {
                center: [-110.76662, 20.836],
                zoom: 2.66,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'us-mexico-two-cities',
            // title: 'Closer to Home',
            // image: './path/to/image/source.png',
            description: 'There are concentrations around the border itself. <br>But there are two places—inside the U.S.—which have an abnormal concentration of unaccounted-for migrants.',
            location: {
                center: [-112.400, 27.710],
                zoom: 4.67,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'heatmap-deaths',
                    opacity: 1,
                    weight: 1,
                    intensity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico-tucson',
            title: 'Southern Arizona',
            // image: './path/to/image/source.png',
            description: "One of these areas is southern Arizona. Cities such as Tucson and Sierra Vista witness much migration from the US-Mexico border, and much of it leads to treacherous outcomes. <br>In 2018, the remains of 127 migrants were <a target= '_blank' href = 'https://www.azcentral.com/story/news/politics/border-issues/2019/01/16/remains-127-dead-migrants-recovered-southern-arizona-2018/2575080002/'>given to the Pima County Medical Examiner's Office</a>.",
            location: {
                center: [-113.439, 32.031],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'us-mexico-brooks-county',
            title: 'Brooks County',
            // image: './path/to/image/source.png',
            description: "The other is in the Southeastern part of Texas. There are deaths scattered throughout, but the greatest concentration is in one place: Brooks County. <br>Over <a target = '_blank' href = 'https://www.nytimes.com/interactive/2017/05/04/us/texas-border-migrants-dead-bodies.html'>500 migrants' remains</a> have been found in this county since 2009.",
            location: {
                center: [-99.530, 26.919],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
