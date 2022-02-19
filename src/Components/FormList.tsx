import React, { useState, useContext } from 'react'
import { AppContext } from '../Contexts/AppCntxt'
import { IState as Props, avatarUrl } from "../App";
import TeamDone from './TeamDone';


interface IProps {
    setUsers: React.Dispatch<React.SetStateAction<Props["users"]>>
    users: Props["users"]
    maxlength: number
}

const FormList: React.FC<IProps> = ({ setUsers, users, maxlength }) => {

   
    let { counTeam, setCounTeam } = useContext(AppContext);
    const { showForm } = useContext(AppContext);

    const [error, setError] = useState<boolean>(false)


    const [input, setInput] = useState({
        img: "https://nirit.website/projects/react-typescript-context/img/avatar5.png",
        name: "",
        position: "",
        note: ""
    })
    
   

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
   


    const checkForm = () => {

        if (input.img === "" || input.name === "" || input.position === "" || input.note === "")        
        setError(true)
         else
            formOk()
    }
        
        
    const formOk = () => {

            if (users.length < 5) 

                if (!input.img || !input.name || !input.position || !input.note)
                                       
            return

                setError(false)
                setCounTeam(counTeam = counTeam + 1);
        

                setUsers([
                    ...users,
                    {
                        name: input.name,
                        position: input.position,
                        img: input.img,
                        note: input.note
                    }
                ]);

            setInput({
                    img: input.img,
                    name: "",
                    position: "",
                    note: ""
            })
            
   }

    

    return (
        <>
            <div className={showForm ? "team-done done-hide" : "team-done done-show"}>
                 <TeamDone/>
            </div>

         <div className={showForm ? "list-form form-show" : "list-form inactive form-hide"}>
            <h1>Create Your Winning Team!</h1>
            <h2>Within giving you the chance to build your own team (without any limitation whatsoever!)..what your Elite Team would look like?</h2>
             <p>👇 Fill in the form below to add your top 5 team members:</p>
            <input 
                type="text"
                onChange={handleChange}
                name="name"
                value={input.name}
                placeholder="Name"
                maxLength={maxlength}
                required
            />
            <input 
                type="text"
                onChange={handleChange}
                name="position"
                value={input.position}
                placeholder="Position"
                maxLength={maxlength}
                required
            />

            <h4>Avatar:</h4>
            <div className="radio-avatar">
                <div>
                    <input type="radio" value={avatarUrl.young} name="img" onChange={handleChange} defaultChecked={true}/>
                    <label htmlFor="Male"><img className="thumb-avatar" alt="" src={avatarUrl.young}/></label>
                </div>

                <div>
                    <input type="radio" value={avatarUrl.female} name="img" onChange={handleChange} />
                    <label htmlFor="Female"> <img className="thumb-avatar" alt="" src={avatarUrl.female}/></label>
                </div>

                <div>
                    <input type="radio" value={avatarUrl.adult} name="img" onChange={handleChange} />
                    <label htmlFor="Other"><img className="thumb-avatar" alt="" src={avatarUrl.adult}/></label>
                </div>

                <div>
                    <input type="radio" value={avatarUrl.other} name="img" onChange={handleChange} />
                    <label htmlFor="Other"><img className="thumb-avatar" alt="" src={avatarUrl.other}/></label>
                </div>

                <div>
                    <input type="radio" value={avatarUrl.unique} name="img" onChange={handleChange} />
                    <label htmlFor="Other"><img className="thumb-avatar" alt="" src={avatarUrl.unique}/></label>
                </div>

            </div>
            

            
            <textarea
                onChange={handleChange}
                name="note"
                value={input.note}
                placeholder="Short Anecdote"
                maxLength={maxlength + 25}
                required
            />

            <div className={error ? "formError" : "formError hide"}>
                Please check your entries and try again.
            </div>

            <button onClick={checkForm}> Add New Team Member</button>

            </div>
            </>
    )
}

export default FormList
