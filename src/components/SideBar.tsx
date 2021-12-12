import '../styles/sidebar.scss';
import { Button } from './Button';

interface SideBarGenres {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>

  selectedGenreId: number;
  setSelectedGenreId: (setSelectedGenreId: number) => void; //setSelectedGenreId() é uma função
}

export function SideBar({genres, selectedGenreId, setSelectedGenreId} : SideBarGenres) {

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}