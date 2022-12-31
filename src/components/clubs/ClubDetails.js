import React from 'react';

const styles = {
    paperContainer: {
        height: 123,
        backgroundImage: `url(${'https://user-images.githubusercontent.com/92922987/210137290-ad0139f1-0dc3-4a43-90cd-06435c9f4254.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }
};

export default function ClubDetails () {
    
    return( 
        <>
        <div className='banner-image' style={styles.paperContainer}>
        </div>
        <div className='about-club'>
            <p className='about-text'></p>
            <div className='about-icons'>
            </div>
        </div>
        <div className='club-events'></div>
        <div className='member-benefits'>
            <div className='events-activity'></div>
            <div className='resources'></div>
            <div className='connections'></div>
        </div>
        <div className='team'>
            <div className='team-members'>
                <img />
                <span className='member-name'></span>
                <span className='member-portfolio'></span>
            </div>
        </div>
        </>
    )
}
