import React from 'react'
import { useAuth } from '../store/auth'


export default function Pay() {

    const {total} = useAuth();
  return (
    <div>
      hi {total}
    </div>
  )
}
