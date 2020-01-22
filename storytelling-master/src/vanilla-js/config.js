var config = {
    style: 'mapbox://styles/connorrothschild/ck5ighe0z0pog1ilkwzpn17b7/draft',
    accessToken: 'pk.eyJ1IjoiY29ubm9ycm90aHNjaGlsZCIsImEiOiJjazVpZTN5ZXAwZG1mM2ptbnowa3I4ZW4yIn0.vLvH5zQVcMV3ArgDoqNPYA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'Since 2014, over 34,000 migrants have died or went missing on their journeys to a better life.',
    subtitle: 'Where?',
    byline: 'Mapping Missing Migrants. By Connor Rothschild',
    footer: 'Source: <a target = "_blank" href = "https://missingmigrants.iom.int">The Missing Migrants Project</a><br>Design: <a target = "_blank" href = "https://connorrothschild.github.io/">Connor Rothschild</a>',
    chapters: [
        {
            id: 'intro-id',
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
            onChapterExit: [
                {
                    layer: 'overview-circles',
                    opacity: 0
                }
            ]
        },
        {
            id: 'circles-2014',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: 'The data stretches back to 2014, when 5,289 migrants died or went missing.',
            location: {
                center: [-10.098,45.402],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'overview-circles',
                //     opacity: 0
                // },
                {
                    layer: 'circles-2014',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'circles-2014',
                    opacity: 0
                }
            ]
        },
        {
            id: 'common-media',
            title: 'In the public eye',
            image: './images/alan-kurdi.jpg',
            description: 'It was during this time of crisis that the international community became exposed to the horrific reality of these migrant deaths, often through images such as this one, which focuses on a three-year-old Syrian refugee named Alan Kurdi. <br>He and his family died in September of 2015 near Bodrum, Turkey. They were on their way to Canada.',
            location: {
                center: [27.246,37.009],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'circles-2014',
                    opacity: 1
                },
                {
                    layer: 'settlement-major-label',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'settlement-major-label',
                    opacity: 1
                },
                {
                    layer: 'circles-2014',
                    opacity: 0
                }
            ]
        },
        {
            id: 'circles-2019',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: 'In the five years since the refugee crisis captured international attention, some nations have made strides to create a safer and more welcoming climate for migrants. Fefugee policy became a key issue in the 2015 election of Canada, the intended destination for Alan Kurdi and his family. <br><br>As these <span style = "color:#0010F0;">&#9673;</span> circles from 2019 show, instances of dead or missing migrants are mostly concentrated in the same place. <br>Thankfully, these deaths are becoming slightly less frequent; in 2019, roughly, 3,400 migrants were found dead or missing.',
            location: {
                center: [-10.098,45.402],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'circles-2014',
                    opacity: 1
                },
                {
                    layer: 'circles-2019',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'circles-2019',
                    opacity: 0
                },
                {
                    layer: 'circles-2014',
                    opacity: 0
                }
            ]
        },
        {
            id: 'mediterranean',
            title: 'Some paths remain more dangerous than others',
            // image: './path/to/image/source.png',
            description: 'After five years of this crisis and tepid responses from national governments, some paths remain more dangerous than others. The most dangerous place for migrants is the Mediterranean Sea, where Alan Kurdi drowned.<br><br>Of the 34,688 people who have died or went missing since 2014, over 55% of them were lost in the Mediterranean.',
            location: {
                center: [14.350,30.65],
                zoom: 3,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                {
                    layer: 'country-label',
                    opacity: 1
                },
                {
                    layer: 'overview-circles',
                    opacity: .51
                },
            ],
            onChapterExit: [
                {
                    layer: 'overview-circles',
                    opacity: 0
                },
                {
                    layer: 'country-label',
                    opacity: 0
                }
            ]
        },
        {
            id: 'mediterranean-focus',
            title: 'The deadliest single incident in the last six years',
            image: './images/two-traffickers.jpg',
            description: 'This region also includes some of the most horrendous, intentional incidents. On April 18, 2015, two human traffickers intentionally capsized a migrant boat somewhere near the coast of Libya. 750 migrants died of drowning and an additional 252 went missing.<br><br>In total, 1,022 migrants died or went missing—27 survived.',
            location: {
                center: [12.350,34.65],
                zoom: 5,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                {
                    layer: 'country-label',
                    opacity: 1
                },
                {   
                    layer: 'overview-circles',
                    opacity: .3
                },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: .9
                },
                {
                    layer: 'deadliest-incident-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-label',
                    opacity: 0
                },
                {   
                    layer: 'overview-circles',
                    opacity: .51
                },                
                {
                    layer: 'deadliest-incident-text',
                    opacity: 0
                },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: 0
                }
            ]
        },
        {
            id: 'italy-focus',
            title: 'A deadly trend',
            // image: './images/two-traffickers.jpg',
            description: 'This incident had been one of many. Seven months prior to the Libyan shipwreck, human traffickers had intentionally sunk another boat with over 500 Syrian, Palestinian, Egyptian, and Sudanese migrants.',
            location: {
                center: [12.350,34.65],
                zoom: 5,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                {
                    layer: 'country-label',
                    opacity: 1
                },
                {   
                    layer: 'overview-circles',
                    opacity: .3
                },
                {
                    layer: 'italy-focus',
                    opacity: .9
                },
                {
                    layer: 'italy-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-label',
                    opacity: 0
                },
                {   
                    layer: 'overview-circles',
                    opacity: .51
                },                
                {
                    layer: 'deadliest-incident-text',
                    opacity: 0
                },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico',
            title: 'Closer to home',
            // image: './path/to/image/source.png',
            description: 'A large number of migrants have also died near the US-Mexico border. Since 2014, over 2,400 migrants have died or gone missing in this area, making it the third most dangerous region in the world for migrants. It is only surpassed by the Mediterranean and North Africa.',
            location: {
                center: [-110.76662, 20.836],
                zoom: 2.66,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-label',
                    opacity: 1
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'country-label',
                    opacity: 0
                }, 
            ]
        },
        {
            id: 'us-mexico-over-time',
            image: './images/mexico-over-time.jpg',
            description: 'This region is worth exploring because it has experienced an upsurge in both migration and migrant deaths in the past few years. Since 2014 (the first year data was collected), the region has observed a 62% increase in migrant deaths.  <br>In 2019, 497 migrants died or went missing near the US-Mexico border.',
            location: {
                center: [-110.76662, 20.836],
                zoom: 2.66,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'country-label',
                    opacity: 1
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'country-label',
                    opacity: 0
                }, 
            ]
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
                    layer: 'country-label',
                    opacity: 1
                }, 
            ],
            onChapterExit: [
                {
                    layer: 'country-label',
                    opacity: 0
                }, 
            ]
        },
        {
            id: 'us-mexico-two-cities',
            // title: 'Closer to Home',
            // image: './path/to/image/source.png',
            description: "In these areas, you'll notice a lot of small individual circles. That means that these deaths were individually recorded. <br>Rather than being the result of drowning or widespread sickness, these deaths were likely experienced alone.",
            location: {
                center: [-112.400, 27.710],
                zoom: 4.67,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'us-mexico-tucson',
            title: 'Southern Arizona',
            // image: './path/to/image/source.png',
            description: "One of these areas is southern Arizona. Cities such as Tucson and Sierra Vista witness much migration from the US-Mexico border, and much of it leads to treacherous outcomes. Independent NGOs have <a target = '_blank' href = 'https://humaneborders.org/wp-content/uploads/deathmapcumulative_poster_2018.pdf'>estimated that</a>, since 1999, over 3300 migrants have died while crossing the Arizona border. <br><br>The largest concentration is in Pima County. In 2018 alone, the remains of 127 migrants were <a target= '_blank' href = 'https://www.azcentral.com/story/news/politics/border-issues/2019/01/16/remains-127-dead-migrants-recovered-southern-arizona-2018/2575080002/'>given to the Pima County Medical Examiner's Office</a>.",
            location: {
                center: [-113.439, 32.031],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'state-label',
                    opacity: 1
                }, 
                {
                    layer: 'pima-county-shape',
                    opacity: .7
                },
                {
                    layer: 'pima-county-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'state-label',
                    opacity: 0
                }, 
                {
                    layer: 'pima-county-shape',
                    opacity: 0
                },
                {
                    layer: 'pima-county-text',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico-brooks-county',
            title: 'Brooks County',
            // image: './path/to/image/source.png',
            description: "The other area of focus is the Southeastern part of Texas. There are deaths scattered throughout, but the greatest concentration is in one place: Brooks County. <br><br>Over <a target = '_blank' href = 'https://www.nytimes.com/2019/04/18/us/mexico-border-deaths.html'>640 migrants' remains</a> have been found in this county since 2009.",
            location: {
                center: [-99.530, 26.919],
                zoom: 6.23,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'state-label',
                    opacity: 1
                }, 
                {
                    layer: 'brooks-county-shape',
                    opacity: .7
                },
                {
                    layer: 'brooks-county-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'state-label',
                    opacity: 0
                }, 
                {
                    layer: 'brooks-county-shape',
                    opacity: 0
                },
                {
                    layer: 'brooks-county-text',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico-brooks-county-fraction',
            // title: 'Brooks County',
            // image: './path/to/image/source.png',
            description: "If these dead or missing migrants were residents of Brooks County, they would make up 8.9% of its population.",
            location: {
                center: [-99.530, 26.919],
                zoom: 6.23,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'state-label',
                    opacity: 1
                }, 
                {
                    layer: 'brooks-county-shape',
                    opacity: .7
                },
                {
                    layer: 'brooks-county-text',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'state-label',
                    opacity: 0
                }, 
                {
                    layer: 'brooks-county-shape',
                    opacity: 0
                },
                {
                    layer: 'brooks-county-text',
                    opacity: 0
                }
            ]
        },
        {
            id: 'known-and-unknown',
            title: 'Known and unknown',
            // image: './path/to/image/source.png',
            description: "There's also something peculiar about these two places: unknown causes of death. <br>Although most recorded deaths share similar causes, such as drowning, these deaths in Texas and Arizona follow different paths.<hr>In this view, <br><span style = 'color:#0FA800;'>&#9673;</span> represent deaths from hyperthermia <br><span style = 'color:#1800E0;'>&#9673;</span> represent deaths from drowning <br><span style = 'color:white;'>&#9673;</span> represent unknown deaths <br><span style = 'color:#A80100;'>&#9673;</span> represent all other causes",
            location: {
                center: [-112.400, 27.710],
                zoom: 4.67,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'state-label',
                    opacity: 1
                }, 
                {
                    layer: 'overview-circles',
                    opacity: 1,
                },
                {
                    layer: 'known-and-unknown',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'state-label',
                    opacity: 0
                }, 
                {
                    layer: 'known-and-unknown',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'known-and-unknown-macro-view',
            // image: './path/to/image/source.png',
            description: "While the rest of the world tells a tragic story, the story of the U.S. is both tragic and mysterious. How can a nation as developed as ours fail its migrants so severely?",
            location: {
                center: [-24.094,2.358],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51,
                },
                {
                    layer: 'known-and-unknown',
                    opacity: .51,
                }
            ],
            onChapterExit: [
                {
                    layer: 'known-and-unknown',
                    opacity: 0
                }
            ]
        },

        {
            id: 'final',
            title: 'Since 2014, over 34,000 migrants have died or went missing on their journey to a better life.',
            // image: './path/to/image/source.png',
            description: "<p>What can you do to help?<br>The following organizations fight for immigrant safety in the U.S. and abroad:<br></p><ul><li><a target = '_blank' href='https://asylumadvocacy.org/'>Asylum Seeker Advocacy Project</a></li><li><a target = '_blank' href='https://www.raicestexas.org/'>RAICES</a></li><li><a target = '_blank' href='https://las-americas.org/'>Las Americas Immigrant Advocacy Center</a></li><li><a target = '_blank' href='https://www.refugeesinternational.org/'>Refugees International</a></li></ul>",
            location: {
                center: [-24.094,2.358],
                zoom: 1.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51,
                },
                {
                    layer: 'known-and-unknown',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'known-and-unknown',
                //     opacity: 0
                // }
            ]
        },
    ]
};
