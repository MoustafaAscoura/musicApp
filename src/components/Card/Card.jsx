import { useContext, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSongToList, removeSongFromList } from '../../store/slices/favoritesSlice';
import themeContext from '../../context/themeContext';

export default function MusicCard ({ title, artist, url, artwork, id, deleteSongFromState, count=0, variant="Light"}) {
    const song = {title, artist, url, artwork, id}
    const [watched, setWatched] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const favList = useSelector(store => store.favList.favList)

    const {darkMode, setDarkMode} = useContext(themeContext)

    const visitSongWebsite = () => {
        setWatched(true)
        navigate(`/song/${id}`)
    }

    // const deleteSong = (e) => {
    //     e.preventDefault()
    //     deleteSongFromState(id)
    // }

    return <>
        <Card
          bg={darkMode ? 'Dark' : 'Primary'}
          key={variant}
          text={darkMode ? 'dark' : 'white'}
          style={{ width: '18rem', cursor: "pointer" }}
          className="mb-2 flex-grow-1"
        >
          <Card.Body className='position-relative'>
            <img className='img-fluid rounded mb-3' src={artwork} alt={artist} onClick={visitSongWebsite} />
            <Card.Title>{title}</Card.Title>
            <Card.Text>{artist}</Card.Text>
            {/* <span onClick={()=>deleteSongFromState(id)} className='delete-icon position-absolute' style={{width:"12px", bottom: "10px", right:"20px", cursor:"pointer"}} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='red' d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </span> */}
            {/* {favList.find(_song => _song.id == id) ? 
             <button onClick={()=>dispatch(removeSongFromList(id))} className='delete-icon position-absolute rounded btn btn-outline-secondary' style={{ bottom: "10px", left:"16px", cursor:"pointer"}} >
                -
            </button>
             :  */}
            <button onClick={()=>dispatch(addSongToList(song))} className='delete-icon position-absolute rounded btn btn-outline-secondary' style={{ bottom: "10px", left:"16px", cursor:"pointer"}} >
                + ({count})
            </button>
            
          </Card.Body>
        </Card>
    </>
}