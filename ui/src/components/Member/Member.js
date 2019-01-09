import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import '../Pastors/pastors.css'

const Member = () => (
    <Query 
    query={gql`
    {
        Member {
            id
          name
          appointed{
            yearAppointed
          }
        }
      }
      
    `} >
        {({loading, error, data}) => {
            if (loading) return <p>loading...</p>
           else if (error) return <p>error</p>

            return data.Member.map(({id,name}) => (
             <div key={id}>
                <p>{` ${name} is a Pastor`}</p>
             </div>

             ))
         }}
    </Query>
    
)

export default Member