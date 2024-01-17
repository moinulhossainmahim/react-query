import { Route, Link, Routes } from 'react-router-dom'
import './App.css'
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import { SuperHeroesPage } from './components/SuperHeroes.page'
import Homepage from './components/Home.page'
import RQSuperHeroPage from './components/RQSuperHero.page'
import RQParallelPage from './components/RQParallel.page'
import DependentQueriesPage from './components/DependentQueries.page'
import PaginatedQueriesPage from './components/PaginatedQueries.page'
import { InfiniteQueriesPage } from './components/InfiniteQueries.page'
import { NewRQSuperHeroesPage } from './components/NewRQSuperHeroes.page'

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
          <li>
            <Link to='/rq-parallel'>RQ Parallel</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/super-heroes' element={<SuperHeroesPage />} />
        <Route path='/rq-parallel' element={<RQParallelPage />} />
        <Route path='/rq-super-heroes/:id' element={<RQSuperHeroPage />} />
        <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
        <Route path='/new-rq-super-heroes' element={<NewRQSuperHeroesPage />} />
        <Route path='/rq-paginated' element={<PaginatedQueriesPage />} />
        <Route path='/rq-infinite' element={<InfiniteQueriesPage />} />
        <Route path='/rq-dependent' element={<DependentQueriesPage email='vishwas@example.com' />} />
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App;
