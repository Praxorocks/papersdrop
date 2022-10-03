import Text from './Text'
import Image from './Image'
import './Inner.css'
import ComBox from './ComBox'

function Inner()
{
    return(
        <div className='outer-box'>
            <Image className="bord"/>
            <ComBox />
            <br />
            <br />
            <Image />
            <ComBox />
        </div>
    )
}

export default Inner;