import Loading from '../../images/Loading.svg'
import {LoaderDiv} from '../../Styled/Styled'
export default function Loader() {
    return (
        <LoaderDiv>
                <img src={Loading} alt='Loading...'/>  
        </LoaderDiv>
    )
}
