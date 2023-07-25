import React from 'react'
import StageMaster from './StageMaster'
// import PaginationStageMaster from './PaginationStageMaster'
const RightHeaderComponent = () => {
    return (
        <section className='userRightBlock'>
            <article>
                <header>
                    <h3 style={{marginLeft:"3rem"}}>Stage Master</h3>
                    <StageMaster/>
                    {/* <input type="text" placeholder='Filter By Process Id'/> */}
                    {/* <PaginationStageMaster/> */}
                </header>
            </article>
        </section>
        
    )
}

export default RightHeaderComponent
