import { useState, useEffect } from 'react'
import { purifyAudioUrl } from '../utils'
import { Helmet } from 'react-helmet'

const Tracks = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState(search)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)

    return () => clearTimeout(handler)
  }, [search])

  useEffect(() => {
    const fetchTracks = async () => {
      setIsLoading(true)
      try {
        const url = new URL(
          'https://naat-stream.vercel.app/api/naats?search=' +
            encodeURIComponent(debouncedSearch)
        )

        const response = await fetch(url)

        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()
        console.log(data)

        setTracks(data || [])
      } catch (error) {
        console.error('Error fetching tracks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTracks()
  }, [debouncedSearch])

  return (
    <>
      <Helmet>
        <title>Naat Stream | The App Factory</title>
        <meta
          name='description'
          content='Discover and listen to a curated collection of Naat tracks. Stream your favorite Naat songs online.'
        />
        <meta
          name='keywords'
          content='Naat, Naat tracks, Naat songs, Islamic music, Religious songs, Naat streaming, Listen to Naat, Online Naat, Naat collection'
        />
        <meta property='og:title' content='Naat Stream | The App Factory' />
        <meta
          property='og:description'
          content='Discover and listen to a curated collection of Naat tracks. Stream your favorite Naat songs online.'
        />
      </Helmet>
      <div className='min-h-full py-8'>
        <h1 className='text-4xl text-center font-bold text-primary mb-6'>
          Naat Stream
        </h1>

        <div className='flex justify-center mb-6 max-w-7xl mx-auto'>
          <input
            type='text'
            placeholder='Search for a track...'
            className='input input-bordered w-96 shadow-md focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder:text-black'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {isLoading && (
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto px-4'>
            {[...Array(3)].map((_, i) => (
              <div key={i} className='flex w-96 flex-col gap-4 m-10'>
                <div className='skeleton h-32 w-full'></div>
                <div className='skeleton h-4 w-28'></div>
                <div className='skeleton h-4 w-full'></div>
                <div className='skeleton h-4 w-full'></div>
                <div className='skeleton h-4 w-full'></div>
              </div>
            ))}
          </div>
        )}

        <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 md:grid-cols-2 max-w-7xl mx-auto px-4'>
          {!isLoading && tracks.length === 0 ? (
            <p className='text-center text-lg text-gray-600'>
              No tracks found.
            </p>
          ) : (
            tracks.map((track) => (
              <div
                key={track.id}
                className='bg-base-100 p-6 rounded-lg shadow-lg'
              >
                <div className='flex flex-col items-center'>
                  {track && (
                    <img
                      src={track.image}
                      alt={track.title}
                      className='max-w-xs rounded-lg shadow-md h-60'
                    />
                  )}
                  <h2 className='text-2xl font-bold text-black mt-4'>
                    {track.title || 'Unknown Track'}
                  </h2>
                  <p className='text-gray-600'>
                    By {track?.artist?.name || 'Unknown Artist'}
                  </p>
                  {/* Spotify Embed */}
                  {track?.audioUrl && (
                    <audio
                      controls
                      src={purifyAudioUrl(track.audioUrl)}
                      className='w-full mt-4'
                    >
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Tracks
