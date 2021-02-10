import React from 'react';
import Link from 'next/link';

const ProfileLink = props => (
  <div>
    <Link href={`/profile?name=${props.name}`}>
      <a>Go to {props.name}'s profile</a>
    </Link>
  </div>
)

const index = () => {
  return (
    <div>
      <h1>Friends List</h1>
      <ProfileLink name="wougnsub"/>
      <ProfileLink name="chaewoong"/>
      <ProfileLink name="jaewon"/>
    </div>
  )
}

export default index
