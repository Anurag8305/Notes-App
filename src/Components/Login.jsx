import { WarningTwoIcon } from "@chakra-ui/icons";
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
let initialState = {
	email: "",
	password: "",
};
export default function Login() {
	const [formState, setFormState] = useState(initialState);
	const { email, password } = formState;
	const handleChnage = (e) => {
		const val = e.target.value;
		setFormState({ ...formState, [e.target.name]: val });
	};
	const setChange = () => {
		console.log(formState);
		axios
			.post("https://long-gray-tam.cyclic.app/users/login", formState)
			.then((res) => {
				console.log(res.data.token);
				localStorage.setItem("token", res.data.token);
			})
			.catch(function (error) {
				console.log(error.message);
			});

		// fetch("http://localhost:4000/users/login", {
		// 	method: "POST",
		// 	body: JSON.stringify(formState),
		// 	headers: {
		// 		"Content-type": "application/json",
		// 	}
		// })
		// 	.then((res) => res.json())
		// 	.then((res) => {
		// 		console.log(res);
		// 		localStorage.setItem("token", res.token);
		// 	})
		// 	.catch((err) => console.log(err.message));
	};

	return (
		<>
			<Box textAlign="center" py={10} px={6}>
				<WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
				<Heading as="h2" size="xl" mt={6} mb={2}>
					This is the Login
				</Heading>
				<Text color={"gray.500"}>Login on your own risk.</Text>
			</Box>
			<Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				bg={useColorModeValue("gray.50", "gray.800")}
			>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"}>Sign in to your account</Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
							✌️
						</Text>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<FormControl id="email">
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									name="email"
									value={email}
									onChange={handleChnage}
								/>
							</FormControl>
							<FormControl id="password">
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									value={password}
									name="password"
									onChange={handleChnage}
								/>
							</FormControl>
							<Stack spacing={10}>
								<Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"space-between"}
								>
									<Checkbox>Remember me</Checkbox>
									<Link color={"blue.400"}>Forgot password?</Link>
								</Stack>
								<Button
									onClick={setChange}
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
								>
									Sign in
								</Button>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</>
	);
}
