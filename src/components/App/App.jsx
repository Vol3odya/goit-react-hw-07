import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../../redux/contactsOps'
import { selectLoading, selectError } from '../../redux/contactsSlice'

import css from './App.module.css'


export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);
 
  return (
    <div>
      <h1 className={css.name}>Phonebook</h1>
      {loading && <p>loading</p>}
      {error&&<p>error</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  )
}
