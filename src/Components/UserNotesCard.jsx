import {
	Badge,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	Link,
	Stack,
	Text,
	useColorModeValue,
	useDisclosure,
} from "@chakra-ui/react";

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import axios from "axios";
let initialState = {
	title: "",
	note: "",
};
export default function UserNotesCard({
	titles,
	notes,
	category,
	key,
	id,
	getNotes,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = useRef(null);
	const finalRef = useRef(null);

	const [formState, setFormState] = useState(initialState);
	const { title, note } = formState;
	const handleChnage = (e) => {
		const val = e.target.value;
		setFormState({ ...formState, [e.target.name]: val });
	};
	const setChange = (e) => {
		e.preventDefault();
		const ID = id;
		axios
			.patch(`https://long-gray-tam.cyclic.app/notes/update/${ID}`, formState, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((res) => {
				console.log(res.data.msg);
        if(res.data.msg=="You are not AUthorized"){
          console.log("OOPS")
        }
        else console.log("Congratualtion")
			})
			.catch(function (error) {
				console.log(error);
			});
		getNotes();
		console.log(formState);
	};
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
					<Stack
						width={"100%"}
						mt={"2rem"}
						direction={"row"}
						padding={2}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Button
							onClick={onOpen}
							flex={1}
							fontSize={"sm"}
							rounded={"full"}
							bg={"blue.400"}
							color={"white"}
							boxShadow={
								"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
							}
							_hover={{
								bg: "blue.500",
							}}
							_focus={{
								bg: "blue.500",
							}}
						>
							Update
						</Button>
						<Modal
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Update Notes</ModalHeader>
								<ModalCloseButton />
								<ModalBody pb={6}>
									<FormControl>
										<FormLabel>Title</FormLabel>
										<Input
											ref={initialRef}
											placeholder="Title"
											name="title"
											value={title}
											onChange={handleChnage}
										/>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Note</FormLabel>
										<Input
											placeholder="Note"
											name="note"
											value={note}
											onChange={handleChnage}
										/>
									</FormControl>
								</ModalBody>

								<ModalFooter>
									<Button colorScheme="blue" mr={3} onClick={setChange}>
										Update
									</Button>
									<Button onClick={onClose}>Cancel</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
						<Button
							flex={1}
							fontSize={"sm"}
							rounded={"full"}
							bg={"blue.400"}
							color={"white"}
							boxShadow={
								"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
							}
							_hover={{
								bg: "blue.500",
							}}
							_focus={{
								bg: "blue.500",
							}}
						>
							Delete
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Center>
	);
}
