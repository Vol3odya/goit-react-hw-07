import { useDispatch, useSelector } from "react-redux";
import {changeFilter, nameFilters} from "../../redux/filtersSlice"
import css from "./SearchBox.module.css"

export default function SearchBox() {

  const selectNameFilter = useSelector(nameFilters);

  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <label className={css.label}>Find contact by name</label>
      <input type="text" className={css.input} value={selectNameFilter} onChange={handleChange}/>
    </>
  )
}

