import React from 'react'

const TestPage = () => {
    return (
        <div className='page_wrap'>
            <div className='banner'>
                <img src="../images/banner.png" alt="" />
            </div>

            <div className='page_contents_wrap'>
                <div className='contents_title_box'>
                    <p className='contents_title'>Test Page</p>
                    <p className='contents_article'>...</p>
                </div>

                <div className='page_contents'>
                    <div className='box1'> 1 </div>
                    <div className='box2'> 2 </div>
                    <div className='box3'> 3 </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage