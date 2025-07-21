import { useSelector } from "react-redux";
import { selectKitchen, selectRoomsChairs } from "../../store/selectors";

export const Header = () => {
    const chairs = useSelector(selectKitchen).chairs;
    const roomChairs = useSelector(selectRoomsChairs);
    console.log('render header');
    
    return (
        <header>
            <article>
                <h1>Common furniture</h1>
                <article>
                    <h2>Kitchen</h2>
                    <p>Chairs: {chairs}</p>
                </article>
                <article>
                    <h2>Rooms</h2>
                    <p>Chairs: {roomChairs}</p>
                </article>
            </article>
        </header>
    );
}