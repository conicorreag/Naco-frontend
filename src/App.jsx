import React from 'react'
import { Toaster } from 'react-hot-toast';
import Router from './Router'
import AuthProvider from './auth/AuthProvider';
import AttackProvider from './pages/Game/Context/AttackProvider';
import ButtonProvider from './pages/Game/Context/ButtonProvider';


function App() {

  return (
    <>
    {/* cualquier ruta de router va a poder acceder a las cosas de authprovider (token, settoken, logout) */}
      <AuthProvider>
        <ButtonProvider>
          <AttackProvider>
            <Router />
              <Toaster position='bottom-center' toastOptions={
                {
                  style: {
                    background: '#191414',
                    color: 'white',
                    border: '1px solid #2e2c2c'
                  }
                }
              }/>
          </AttackProvider>
        </ButtonProvider>
      </AuthProvider>
    </>
  )
}

export default App
