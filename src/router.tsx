
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import { lazy, Suspense } from 'react'
// import FavoritesPage from './views/FavoritesPage'
// import IndexPage from './views/IndexPage'
const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
const GenerateAI = lazy(() => import('./views/GenerateAI'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    {/* <Route path='/' element={<IndexPage />} index /> */}
                    <Route path='/' element={
                        <Suspense fallback="...Cargando">
                            <IndexPage />
                        </Suspense>
                    } index />
                    {/* <Route path='/favoritos' element={<FavoritesPage />} /> */}
                    <Route path='/favoritos' element={
                        <Suspense fallback="...Cargando">
                            <FavoritesPage />
                        </Suspense>
                    } />
                    <Route path='/generate' element={
                        <Suspense fallback="...Cargando">
                            <GenerateAI />
                        </Suspense>
                    } />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
