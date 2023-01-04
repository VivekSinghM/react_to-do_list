import React, { useContext, useState } from 'react'
import { Button, FormControl, TextField} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ListContext } from '../../context/ListProvider';

function AddItems() {
  const { addTask } = useContext(ListContext);
  const [taskInput,setTaskInput] = useState("")
  const handleInput=(e)=>{
    setTaskInput(e.target.value)
  }
  const handleAdd=(e)=>{
    e.preventDefault()
    const task={completed:false,name:taskInput}
    addTask(task);
    setTaskInput("");
  }

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
                  label="What needs to be done?"
                  variant="standard"
                  color="info"
                  value={taskInput}
                  onChange={handleInput}
                  focused
                />
              </FormControl>
            </Grid2>
            <Grid2 xs={2} spacing={0} alignItems="center" sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
              <Button disabled={taskInput===""} onClick={handleAdd}>Add Task</Button>
            </Grid2>
          </Grid2>
          </form>
  )
}

export default AddItems