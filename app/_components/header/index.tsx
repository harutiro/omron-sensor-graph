'use strict';

// components/Header.js
import { Box, Flex, Link, Button, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

export const Header = () => {
    return (
        <Box 
            as="header" 
            bg="teal.500" 
            px={4} 
            position="fixed" 
            top={0} 
            left={0} 
            right={0} 
            zIndex={1} // ヘッダーを他のコンテンツの上に表示するためにzIndexを設定>
            height="64px" // ヘッダーの高さを固定
        >
        <Flex h={16} alignItems="center" justifyContent="space-between">
            <Box>
                <Link href="/" color="white" fontSize="xl" fontWeight="bold">
                梶研究室 環境センサー閲覧システム
                </Link>
            </Box>

            {/* <Flex alignItems="center">
            <NextLink href="/about" passHref>
                <Link color="white" px={2}>
                About
                </Link>
            </NextLink>
            <NextLink href="/contact" passHref>
                <Link color="white" px={2}>
                Contact
                </Link>
            </NextLink>
            </Flex> */}
        </Flex>
        </Box>
    );
};
