import { useState, useEffect } from 'react'
import Loader from './Loader'

export function useLoader(timeout = 2000) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (loading)
      setTimeout(() => {
        setLoading(false)
      }, timeout)
  }, [loading])

  return {
    loader: <Loader loading={loading} />,
    loading,
    setLoading,
  }
}
