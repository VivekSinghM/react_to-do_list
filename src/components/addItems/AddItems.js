import React from 'react'
import { Button, FormControl, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function AddItems() {
  return (
    <form>
            <Grid2 container>
            <Grid2 xs={10}>
              <FormControl fullWidth sx={{ m: 1 }}>
                {/* <OutlinedInput
            id="outlined-adornment-amount"
            label="Amount"
          /> */}
                <TextField
                  maxWidth="sm"
                  label="Standard warning"
                  variant="standard"
                  color="info"
                  focused
                />
              </FormControl>
            </Grid2>
            <Grid2 xs={2} spacing={0} alignItems="center">
              <Button disabled={false}>Add Task</Button>
            </Grid2>
          </Grid2>
          </form>
  )
}

export default AddItems