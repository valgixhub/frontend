import { Navigate, createBrowserRouter } from 'react-router-dom'
import Loader from '@/vendor/Loader'

import App from '@/components/App'

import MainPage from '@/pages/MainPage'
import WalletPage from '@/pages/WalletPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to="/" replace={true} />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        loader: () => {return Loader({
          title: "Valgix"
        })}
      }
    ]
  },

  {
    path: '/wallet',
    element: <App />,
    children: [
      {
        path: '/wallet',
        element: <WalletPage />,
        loader: () => {return Loader({
          title: "Valgix Wallet"
        })}
      }
    ]
  },

  {
    path: '/p2p',
    element: <App />,
    children: [
      {
        path: '/p2p',
        element: <WalletPage />,
        loader: () => {return Loader({
          title: "Valgix Store"
        })}
      }
    ]
  }
])

export default router;