import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Settings from './pages/Settings'
import Users from './pages/Users'
import Account from './pages/Account'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import { GlobalStyles } from "./styles/GlobalStyle";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";
import Booking from './pages/Booking'
import Checkin from "./pages/Checkin";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
})

function App() {
  return (
    <DarkModeProvider>

      <QueryClientProvider client={queryClient} >
        <ReactQueryDevtools initialIsOpen={false} ></ReactQueryDevtools>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute> <AppLayout /> </ProtectedRoute>}>
              <Route index element={<Navigate replace to='/dashboard' />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="bookings" element={<Bookings />}></Route>
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />}></Route>
              <Route path="account" element={<Account />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="users" element={<Users />}></Route>
            </Route>
            <Route path='login' element={<Login />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="right-top" gutter={12} containerStyle={{ margin: '5px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)'
            }
          }
          }
        />
      </QueryClientProvider>
    </DarkModeProvider>

  )
}

export default App