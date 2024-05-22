// app/layout.tsx
import { Box } from '@chakra-ui/react'
import { Header } from './_components/header'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='jp'>
      <body>
        <Providers>
          <Header />
          <Box pt="64px"> {/* ヘッダーの高さ分のパディングを追加 */}
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}