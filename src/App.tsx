import { Route, Link, Routes } from 'react-router-dom'
import './App.css'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import Homepage from './components/Home.page'

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/super-heroes' element={<SuperHeroesPage />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App;
