import React from 'react'

const errorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-ijo'>
            <h3 className='text-xl font-serif font-semibold mb-10'>Page not found, please check the link again</h3>
            <p><a href="/" className='w-10 h-4 bg-biru p-2 hover:bg-abu2 font-semibold rounded-lg hover:text-potih'>Back Home</a></p>
        </div>
    )
}

export default errorPage
