import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import "./prayerfloat.css";

const PrayerButton = () => {
  const [isHover, setIsHover] = useState(false);
  //   const [isLargerThan480px] = useMediaQuery("(min-width: 480px)");
  const handleClick = () => {};

  return (
    <Box
      className="prayerposition"
      position="absolute"
      right={["2rem", "3rem"]}
      bottom={["5.5rem", "6.5rem"]}
      overflow="hidden"
      zIndex={999}
    >
      <IconButton
        bg="#3E86E9"
        w="0"
        size="lg"
        isRound
        //   icon={
        //     <HStack
        //       className="content"
        //       transition="all 0.5s"
        //       marginLeft={isHover ? '0%' : '170%'}
        //     >
        //       <Image
        //         src={`${process.env.PUBLIC_URL}/images/PrayerLogo.png`}
        //         boxSize="25px"
        //       />
        //       <Box
        //         as="span"
        //         fontSize="sm"
        //         opacity={isHover ? 1 : 0}
        //         transition="opacity 0.5s"
        //         color="white"
        //       >
        //         Need Prayer?
        //       </Box>
        //     </HStack>
        //   }
        transition="width 0.5s"
        colorScheme="messenger"
        // _hover={{
        //   width: isLargerThan480px ? "175px" : "0",
        //   transition: "width 0.5s",
        // }}
        // onMouseOver={() => isLargerThan480px && setIsHover(true)}
        // onMouseOut={() => isLargerThan480px && setIsHover(false)}
        onClick={handleClick}
        className="prayer-float-btn"
        id="homepage-prayer"
      >
        Prayer?
      </IconButton>
    </Box>
  );
};

export default PrayerButton;
