import React, { useState } from 'react'

const data = require('./campsiteData'); //This is the line I am struggling with

const Ext = {
    campsites: [
        {
            id: 0,
            name: 'React Lake Campground',
            image: 'assets/images/react-lake.jpg',
            elevation: 1233,
            description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
        },
        {
          id: 1,
          name: 'Chrome River Campground ',
          image: 'assets/images/chrome-river.jpg',
          elevation: 877,
          description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
        },
        {
            id: 2,
            name: 'Breadcrumb Trail Campground',
            image: 'assets/images/breadcrumb-trail.jpg',
            elevation: 2901,
            description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
        },
        {
            id: 3,
            name: 'Redux Woods Campground',
            image: 'assets/images/redux-woods.jpg',
            elevation: 42,
            description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
        }
    ]
}



const Directory = () => {
    const [campsites, setCampsites] = useState(Ext);

    return (
        <div className="container">
            <div className="row">
                {campsites.campsites.map(camp => {
                    return <CampGrid key={camp.id} campsite={camp} />
                })}
            </div>
        </div>
    )
}

const CampGrid = ({campsite}) => {
    console.log('props', campsite)
    return (
        <div className="col">
            <img src={campsite.image} alt={campsite.name} />
            <h2>{campsite.name}</h2>
            <p>{campsite.description}</p>
        </div>
    )
}

export default Directory;