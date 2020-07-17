import React, { useState, useEffect } from 'react';
import Signin from "../../components/shared/SignIn/Signin";
import {  Redirect, withRouter, useParams } from 'react-router-dom';
import { createUser } from '../../services/users';
import Layout from '../../components/shared/Layout/Layout';


function UserCreate() {

  let params = useParams()

  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('')

  let [created, changeCreated] = useState('no')
  let [user, changeUser] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()
    const useInfo = {
      'name': userName,
      'email': userEmail,
      'password': userPassword,
    }
    console.log(useInfo)
    const createdUser = await createUser(useInfo)
    const userId = createdUser._id
    console.log(userId)
    changeUser(userId)
    console.log(user)
  }

  if (created === 'yes') {
    return <Redirect to={`/userdisplay/${user}`} />
  }

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit} >
          Name <input type="text" value={userName} name='name' onChange={(e) => setUserName(e.target.value)} />
        Email <input type="text" value={userEmail} name='email' onChange={(e) => setUserEmail(e.target.value)} />
        Password <input type="text" value={userPassword} name='password' onChange={(e) => setUserPassword(e.target.value)} />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => changeCreated('yes')}>Take me to my profile and matches</button>
      </div>
      <Signin />
    </Layout>
  )
}

export default withRouter(UserCreate)

