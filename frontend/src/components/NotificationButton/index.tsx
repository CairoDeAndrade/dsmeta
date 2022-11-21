import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleID: number;
}

function hadleClick (id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then(
        response => {
            console.log("SUCESS");
        }
    );
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