'use client';

import { Flex, Heading, Text, Button } from "@/once-ui/components";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <Flex
            as="section"
            direction="column"
            alignItems="center"
            padding="xl"
            gap="m"
        >
            <Text
                marginBottom="s"
                variant="display-strong-xl">
                Oops!
            </Text>
            <Heading
                marginBottom="l"
                variant="display-strong-xs">
                Something went wrong
            </Heading>
            <Text
                onBackground="neutral-weak"
                marginBottom="l">
                An unexpected error occurred. Please try again.
            </Text>
            <Button
                variant="secondary"
                onClick={() => reset()}
            >
                Try again
            </Button>
        </Flex>
    );
}
