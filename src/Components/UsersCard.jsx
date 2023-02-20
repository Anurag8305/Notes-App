import {
	Heading,
	Avatar,
	Box,
	Center,
	Image,
	Flex,
	Text,
	Stack,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";

export default function UsersCard({ name, email, id, getUsers }) {
  const admin=localStorage.getItem("admin")
	const handleDelete = () => {
		const ID = id;
		axios
			.delete(`https://long-gray-tam.cyclic.app/users/delete/${ID}`)
			.then((res) => {
				console.log(res);
			})
			.catch(function (error) {
				console.log(error.message);
			});
		getUsers(); 
	};

	return (
		<Center py={6}>
			<Box
				maxW={"270px"}
				key={id}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"md"}
				overflow={"hidden"}
			>
				<Image
					h={"120px"}
					w={"full"}
					src={
						"https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
					}
					objectFit={"cover"}
				/>
				<Flex justify={"center"} mt={-12}>
					<Avatar
						size={"xl"}
						src={
							"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
						}
						alt={"Author"}
						css={{
							border: "2px solid white",
						}}
					/>
				</Flex>

				<Box p={6}>
					<Stack spacing={0} align={"center"} mb={5}>
						<Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
							{name}
						</Heading>
						<Text color={"gray.500"}>{email}</Text>
					</Stack>

					<Stack direction={"row"} justify={"center"} spacing={6}>
						<Stack spacing={0} align={"center"}>
							<Text fontWeight={600}>23k</Text>
							<Text fontSize={"sm"} color={"gray.500"}>
								Followers
							</Text>
						</Stack>
						<Stack spacing={0} align={"center"}>
							<Text fontWeight={600}>23k</Text>
							<Text fontSize={"sm"} color={"gray.500"}>
								Followers
							</Text>
						</Stack>
					</Stack>

					{admin==String?(<Button
						w={"full"}
						onClick={handleDelete}
						mt={8}
						bg={"#151f21"}
						color={"white"}
						rounded={"md"}
						_hover={{
							transform: "translateY(-2px)",
							boxShadow: "lg",
						}}
					>
						Delete
					</Button>):(<Button
						w={"full"}
						onClick={handleDelete}
						mt={8}
						bg={"#151f21"}
						color={"white"}
						rounded={"md"}
						_hover={{
							transform: "translateY(-2px)",
							boxShadow: "lg",
						}}
					>
						Not able to Delete
					</Button>)}
				</Box>
			</Box>
		</Center>
	);
}
