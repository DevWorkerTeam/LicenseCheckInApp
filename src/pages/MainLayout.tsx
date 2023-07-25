import { useSelector } from 'react-redux'
import Login from './Login'
import { Outlet } from 'react-router'

function MainLayout() {
    const reducer = useSelector((state: any) => state.mainReducer)
    return (
        <>
            {
                reducer?.login ? <Outlet /> : <Login />
            }
        </>
    )
}

export default MainLayout