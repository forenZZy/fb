import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='Sanya Pig'
            />
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='Andrey Ded '
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc='https://media-exp1.licdn.com/dms/image/C4E03AQGivOvOWtHbhQ/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KLHRHD6oZcHMHCmlVEqS7wGEEnjiYn9HdUzt41SNrcY'
                title='Elon Musk '
            />

        </div>
    )
}

export default StoryReel
