import { attributes, react as HomeContent } from "../content/home.md";

import Layout from "../components/layout";
import Section from "../components/section";
import Container from "../components/container";
import Metadata from "../components/metadata";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const GradientText = styled.h1`
    background: linear-gradient(263.43deg, #528ad5 -19.48%, #ffa2de 120.66%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
	font-size: 45px;
	max-width: 9em;
`;

export default function Index() {
	const { title } = attributes;

	return (
		<Layout theme="theme-primary">
			<Metadata title={title} />

			<Section className="text-white text-center lg:text-left">
				<div className="flex lg:flex-row flex-col gap-4 p-9 justify-center items-center w-full bg-gradient-to-r from-gradient-blue-100 to-gradient-blue-200">
					<video src='/img/ball-60fps.mp4' className="aspect-square max-w-md w-full mix-blend-screen" playsInline muted autoPlay loop />
					<div className="w-full max-w-sm p-4">
						<GradientText>Build better apps on Solana</GradientText>
						<p>Performant API to power your Solana blockchain app. Get fast, reliable data easily.</p>
						<br />
						<small>Supported Protocols:</small>
						<div className="flex flex-wrap gap-4 text-center justify-center lg:justify-start">
							<div className="w-14">
								<div className="border">
									<img src='/img/metaplex.png' alt='Metaplex' width='64' height='64' />
								</div>
								<small>Metaplex</small>
							</div>
							<div className="w-14">
								<div className="border">
									<img src='/img/solana.png' alt='Solana' width='64' height='64' />
								</div>
								<small>Solana</small>
							</div>
							<div className="w-14">
								<div className="border">
									<img src='/img/dialect.png' alt='Dialect' width='64' height='64' />
								</div>
								<small>Dialect</small>
							</div>
							<div className="w-14">
								<div className="border">
									<img src='/img/strata.png' alt='Strata' width='64' height='64' />
								</div>
								<small>Strata</small>
							</div>
						</div>
					</div>
				</div>
			</Section>


			<Section className="text-black bg-white" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #F597D4, #ffff 25%, #fff 75%)' }}>
				<Container>
					<h1 className="text-black">The Holaplex API</h1>
					<div className="rounded-xl border p-4 backdrop-blur-lg w-full lg:w-3/5 relative z-50">
						<div className="flex flex-col gap-5 max-w-sm">
							<div>✓ Build apps that run fast with low latency</div>
							<div>✓ Replace your get program accounts calls</div>
							<div>✓ Access Solana blockchain through GraphQL</div>
						</div>
					</div>
					<div className="rounded-full w-24 aspect-square -mt-16 ml-24 bg-gradient-to-r from-gradient-blue-700 to-gradient-blue-900" />

					<div className="rounded-xl bg-gray-800 text-white border p-4 py-2 w-full ml-auto lg:w-1/2 relative z-50 flex flex-col lg:-mt-24">
						<div className="flex gap-2 pb-2 -ml-2">
							<div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
							<div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
							<div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
						</div>
						<pre css={css`
							div {
								padding-left: 2em;
								&.truncate {
									padding-left: 0;
								}
							}
						`}>
							&#123;
							<div>
								<span className="text-purple">nfts</span>(
								<div>
									<div className="truncate"><span className="text-green">owners</span>: <span className="text-gradient-blue-700">&#x22;70UUEdptZnZVhSet4q0bU9PtpPfiNUEJ8ftPnrC6YEaa&#x22;</span></div>
									<span className="text-green">offset</span>: 0,<br />
									<span className="text-green">limit</span>: 25
								</div>
								) &#123;
								<div className="text-purple">
									name<br />
									mintAddress<br />
									image(<span className="text-green">width</span>: <span className="text-red">1400</span>) <span className="animate-pulse bg-white">&nbsp;</span>
								</div>
								&#125;
							</div>
							&#125;
						</pre>
					</div>
				</Container>
			</Section>
		</Layout>
	);
}
