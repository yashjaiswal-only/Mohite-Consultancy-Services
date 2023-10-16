import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import styled from 'styled-components'
import Home from './Pages/Home';
import Details from './Pages/Details';

const Container=styled.div`
  width:100vw;
  min-height:100vh;
`

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/details",
    element:<Details/>,
  },
]);

const App = () => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
