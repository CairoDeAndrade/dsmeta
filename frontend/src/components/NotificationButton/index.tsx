import icon from '../../assets/img/notification-icon.svg';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { toast } from 'react-toastify';

type Props = {
    saleID: number;
}

function hadleClick (id : number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then(
        response => {
            toast.info("SMS sent successfully!");
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