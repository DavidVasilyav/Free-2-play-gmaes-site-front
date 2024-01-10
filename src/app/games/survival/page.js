import getGameByCategory from '../../api/gamesCategory';
import SearchBar from 'components/SearchBar/SearchBar'


async function getData() {
  const res = await getGameByCategory('survival')
  return res
}
  export default async function Allgames() {
    const data = await getData()

    return (
      <>
        <SearchBar listFromApi={data} />
        </>
      )
    }

    