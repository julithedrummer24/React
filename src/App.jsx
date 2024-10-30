import './app.css';
import { CardFollow } from './CardFollow.jsx';


// lista de fetch o peticion de arrays

const users = [
    {
        isFollow: false,
        userName: 'Juliancho1127',
        name: 'Julian andres Yamarte Castellanos'
    },
    {
        isFollow: true,
        userName: 'estebancho',
        name: 'Estaban Yamarte Castellanos'
    },
    {
        isFollow: false,
        userName: 'bdanelly',
        name: 'Danelly Bohorquez'
    }
]
export function App(){

    return(
        // estilos de padrea
        <section className='app'>
            {
                users.map(user => {
                    const {userName, name, isFollow} = user
                    return(
                        <CardFollow
                        // siempre usar un identificador o id unico
                        key={userName}
                        userName={userName}
                        initialFollow={isFollow}
                        >
                        {name}
                        </CardFollow>
                    )
                })
            }
        </section>
    )
}
