import React from 'react';
import { useDispatch } from 'react-redux';
import { addKitchenChairs, addKitchenTables, addRoomCupboards, addRoomsBeds, addRoomsChairs } from '../../store/slices/fournitures';

export const Main = () => {
    const dispatch = useDispatch();

    return (
        <section>
            <article>
                <h1>Increase kitchen's furniture</h1>
                <article>
                    <h2>Chairs</h2>
                    <button onClick={() => dispatch(addKitchenChairs())}>Add 1</button>
                </article>
                <article>
                    <h2>Tables</h2>
                    <button onClick={() => dispatch(addKitchenTables())}>Add 1</button>
                </article>
            </article>
            <article>
                <h1>Increase Room's furniture</h1>
                <article>
                    <h2>Chairs</h2>
                    <button onClick={() => dispatch(addRoomsChairs())}>Add 1</button>
                </article>
                <article>
                    <h2>Beds</h2>
                    <button onClick={() => dispatch(addRoomsBeds())}>Add 1</button>
                </article>
                <article>
                    <h2>Cupboards</h2>
                    <button onClick={() => dispatch(addRoomCupboards())}>Add 1</button>
                </article>
            </article>
        </section>
    );
};