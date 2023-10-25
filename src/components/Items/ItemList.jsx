import Item from '../Items/Item';

const ItemList = ({ data = [] }) => {
   return data.map((film) => <Item key={film.id} info={film} />);
};

export default ItemList;
