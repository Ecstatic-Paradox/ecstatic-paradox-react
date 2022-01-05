import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div class="error-message">
            <div>
                <h1>404</h1>
                <h1>Page Not Found!</h1>
                <p>Sorry, requested page is not found. Please double check the link.</p>
                <Link to="/" class="btn btn-primary btn-lg">Take Me Home </Link>
            </div>
        </div>
    )
}

export default NotFound

