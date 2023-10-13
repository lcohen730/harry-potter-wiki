import { useState } from 'react';
import './Home.scss';
import NavBar from '../../components/NavBar/NavBar';

export default function Home(props) {
	const [books, setBooks] = useState([]);

	const getBooks = async () => {
		// make fetch request and store response
		try {
			const response = await fetch('https://api.potterdb.com/v1/books');
			// Parse JSON response into a javascript object
			const data = await response.json();
			// set the composer state to the composer
			console.log(data)
			const allBooks = []
			data.data.forEach((book) => allBooks.push(book.attributes.title))
			/* setBooks(data.data[0].attributes.title); */
			setBooks(allBooks);
		} catch (e) {
			console.error(e);
		}
	};
	
	return (
		<div className="homePage">
			<NavBar />
			<center>
				<h1>✩☽✩ Welcome to Hogwarts School of Witchcraft and Wizardry. ✩☾✩</h1>
				<button onClick={getBooks}>I WANT TO SEE ALL THE HARRY POTTER BOOKS</button>
				<div className="books">{books ? books: ""}</div>
			</center>
		</div>
	)
}
