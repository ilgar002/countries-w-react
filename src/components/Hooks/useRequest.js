import { useState, useCallback } from 'react'

function useRequest() {
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null)

    const requestData = useCallback(
        async (options, callback) => {
            setLoading(true)
            try {
                let res = await fetch(options.url)
                if (!res.ok)
                    throw new Error('Oops...Something Went Wrong...');
                let data = await res.json()
                callback(data)
                setErrors(null)
            }
            catch (err) {
                setErrors(err)
            }
            setLoading(false)
        }, [])

    return {
        loading,
        errors,
        requestData
    }
}

export default useRequest