import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        body: "Roboto, sans-serif",
        heading: "Roboto, sans-serif",
        mono: "Menlo, monospace",
    },
    breakpoints: {
        sm: '800px',
        md: '1200px',
        lg: '1500px',
        xl: '1600px',
        base: '1500px',
    }
})

export default theme;