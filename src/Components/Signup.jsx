import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Link as Routerlink } from "react-router-dom";
import axios from "axios";
let initialState = {
	name: "",
	email: "",
	password: "",
};
export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [formState, setFormState] = useState(initialState);
  const { name, email, password } = formState;
	const handleChnage = (e) => {
		const val = e.target.value;
		setFormState({ ...formState, [e.target.name]: val });
	};
	const setChange = (e) => {
		e.preventDefault();
		axios
			.post("https://long-gray-tam.cyclic.app/register", formState)
			.then((res) => {
				console.log(res);
			})
			.catch(function (error) {
				console.log(error);
			});
		console.log(formState);
		// fetch("http://localhost:4000/users/register",{
		//   method:"POST", 
    //   body:JSON.stringify(formState)
		//   headers:{
		//     "Content-type":"application/json"
		//   },
		// }).then(res=>res.json())
		// .then(res=>console.log(res))
		// .catch(err=>console.log(err))
	};
	
	return (
		<>
			<Box textAlign="center" py={10} px={6}>
				<WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
				<Heading as="h2" size="xl" mt={6} mb={2}>
					This is the SignUp
				</Heading>
				<Text color={"gray.500"}>
					Happily Explored Let's SignUp to explore more features.
				</Text>
			</Box>
			<Flex
				minH={"100vh"}
				align={"center"}
				justify={"center"}
				bg={useColorModeValue("gray.50", "gray.800")}
			>
				<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
					<Stack align={"center"}>
						<Heading fontSize={"4xl"} textAlign={"center"}>
							Sign up
						</Heading>
						<Text fontSize={"lg"} color={"gray.600"}>
							to enjoy all of our cool features ✌️
						</Text>
					</Stack>
					<Box
						rounded={"lg"}
						bg={useColorModeValue("white", "gray.700")}
						boxShadow={"lg"}
						p={8}
					>
						<Stack spacing={4}>
							<HStack>
								<Box>
									<FormControl id="firstName" isRequired>
										<FormLabel>First Name</FormLabel>
										<Input
											type="text"
											name="name"
											value={name}
											onChange={handleChnage}
										/>
									</FormControl>
								</Box>
								<Box>
									<FormControl id="lastName">
										<FormLabel>Last Name</FormLabel>
										<Input type="text" />
									</FormControl>
								</Box>
							</HStack>
							<FormControl id="email" isRequired>
								<FormLabel>Email address</FormLabel>
								<Input
									type="email"
									name="email"
									value={email}
									onChange={handleChnage}
								/>
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										type={showPassword ? "text" : "password"}
										value={password}
										name="password"
										onChange={handleChnage}
									/>
									<InputRightElement h={"full"}>
										<Button
											variant={"ghost"}
											onClick={() =>
												setShowPassword((showPassword) => !showPassword)
											}
										>
											{showPassword ? <ViewIcon /> : <ViewOffIcon />}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									onClick={setChange}
									loadingText="Submitting"
									size="lg"
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
								>
									Sign up
								</Button>
							</Stack>
							<Stack pt={6}>
								<Text align={"center"}>
									Already a user?{" "}
									<Routerlink to={"/login"}>
										<Link color={"blue.400"}>Login</Link>
									</Routerlink>
								</Text>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</>
	);
}
