import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0 ) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://image.freepik.com/free-photo/green-smoke-abstract-on-black-background-darkness-concept_55716-86.jpg',
                followed: false,
                fullName: "Tana",
                status: "I am programmer",
                lokation: {city: 'Lunicec', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://st3.depositphotos.com/13324256/17731/i/600/depositphotos_177317492-stock-photo-full-frame-yellow-green-paint.jpg',
                followed: true,
                fullName: "Sasha",
                status: "I am programmer",
                lokation: {city: 'Moskaw', country: 'Russian'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtqKKLXsuvT9w9BEQROcWmjbFG8Mh_gdFhQ&usqp=CAU',
                followed: false,
                fullName: "Ola",
                status: "I am programmer",
                lokation: {city: 'Kiew', country: 'Ukraine'}
            },
            {
                id: 4,
                photoUrl: 'https://99px.ru/sstorage/56/2013/03/mid_90163_6394.jpg',
                followed: false,
                fullName: "Tatsiana",
                status: "I am programmer",
                lokation: {city: 'Warschawa', country: 'Polska'}
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                     <div>
                         {u.followed ?
                             <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> :
                             <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
                </div>
                </span>
                <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.lokation.country}</div>
                       <div>{u.lokation.city}</div>
                   </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;