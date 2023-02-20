import React from "react";
import {
	Box,
	Heading,
	Link,
	Image,
	Text,
	Divider,
	HStack,
	Tag,
	Wrap,
	WrapItem,
	SpaceProps,
	useColorModeValue,
	Container,
	VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

interface IBlogTags {
	tags: Array<string>;
	marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
	return (
		<HStack spacing={2} marginTop={props.marginTop}>
			{props.tags.map((tag) => {
				return (
					<Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
						{tag}
					</Tag>
				);
			})}
		</HStack>
	);
};

interface BlogAuthorProps {
	date: Date;
	name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
	return (
		<HStack marginTop="2" spacing="2" display="flex" alignItems="center">
			<Image
				borderRadius="full"
				boxSize="40px"
				src="https://100k-faces.glitch.me/random-image"
				alt={`Avatar of ${props.name}`}
			/>
			<Text fontWeight="medium">{props.name}</Text>
			<Text>—</Text>
			<Text>{props.date.toLocaleDateString()}</Text>
		</HStack>
	);
};

const About = () => {
	return (
		<>
			<Box textAlign="center" py={10} px={6}>
				<CheckCircleIcon boxSize={"50px"} color={"green.500"} />
				<Heading as="h2" size="xl" mt={6} mb={2}>
					Welcome to the About Page
				</Heading>
				<Text color={"gray.500"}>
					This website shows a small demonstration of the Full Stack Project
					that I have made.
				</Text>
			</Box>
			<Container maxW={"7xl"} p="12">
				<Heading as="h1">About this Project</Heading>
				<Box
					marginTop={{ base: "1", sm: "5" }}
					display="flex"
					flexDirection={{ base: "column", sm: "row" }}
					justifyContent="space-between"
				>
					<Box
						display="flex"
						flex="1"
						marginRight="3"
						position="relative"
						alignItems="center"
					>
						<Box
							width={{ base: "100%", sm: "85%" }}
							zIndex="2"
							marginLeft={{ base: "0", sm: "5%" }}
							marginTop="5%"
						>
							<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
								<Image
									borderRadius="lg"
									src={
										"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
									}
									alt="some good alt text"
									objectFit="contain"
								/>
							</Link>
						</Box>
						<Box zIndex="1" width="100%" position="absolute" height="100%">
							<Box
								bgGradient={useColorModeValue(
									"radial(orange.600 1px, transparent 1px)",
									"radial(orange.300 1px, transparent 1px)"
								)}
								backgroundSize="20px 20px"
								opacity="0.4"
								height="100%"
							/>
						</Box>
					</Box>
					<Box
						display="flex"
						flex="1"
						flexDirection="column"
						justifyContent="center"
						marginTop={{ base: "3", sm: "0" }}
					>
						<BlogTags tags={["Full Stack Project", "MERN"]} />
						<Heading marginTop="1">
							<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
								Mini Full Stack Project
							</Link>
						</Heading>
						<Text
							as="p"
							marginTop="2"
							color={useColorModeValue("gray.700", "gray.200")}
							fontSize="lg"
						>
							This is a small mini-prject that has been built in a span of 4
							days. Here I have tried to apply all the front-end and back-end
							technologies that I have learnt till now. The teck-stacks include-
							React, ChakraUI, NodeJS, MongoDB, MongoAtlas, Express, Mongoose.
						</Text>
						<BlogAuthor
							name="Anurag Raj"
							date={new Date("2023-02-14T19:01:27Z")}
						/>
					</Box>
				</Box>
				<Heading as="h2" marginTop="5">
					Latest articles
				</Heading>
				<Divider marginTop="5" />
				<Wrap spacing="30px" marginTop="5">
					<WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
						<Box w="100%">
							<Box borderRadius="lg" overflow="hidden">
								<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
									<Image
										transform="scale(1.0)"
										src={
											"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
										}
										alt="some text"
										objectFit="contain"
										width="100%"
										transition="0.3s ease-in-out"
										_hover={{
											transform: "scale(1.05)",
										}}
									/>
								</Link>
							</Box>
							<BlogTags tags={["Full Stack Project", "MERN"]} marginTop="3" />
							<Heading fontSize="xl" marginTop="2">
								<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
									Mini Full Stack Project
								</Link>
							</Heading>
							<Text as="p" fontSize="md" marginTop="2">
								This is a small mini-prject that has been built in a span of 4
								days. Here I have tried to apply all the front-end and back-end
								technologies that I have learnt till now. The teck-stacks
								include- React, ChakraUI, NodeJS, MongoDB, MongoAtlas, Express,
								Mongoose.
							</Text>
							<BlogAuthor
								name="Anurag Raj"
								date={new Date("2023-02-14T19:01:27Z")}
							/>
						</Box>
					</WrapItem>
				</Wrap>
				<VStack paddingTop="40px" spacing="2" alignItems="flex-start">
					<Heading as="h2">What I have done in this Project</Heading>
					<Text as="p" fontSize="lg">
						The main objective to make this project is to really understand the
						basics of all the tech-stacks that we have learnt in our MASAI
						journey. The tech-stacks includes HTML, CSS , JavaScript, React,
						Redux, ChakraUI, NodeJS, MongoDB, MongoAtlas, Express, Mongoose.
					</Text>
					<Heading as="h5">What I have leant during this journey</Heading>
					<Text as="p" fontSize="lg">
						Apart from the techincal skills I have also gained experience in
						improving from soft skills. The constrct week at MASAI helps us to
						interact with people from different background. This has personally
						helped me in understanding the views and opinions of people. This
						has also helped me in developing my skills to become a good team
						player, not only as a team-member but also as a team-lead.
					</Text>
					<Text as="p" fontSize="lg"></Text>
				</VStack>
			</Container>
		</>
	);
};

export default About;
