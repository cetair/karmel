import { Button, Box, Typography } from "@mui/material";
import photoCard from "../images/aboutUs.jpg";

const ResourcesCard = () => {
  return (
    <>
      <Box
        overflow="hidden"
        sx={{ bgcolor: "#452c54", width: "30%", borderRadius: 8 }}
        shadow="lg"
        p={[4, 10]}
        // onClick={onOpen}
      >
        {/* <AspectRatio mb="5" width="100%" ratio={16 / 9}>
          <Image borderRadius="20" src={eventData.imageUrl} objectFit="cover" />
        </AspectRatio> */}
        <Box height={["200", "280"]} overflow="hidden" position="relative">
          <Typography as="h4" mb="5" size="lg" fontWeight="900" isTruncated>
            {/* {eventData.title} */}
            Perkawinan
          </Typography>
          <Typography fontSize="md" mt="5">
            deskripsi lalallas
          </Typography>
          {/* <Text fontSize={["xs", "md"]} mt="5">
            {parseDescription(eventData.description)}
          </Text> */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            w="100%"
            h="25%"
            background="linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); "
          ></Box>
        </Box>
        <Button
          flex={1}
          //   as={Link}
          size="sm"
          target="_blank"
          //   href={eventData.signUpLink ? eventData.signUpLink : null}
          //   isDisabled={eventData.signUpLink.length <= 0}
          fontSize={["xs", "sm"]}
        >
          Pelajari lebih lanjut
        </Button>
      </Box>
      {/* <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="20">
          <AspectRatio mb="5" width="100%" ratio={16 / 9}>
            <Image
              borderTopLeftRadius="20"
              borderTopRightRadius="20"
              src={eventData.imageUrl}
              objectFit="cover"
            />
          </AspectRatio>
          <ModalCloseButton />
          {eventData.title && (
            <ModalHeader
              ml={[0, 16]}
              mr={[0, 16]}
              fontWeight="900"
              fontSize={["2xl", "3xl"]}
            >
              {eventData.title}
            </ModalHeader>
          )}
          <ModalBody ml={[0, 16]} mr={[0, 16]}>
            <Box>
              {eventData.startDate &&
                eventData.endDate &&
                eventData.recurrence && (
                  <Text fontSize={["sm", "md"]} fontWeight="bold">
                    <Icon mr={2} as={RiCalendarEventFill} />
                    Date:{" "}
                    {eventData.renderDate
                      ? eventData.renderDate.toLocaleString(
                          DateTime.DATE_MED_WITH_WEEKDAY
                        )
                      : getRenderDate(
                          eventData.startDate,
                          eventData.endDate,
                          eventData.recurrence
                        ).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
                  </Text>
                )}
              {eventData.time && (
                <Text fontSize={["sm", "md"]} fontWeight="bold">
                  <Icon mr={2} as={BsClockFill} />
                  Time: {eventData.time}
                </Text>
              )}
              {eventData.location && (
                <Text fontSize={["sm", "md"]} fontWeight="bold">
                  <Icon mr={2} as={ImLocation2} />
                  Location: {eventData.location}
                </Text>
              )}
            </Box>
            <Box fontSize="sm" mt="5">
              {parseDescription(eventData.description)}
            </Box>
          </ModalBody>
          <ModalFooter ml={[0, 16]} mr={[0, 16]}>
            <ButtonGroup
              size="md"
              flexDirection={["column", "row"]}
              spacing={[0, 2]}
              w="100%"
              variant="outline"
              colorScheme="gray"
            >
              {eventData.mapLink.length > 0 && (
                <Button
                  flex={[false, 1]}
                  as={Link}
                  target="_blank"
                  href={eventData.mapLink ? eventData.mapLink : null}
                >
                  Directions
                </Button>
              )}
              {eventData.signUpLink.length > 0 && (
                <Button
                  flex={[false, 1]}
                  mt={[2, 0]}
                  as={Link}
                  target="_blank"
                  href={eventData.signUpLink ? eventData.signUpLink : null}
                >
                  Sign up
                </Button>
              )}

              {generateGoogleCalendarLink(eventData) && (
                <Button
                  flex={[false, 1]}
                  mt={[2, 0]}
                  as={Link}
                  target="_blank"
                  href={generateGoogleCalendarLink(eventData)}
                >
                  Add to Calendar
                </Button>
              )}
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default ResourcesCard;
