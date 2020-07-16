import React from 'react';
import useSWR from 'swr';
import Link from 'next/link';
import { Button, Card } from 'semantic-ui-react';

interface Note {
	_id: string;
	title: string;
	description: string;
}

const fetcher = (url: string) =>
	fetch(url)
		.then((res) => res.json())
		.then<{ success: boolean; data: Note[] }>((data) => data);

const Index = () => {
	const { data, error } = useSWR('api/notes', fetcher);
	if (error) return <div>Error...</div>;
	if (!data) return <div>loading ...</div>;
	return (
		<div>
			<h1>Notes</h1>
			<div className="grid wrapper">
				{data.data.map((note) => (
					<div key={note._id}>
						<Card>
							<Card.Content>
								<Card.Header>
									<Link href={`/${note._id}`}>
										<a>{note.title}</a>
									</Link>
								</Card.Header>
							</Card.Content>
							<Card.Content extra>
								<Link href={`/${note._id}`}>
									<Button primary>View</Button>
								</Link>
								<Link href={`/${note._id}/edit`}>
									<Button primary>Edit</Button>
								</Link>
							</Card.Content>
						</Card>
					</div>
				))}
			</div>
		</div>
	);
};

export default Index;
