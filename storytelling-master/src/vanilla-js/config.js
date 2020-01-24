var config = {
    style: 'mapbox://styles/connorrothschild/ck5ighe0z0pog1ilkwzpn17b7/draft',
    accessToken: 'pk.eyJ1IjoiY29ubm9ycm90aHNjaGlsZCIsImEiOiJjazVpZTN5ZXAwZG1mM2ptbnowa3I4ZW4yIn0.vLvH5zQVcMV3ArgDoqNPYA',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    // title: 'Since 2014, over 34,000 migrants have died or went missing.',
    // subtitle: 'Where?',
    // byline: 'Mapping Missing Migrants. By Connor Rothschild',
    footer: 'Source: <a target = "_blank" href = "https://missingmigrants.iom.int">The Missing Migrants Project</a> | Built with <a target = "_blank" href = "https://www.mapbox.com/">Mapbox</a><br>Design: <a target = "_blank" href = "https://connorrothschild.github.io/">Connor Rothschild</a> | Find the source code <a target = "_blank" href = "https://github.com/connorrothschild/map-missing-migrants">here</a>',
    chapters: [
        {
            id: 'title-id',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: '<span style="font-size:24px">Since 2014, over 34,000 migrants have died or went missing on their journeys to a better life. <span style="font-weight:700">Where?</span></span><br><br><i>Mapping Missing Migrants</i> | By <a target = "_blank" href = "https://connorrothschild.github.io/">Connor Rothschild</a><br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
            location: {
                center: [-76.374,26.948],
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
            id: 'intro-id',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: 'The world is facing a migration crisis. In an era of forced exodus and displacement, host governments in developed countries have increasingly turned to turning <em>away</em> migrants. <br>This combination creates a treacherous path for international migrants. Since 2014, nearly 35,000 migrants have died or went missing in their search for a better life.',
            location: {
                center: [-76.374,26.948],
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
            description: 'We have data stretching back to 2014, when 5,289 migrants died or went missing.',
            location: {
                center: [-76.374,26.948],
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
                    opacity: .51
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
            id: 'common-media-continued',
            // title: 'In the public eye',
            // image: './images/alan-kurdi.jpg',
            description: 'Alan Kurdi was one of many.',
            location: {
                center: [27.246,37.009],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'circles-2014',
                    opacity: 1
                },
                {
                    layer: 'overview-circles',
                    opacity: .75
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
                },
                {
                    layer: 'overview-circles',
                    opacity: 0
                }
            ]
        },
        {
            id: 'circles-2019',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: "In the five years since the refugee crisis captured international attention, some nations have made strides to create a safer and more welcoming climate for migrants. Refugee policy became a key issue in Canada's 2015 election, which was the intended destination for Alan Kurdi and his family. <br><br>As these <span style = 'color:#616bff;'>&#9679;</span> circles from 2019 show, instances of dead or missing migrants are mostly concentrated in the same place. <br>Thankfully, these deaths are becoming slightly less frequent; in 2019, roughly 3,400 migrants were found dead or missing (compared to 5,300 in 2014).",
            location: {
                center: [-76.374,26.948],
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
                center: [13.88,33.542],
                zoom: 7.1,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                {
                    layer: 'deadliest-incident-text',
                    opacity: 0.5
                },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: 0.5
                },
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
                    opacity: 0
                },                
                {
                    layer: 'deadliest-incident-text',
                    opacity: 0
                },
                {
                    layer: 'deadliest-incident-focus',
                    opacity: 0
                },
                {
                    layer: 'italy-focus',
                    opacity: 0
                },
                {
                    layer: 'italy-text',
                    opacity: 0
                }
            ]
        },
        {
            id: 'mediterranean-drowning',
            // title: 'Some paths remain more dangerous than others',
            image: './images/drowning.jpg',
            description: "Events like these are far too common. In this area, almost all migrant deaths (93%) are attributable to drowning (represented by <span style = 'color:#616bff;'>&#9679;</span>). The international average is 62.7%",
            location: {
                center: [14.350,30.65],
                zoom: 3,
                pitch: 0,
                bearing: 0
        },
            onChapterEnter: [
                {
                    layer: 'drowning-mediterranean',
                    opacity: .51
                },
                {
                    layer: 'country-label',
                    opacity: 1
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
                },
                {
                    layer: 'drowning-mediterranean',
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
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'country-label',
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
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico-over-time',
            image: './images/mexico-over-time.jpg',
            description: 'This region is worth exploring because it has experienced an upsurge in both migration and migrant deaths in the past few years. Since 2014 (the first year data was collected), the region has observed a 62% increase in migrant deaths.  <br>In 2019, 497 migrants died or went missing near the US-Mexico border.',
            location: {
                center: [-112.400, 27.710],
                zoom: 4.67,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'country-label',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'country-label',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico-two-cities',
            // title: 'Closer to Home',
            // image: './path/to/image/source.png',
            description: 'There are concentrations around the border itself. <br>But there are two places—counties inside the U.S.—which have an abnormal concentration of unaccounted-for migrants.',
            location: {
                center: [-112.400, 26.24],
                zoom: 5.07,
                pitch: 60.00,
                bearing: 16.80
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'fill-extrusion',
                    opacity: .8
                },
                {
                    layer: 'country-label',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'fill-extrusion',
                    opacity: 0
                },
                {
                    layer: 'country-label',
                    opacity: 0
                }   
            ]
        },
        {
            id: 'us-mexico-two-cities-height',
            // title: 'Closer to Home',
            // image: './path/to/image/source.png',
            description: "In these areas, you'll notice a lot of small individual circles. That means that these deaths were individually recorded. <br>Rather than being the result of drowning or widespread sickness, these deaths were likely experienced alone.",
            location: {
                center: [-112.400, 26.24],
                zoom: 5.07,
                pitch: 60.00,
                bearing: 16.80
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'fill-extrusion',
                    opacity: .8
                },
                {
                    layer: 'country-label',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'fill-extrusion',
                    opacity: 0
                },
                {
                    layer: 'country-label',
                    opacity: 0
                }
            ]
        },
        {
            id: 'us-mexico-tucson',
            title: 'Pima County',
            // image: './path/to/image/source.png',
            description: "One of these counties is in southern Arizona. Cities such as Tucson and Sierra Vista witness much migration from the US-Mexico border, and much of it leads to treacherous outcomes. Independent NGOs have <a target = '_blank' href = 'https://humaneborders.org/wp-content/uploads/deathmapcumulative_poster_2018.pdf'>estimated that</a>, since 1999, over 3300 migrants have died while crossing the Arizona border. <br><br>The largest concentration is in Pima County. In 2018 alone, the remains of 127 migrants were <a target= '_blank' href = 'https://www.azcentral.com/story/news/politics/border-issues/2019/01/16/remains-127-dead-migrants-recovered-southern-arizona-2018/2575080002/'>given to the Pima County Medical Examiner's Office</a>.",
            location: {
                center: [-113.439, 32.031],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'state-label',
                    opacity: 1
                }, 
                {
                    layer: 'fill-extrusion',
                    opacity: .8
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
                    layer: 'fill-extrusion',
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
                center: [-99.136, 26.750],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'state-label',
                    opacity: 1
                },
                {
                    layer: 'fill-extrusion',
                    opacity: .8
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
                    layer: 'fill-extrusion',
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
                center: [-99.136, 26.750],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                }, 
                {
                    layer: 'state-label',
                    opacity: 1
                }, 
                {
                    layer: 'fill-extrusion',
                    opacity: .8
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
                    layer: 'fill-extrusion',
                    opacity: 0
                },
                {
                    layer: 'brooks-county-text',
                    opacity: 0
                },                
                {
                    layer: 'overview-circles',
                    opacity: 0
                }
            ]
        },
        {
            id: 'known-and-unknown',
            title: 'Known and unknown',
            // image: './path/to/image/source.png',
            description: "There's also something peculiar about these two places: unknown causes of death. <br>Although most recorded deaths share similar causes, such as drowning, these deaths in Texas and Arizona follow different paths.<hr>In this view, <br><span style = 'color:#0FA800;'>&#9679;</span> represent deaths from hyperthermia <br><span style = 'color:#616bff;'>&#9679;</span> represent deaths from drowning <br><span style = 'color:white;'>&#9679;</span> represent unknown deaths <br><span style = 'color:#A80100;'>&#9679;</span> represent all other causes",
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
                },
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
            image: './images/known-and-unknown.jpg',
            description: "The US-Mexico border is an outlier in this regard. While the international average for unknown causes of deaths is 6.8%, over 5 times that amount (38%) of US-Mexico migrant deaths have no known cause.",
            location: {
                center: [-91.374,10],
                zoom: 1.7,
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
                    layer: 'overview-circles',
                    opacity: 0
                },
                {
                    layer: 'known-and-unknown',
                    opacity: 0
                }
            ]
        },
        {
            id: 'known-and-unknown-heatmap',
            // image: './images/known-and-unknown.jpg',
            description: "Unknown causes of death are far more prevalent along the US-Mexico border than they are elsewhere.<br><br>While the rest of the world tells a tragic story, the story of the U.S. is both tragic and mysterious. How can a nation as developed as ours fail its migrants so severely?",
            location: {
                center: [-91.374,10],
                zoom: 1.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'heatmap-deaths',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap-deaths',
                    opacity: 0
                }
            ]
        },
        {
            id: 'final',
            //title: 'Since 2014, over 34,000 migrants have died or went missing on their journey to a better life.',
            // image: './path/to/image/source.png',
            description: '<span style="font-size:24px">Since 2014, over 34,000 migrants have died or went missing on their journeys to a better life.</span><br><hr> What can you do to help?<br>The following organizations fight for immigrant safety in the U.S. and abroad:<br></p><ul><li><a target = "_blank" href="https://asylumadvocacy.org/">Asylum Seeker Advocacy Project</a></li><li><a target = "_blank" href="https://las-americas.org/">Las Americas Immigrant Advocacy Center</a></li><li><a target = "_blank" href="https://www.refugeesinternational.org/">Refugees International</a></li><li><a target = "_blank" href="https://www.doctorswithoutborders.org/">Doctors Without Borders</a></li></li><li><a target = "_blank" href="https://www.rescue.org/">International Rescue Committee</a></li></ul>',
            location: {
                center: [-91.374,10],
                zoom: 1.7,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'overview-circles',
                    opacity: .51
                },
                {
                    layer: 'known-and-unknown',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'overview-circles',
                    opacity: 0
                }
            ]
        },
    ]
};
