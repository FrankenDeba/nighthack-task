import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import { AuthContext } from "../../App"
import styles from "./Github.module.css"
function Github() {
    const [ repos, setRepos ] = useState([])
    const { state, dispatch } = useContext(AuthContext);
    const [ avatar, setAvatar ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    useEffect(() => {
       setIsLoading(true)
       axios.get(`https://api.github.com/users/${state.user.login}/repos`) 
       .then(res => {
           console.log("state: ",res);
           setIsLoading(false)
           let repos = []
           repos = res.data.map(repo => {
               return {
                   id: repo.id,
                   fullName: repo.full_name,
                   url: repo.html_url,
               }
           })
           setRepos(repos)
           setAvatar({...avatar,
            image: state.user.avatar_url,
            url: state.user.html_url,
            userName: state.user.login,
        })
       })
       .catch(err => {
           console.log("error: ",err);
       })
    },[])

    useEffect(() => {
        console.log("repos: ",repos);
    },[repos])

    return (
        <div className = {styles.container}>
            {isLoading ? 
            <div className = {styles.loaderContainer}>
                <div className = {styles.loader}></div>
            </div>
            :
            <div className = {styles.main}>
                <div className = {styles.avatarDetails}>
                    <div className = {styles.avatar}>
                        <a href = {avatar.url}>
                            <img src = {avatar.image} alt = "avatar"></img>
                        </a>
                    </div>
                    <span>
                        {avatar.userName}
                    </span>

                </div>
                
                <ul>
                    {repos.map(repo => {
                        return <a className = {styles.repoHref} href = {repo.url}>
                                    <li className = {styles.repoLink} key = {repo.id}>
                                        <i className="fa fa-square repoIcon" aria-hidden="true"></i>
                                        &nbsp;&nbsp;{repo.fullName}
                                    </li>
                                </a>
                    })}
                </ul>
            </div>
            }
            
        </div>
    )
}

export default Github
