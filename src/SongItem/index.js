import {MdDelete} from 'react-icons/md'

import './index.css'

const SongItem = props => {
  const {songListDetails, deleteSong} = props
  const {id, name, genre, duration, imageUrl} = songListDetails

  const onDeleteSong = () => {
    deleteSong(id)
  }

  return (
    <li>
      <div>
        <div>
          <img src={imageUrl} alt="track" className="song-image" />
          <p>{name}</p>
          <p>{genre}</p>
        </div>
        <div>
          <p>{duration}</p>
          <button
            type="button"
            data-testid="delete"
            onClick={onDeleteSong}
            label="abc"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongItem
