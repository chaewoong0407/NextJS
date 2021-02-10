import React from 'react'
import { useRouter } from 'next/router'

const Profile = () => {
    const router = useRouter()

    return (
        <div>
            <p>Hello, my name is {router.query.name} </p>
        </div>
    )
}

export default Profile
