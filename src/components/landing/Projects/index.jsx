import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Card } from 'Common'
import linkIcon from 'Static/icons/iconmonstr-link-1.svg'
import updateIcon from 'Static/icons/iconmonstr-synchronization-11.svg'
import { Wrapper, Grid, Item, Content, Stats } from './styles'

export const Projects = () => {
	const {
		github: {
			repositoryOwner: {
				pinnedRepositories: { edges },
			},
		},
	} = useStaticQuery(graphql`
		{
			github {
				repositoryOwner(login: "krtb") {
					pinnedRepositories(
						last: 6
					) {
						edges {
							node {
								id
								name
								url
								description
								updatedAt
								homepageUrl
								viewerHasStarred
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Wrapper as={Container} id="projects">
			<h2>Projects</h2>
			<Grid>
				{edges.map(({ node }) => (
					<Item
						key={node.id}
						as="a"
						href={node.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats>
								<div>
									<img src={updateIcon} alt="forks" />
									<span>{
										new Date(node.updatedAt).toDateString()
									}</span>
								</div>
							</Stats>
							 <Stats>
								{node.homepageUrl?<div>
									<img src={linkIcon} alt="stars" />
									<span>{node.homepageUrl}</span>
								</div> : null}
							</Stats>

						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	)
}
