// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    initialColorMode:'light',
    useSystemColorMode:true
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`

export default theme;