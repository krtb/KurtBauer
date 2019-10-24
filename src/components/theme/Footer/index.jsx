import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Links, Details } from './styles'
import social from './social.json'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2> Kurt.Bauer55@gmail.com </h2>
				<h4> Let's build something! </h4>
				{/*<span>
					© All rights are reserved | {new Date().getFullYear()} | Made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					by{' '}
					<a
						href="https://smakosh.com/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						Smakosh
					</a>
				</span> */}
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="40" src={icon} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
)
