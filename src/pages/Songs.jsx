import { useState, useEffect } from 'react'

const key = '4200236921msh6f55cd855578ddap111fd8jsnaa1c18381ea5'

const Tracks = () => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [limit, setLimit] = useState(10)
  const [search, setSearch] = useState('eminem')
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
        const url = new URL('https://spotify23.p.rapidapi.com/search/')
        url.searchParams.append('q', debouncedSearch)
        url.searchParams.append('type', 'multi')
        url.searchParams.append('offset', '0')
        url.searchParams.append('limit', limit)
        url.searchParams.append('numberOfTopResults', '5')

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': key,
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
          },
        })

        if (!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()
        setTracks(data.tracks?.items || [])
      } catch (error) {
        console.error('Error fetching tracks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTracks()
  }, [debouncedSearch, limit])

  return (
    <div className='min-h-full py-8'>
      <h1 className='text-4xl text-center font-bold text-primary mb-6'>
        Spotify Tracks
      </h1>

      <div className='flex justify-center mb-6'>
        <input
          type='text'
          placeholder='Search for a track...'
          className='input input-bordered w-96 shadow-md focus:outline-none focus:ring-2 focus:ring-primary text-black placeholder:text-black'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading && (
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2'>
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

      <div className='grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3 md:grid-cols-2'>
        {!isLoading && tracks.length === 0 ? (
          <p className='text-center text-lg text-gray-600'>No tracks found.</p>
        ) : (
          tracks.map((track, index) => (
            <div key={index} className='bg-base-100 p-6 rounded-lg shadow-lg'>
              <div className='flex flex-col items-center'>
                {track?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url && (
                  <img
                    src={track.data.albumOfTrack.coverArt.sources[0].url}
                    alt={track.data.name}
                    className='max-w-xs rounded-lg shadow-lg'
                  />
                )}
                <h2 className='text-2xl font-bold text-black mt-4'>
                  {track?.data?.name || 'Unknown Track'}
                </h2>
                <p className='text-gray-600'>
                  By{' '}
                  {track?.data?.artists?.items?.[0]?.profile?.name ||
                    'Unknown Artist'}
                </p>
                {/* Spotify Embed */}
                {track?.data?.uri && (
                  <iframe
                    src={`https://open.spotify.com/embed/track/${
                      track.data.uri.split(':')[2]
                    }`}
                    width='100%'
                    height='80'
                    allow='encrypted-media'
                    className='mt-3 rounded-lg'
                  ></iframe>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {tracks.length > 0 && (
        <div className='text-center mt-8'>
          <button
            className='btn btn-primary px-6 py-2 rounded-md shadow-md hover:bg-primary-focus transition-all duration-200'
            onClick={() => setLimit((prev) => prev + 5)}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Tracks
