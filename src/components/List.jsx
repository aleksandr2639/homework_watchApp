import Item from './Item';

const List = ({ cities, deleteCity }) => {
    return (
        <ul className="list">
        {cities.map((item) => (
          <Item
            {...item}
            key={item.id}
            deleteCity={deleteCity}
          />
        ))}
      </ul>
    )
}

export default List