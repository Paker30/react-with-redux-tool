import React from 'react';
import { useSelector } from "react-redux";
import { selectKitchenTables, selectRoomsBeds, selectRoomsCupboards } from "../../store/selectors";

export const Footer = () => {
    const tables = useSelector(selectKitchenTables);
    const beds = useSelector(selectRoomsBeds);
    const cupboards = useSelector(selectRoomsCupboards);

    console.log('render footer');
    return (
        <footer>
            <h1>Different furniture</h1>
            <article>
                <h2>Kitchen</h2>
                <p>tables: {tables}</p>
            </article>
            <article>
                <h2>Rooms</h2>
                <p>beds: {beds}</p>
                <p>cupboards: {cupboards}</p>
            </article>
        </footer>
    );
}