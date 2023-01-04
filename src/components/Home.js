import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ToDoItems from "./toDoItems/ToDoItems";
import AddItems from "./addItems/AddItems";



function Home() {
  return (
    <Container maxWidth="md">
        <Grid2 container direction="column">
          <Grid2>
            <Typography variant="h1" gutterBottom>
              React ToDo
            </Typography>
          </Grid2>
          <AddItems/>
          <Grid2>
            <ToDoItems/>
          </Grid2>
        </Grid2>
    </Container>
  );
}

export default Home;
