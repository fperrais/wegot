import { useMemo } from 'react';

import { Grid } from '@mui/material';
import { Box } from '@mui/system';

import gotlogo from '../assets/gotlogo.svg';
import { useGetBooks } from '../services/api/book/hook/useGetBooks';
import { BookCard } from './contents/components/BookCard/BookCard';
import { useStyles } from './themes/useStyles';


export const Main = () => {
	const { classes, cx } = useStyles();

	const { books } = useGetBooks();

	const getTime = (date: string) => new Date(date).getTime();

	const sortedBooks = useMemo(() => books
		?.sort((a, b) => getTime(b.released) - getTime(a.released)), [books]);

	return (
		<Box className={cx(classes.mainbox, classes.flex)}>
			<Grid container spacing={4}>
				<Grid item xs={12} className={classes.logoBox}>
					<img
						src={gotlogo}
						className={classes.logo}
					/>
				</Grid>
				{
					sortedBooks
						?.map((book, i) => (
							<Grid key={i} item xs={12}>
								<BookCard book={book}/>
							</Grid>
						))
				}
			</Grid>
		</Box>
	);
};
