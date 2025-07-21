# React + Vite

## Selectors which force reloading

Some times selectors can force elements to re-render even though action seems to not be related, for example lets see this selector

```js
export const selectKitchen = createSelector(selectFurniture, (furniture) => furniture.kitchen);
```

There's nothing wrong with it, it returns ```kitchen``` from state, problem is if it's used to pick values from ```kitchen``` instead of using an other selector

```js
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
```

With this implementation ```Header``` would be re-render each time a ```chair``` or a ```table``` is added to the store even though ```Header``` doesn't seem to be related with ```tables```, if selector was coded like this

```js
export const selectKitchenChairs = createSelector(selectKitchen, (kitchen) => kitchen.chairs);
```

```Footer``` wouldn't be re-render.
