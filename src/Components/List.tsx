import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppCntxt'
import { IState as Props } from "../App";

interface IProps {
    users: Props["users"]
}


const List: React.FC<IProps> = ({ users }) => {

    let { counTeam, setCounTeam } = useContext(AppContext)
    let { showForm } = useContext(AppContext)

    const removeTmt = ({ target, currentTarget }: React.MouseEvent<HTMLElement>) => {
        setCounTeam(counTeam = counTeam - 1);
        currentTarget.classList.add('hide');
    }

   
    const renderList = (): JSX.Element[] => {
 
        return users.map((user, index) => {
            return (
                <li key={index} className="list-item" onClick={removeTmt}
                    onChange={
                    (e: React.FormEvent<EventTarget>): void => {
                        e.preventDefault()
                    }}>
                    <img className="item-avatar inactive" alt="" src={user.img} />
                    <h2>{user.name}</h2>
                        <h3>{user.position}</h3>
                    <p className="item-desc inactive">{user.note}</p>
                    </li>                                 
            )
        })
    }

    return (
        <div className="team-all">

            <h2 className={showForm ? "hide" : "team-title "}>[ My Elite Team - Top 5! ]</h2>

            <div className="team-list">
                <ul>
                    {renderList()}
                </ul>
            </div>
        </div>
    )
    
}

export default List

