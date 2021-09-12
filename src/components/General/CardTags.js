/* eslint-disable jsx-a11y/anchor-is-valid */
import Tooltip from './Tooltip';

function CardTags(props) {
    return(
        <Tooltip text={props.count}>
            <a className="dev-card-tags">
                {props.language}
            </a>
        </Tooltip>
    )
}

export default CardTags;