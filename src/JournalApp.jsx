import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const JournalApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter/>
      </AppTheme>
    </>
  )
}
