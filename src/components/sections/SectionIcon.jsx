import React from 'react'
import './sectionIcon.scss'

const SectionIcon = ({name}) => {
    return (
        <div className='section__icon'>
            <p className='section__icon__p'></p>
            <p className='section__icon__title'>{name}</p>
        </div>
    )
}

export default SectionIcon