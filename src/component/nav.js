import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/answer' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/history' activeClassName='active'>
            My answers
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/logout' activeClassName='active'>
            logout
          </NavLink>
        </li>
        <li>
          <NavLink to='/poll' activeClassName='active'>
            poll
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}