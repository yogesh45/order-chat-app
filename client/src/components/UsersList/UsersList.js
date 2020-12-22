import React from 'react';
import './UserLists.css';

const UsersList = ({users}) => {
    console.log(users)
    return(
        <div className='usersOuter'>
            <h3 className='headers'>Orders</h3>
            <div className='usersInner'>
                {
                    users.map((user) => {
                        return(
                            <div className='user-order'>
                                <div className='user-name'>
                                    {user.name}
                                </div>
                                <div className='orders'>
                                    {user.items}    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersList;