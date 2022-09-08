import { useEffect, useState } from 'react'
import retrieveUserStats  from '../logic/retrieveUserStats'

function Stats() {
    const [stats, setStats] = useState()

    useEffect(() => {
        try {
            retrieveUserStats(sessionStorage.token)
                //.then(stats => setStats(stats))
                .then(setStats)
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const { followers, following, looks } = stats

    return <div>
        <p>looks: {looks}</p>
        <p>followers: {followers}</p>
        <p>following: {following}</p>
    </div>
}
export default Stats