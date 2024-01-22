import React, { useState, useContext } from 'react'
import { AllDataContext } from '../App'
import Card from 'react-bootstrap/Card';

export function Alldata() {
  const users = useContext(AllDataContext);
  const balance = users.balance;

  const User = () => {
    const newUser = users.map((user, i) => {
      const name = user.name
      const email = user.email
      const password = user.password
      const balance = user.balance
      return (
        <Card
          bg='light'
          key='light'
          text='dark'
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{name}</Card.Header>
          <Card.Body>
            <Card.Title>{email}</Card.Title>
            <Card.Title>Password: {password}</Card.Title>
            <Card.Title>Balance: ${balance}</Card.Title>
          </Card.Body>
        </Card>
      )
    })

    return newUser;
  }

  return (
    <>
      <User />
    </>
  )
}