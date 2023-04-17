
import '../../css/Filter/Filter.css'


const Filter = ({handleFilterBySize , size , sort , handleSortByOrder}) => {


    return (
        <div className="filter-wrapper">
            <h2 className="filter-title">Filter</h2>
            <div className="num-of-products">Number of product 4</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select value={size} onChange={handleFilterBySize} className="filter-select">
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="L">L</option>
                </select>
            </div>
            <div className="filter-by-size">
                <span>Order</span>
                <select value={sort} onChange={handleSortByOrder} className="filter-select">
                    <option value="latest">Latest</option>
                    <option value="lowest">Lower</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        </div>
    )
}

export default Filter