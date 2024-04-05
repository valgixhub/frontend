import SidePanel from "./sidepanel/SidePanel"
import { Outlet } from 'react-router-dom'

export default function App() {
    
    return (
        <>
            <SidePanel />
            <Outlet />
        </>
    )
}