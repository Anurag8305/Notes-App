import {
	Badge,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,

} from "@chakra-ui/react";

export default function NotesCard({
	titles,
	notes,
	category,
	key,
	id,
	getNotes,
}) {

	
	return (
		<Center py={6}>
			<Stack
				borderWidth="1px"
				borderRadius="lg"
				w={{ sm: "100%", md: "540px" }}
				height={{ sm: "476px", md: "20rem" }}
				direction={{ base: "column", md: "row" }}
				bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				padding={4}
			>
				<Flex flex={1} bg="blue.200">
					<Image
						objectFit="cover"
						boxSize="100%"
						src={
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQncJFAa4NU14Wdfzto5k4qnvvLLsStv9XHkA&usqp=CAU"
						}
					/>
				</Flex>
				<Stack
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p={1}
					pt={2}
				>
					<Heading fontSize={"2xl"} fontFamily={"body"}>
						{titles}
					</Heading>
					<Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
						ID:{id}
					</Text>
					<Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
						Category:{category}
					</Text>
					<Text
						textAlign={"center"}
						color={useColorModeValue("gray.700", "gray.400")}
						px={3}
					>
						{notes}
					</Text>
				</Stack>
			</Stack>
		</Center>
	);
}
