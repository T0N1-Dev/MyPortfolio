import React from 'react';
import '../assets/css/components/slider.css';

const technologies = [
    {
        id: 1,
        name: 'React',
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        id: 2,
        name: 'Node.js',
        img: 'https://img.icons8.com/fluency/240/node-js.png'
    },
    {
        id: 3,
        name: 'MongoDB',
        img: 'https://img.icons8.com/color/96/mongo-db.png'
    },
    {
        id: 4,
        name: 'Express.js',
        img: 'https://img.icons8.com/color/480/express-js.png'
    },
    {
        id: 5,
        name: 'Redux',
        img: 'https://img.icons8.com/color/480/redux.png'
    },
    {
        id: 6,
        name: 'React Router',
        img: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740594999/react-router-svgrepo-com_il0l7e.svg'
    },
    {
        id: 7,
        name: 'JWT',
        img: 'https://img.icons8.com/color/480/java-web-token.png'
    },
    {
        id: 8,
        name: 'Jest',
        img: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740591797/jest-snapshot-svgrepo-com_xykglj.svg'
    },
    {
        id: 9,
        name: 'Python',
        img: 'https://img.icons8.com/color/480/python--v1.png'
    },
    {
        id: 10,
        name: 'Django',
        img: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740587765/django-icon-svgrepo-com_ve7q2c.svg'
    },
    {
        id: 11,
        name: 'jQuery',
        img: 'https://img.icons8.com/ios-filled/250/jquery.png'
    },
    {
        id: 12,
        name: 'PostgreSQL',
        img: 'https://img.icons8.com/color/480/postgreesql.png'
    },
    {
        id: 13,
        name: 'SQLite',
        img: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740587913/sqlite-svgrepo-com_cdkqos.svg'
    },
    {
        id: 14,
        name: 'Firebase',
        img: 'https://img.icons8.com/color/480/firebase.png'
    },
    {
        id: 15,
        name: 'Sass',
        img: 'https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740594744/sass-svgrepo-com_bxczfn.svg'
    },
]

export const Slider = () => {
  return (
    <div className="wrapper">
        {technologies.map((technology, index) => (
            <div 
                key={technology.id}
                className={`item ${'item' + technology.id}`}
                style={{ '--item': index + 1 }}
            >
                <img src={technology.img} alt={`${technology.name}-icon`} className='technology-slider' width="50" height="50" loading='lazy'/>
            </div>
        ))}
    </div>
  )
}