import { useCallback, useState, MouseEvent, useMemo, useEffect } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Card, CardContent, CardHeader,
	CircularProgress,
	Collapse, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import { format } from 'date-fns';

import heart from '../../../../assets/heart.svg';
import tombstone from '../../../../assets/tombstone.svg';
import { IBook } from '../../../../services/api/book/types/IBook';
import { useGetCharacters } from '../../../../services/api/character/hook/useGetCharacter';
import { ICharacter } from '../../../../services/api/character/types/ICharacter';
import { getId } from '../../../../tools/idUtility';
import { LocalStorageUtility } from '../../../../tools/localStorageUtility';
import { useBookCardStyles } from './theme/useBookCardStyles';

interface IBookCardProps {
	book: IBook,
}

export const BookCard = ({ book }: IBookCardProps) => {
	const { classes } = useBookCardStyles();
	const { isLoading, getCharacters } = useGetCharacters(book);

	const bookId = getId(book.url);
	const likedBooks: string[] = useMemo(() => (LocalStorageUtility.getValue('liked') || []), []);

	const [expanded, setExpanded] = useState<boolean>(false);
	const [liked, setLiked] = useState<boolean>(likedBooks.some((e) => e === bookId));
	const [characters, setCharacters] = useState<ICharacter[]>([]);

	const [first] = book.name;

	const sortedCharacters = useMemo(() => characters
		.filter((f) => f.name !== '')
		.sort((a, b) => a.name.localeCompare(b.name)), [characters]);

	const handleToogleExpanded = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();

		if (characters.length === 0) {
			getCharacters()
				.then((char) => {
					setCharacters(char);
					setExpanded(!expanded);
				});
		} else {
			setExpanded(!expanded);
		}
	}, [characters.length, expanded, getCharacters]);

	const handleToogleLiked = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();

		if (!liked) {
			likedBooks.push(bookId);
			LocalStorageUtility.setValue('liked', likedBooks);
		} else {
			LocalStorageUtility.setValue('liked', likedBooks.filter((a) => a !== bookId));
		}

		setLiked(!liked);
	}, [bookId, liked, likedBooks]);

	return (
		<Card
			variant="outlined"
			className={classes.card}
		>
			<CardHeader
				avatar={
					<Avatar className={classes.avatar}>
						{first}
					</Avatar>
				}
				action={
					<Stack direction="row" spacing={1}>
						<IconButton
							onClick={handleToogleLiked}
						>
							{!liked ? <FavoriteBorderIcon /> : <FavoriteIcon color="error"/>}
						</IconButton>
						<IconButton
							onClick={handleToogleExpanded}
						>
							{
								!isLoading ?
									<VisibilityIcon />
									: <CircularProgress size={24} disableShrink/>
							}
						</IconButton>
					</Stack>
				}
				title={book.name}
				subheader={format(new Date(book.released), 'dd/MM/yyyy')}
				classes={
					{
						title: classes.title,
						subheader: classes.subheader,
					}
				}
			/>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<List>
						{
							sortedCharacters?.map((character, i) => (
								<ListItem
									key={i}
									secondaryAction={
										<IconButton className={classes.state}>
											<img
												className={classes.state}
												src={character.died !== '' ? tombstone : heart}
											/>
										</IconButton>
									}
								>
									<ListItemText
										primary={character.name}
									/>
								</ListItem>
							))
						}
					</List>
				</CardContent>
			</Collapse>
		</Card>
	);
};
