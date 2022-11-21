import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from 'axios';

type Props = {
    saleID: number;
}

function hadleClick (id : number) {
    axios
}
function NotificationButton({saleID} : Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => hadleClick(saleID)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton;