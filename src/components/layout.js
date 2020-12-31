import React from "react"
import Container from "../components/container"

export default function Layout({children}) {
  return (
    <div>
    <Container>
    <header className="px-3 pb-3 pt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold tracking-tight leading-tight text-gray-800">Wildtiere</h1>
      </div>
    </header>
    </Container>
    <Container>
      <main>
        {children}
      </main>
    </Container>
    </div>
  )
}