import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function ToDoItem(props) {
  return (
    <ListItem
      sx={{
        ":hover .cClose": {
          display: "block",
        },
      }}
      secondaryAction={
        <Box className="cClose" display={"none"}>
          <IconButton edge="end" aria-label="delete" onClick={props.remove}>
            <CloseIcon />
          </IconButton>
        </Box>
      }
    >
      <Checkbox
        edge="start"
        checked={props.task.completed}
        onClick={props.update}
        tabIndex={-1}
        disableRipple
        color="error"
        inputProps={{ "aria-labelledby": "test" }}
      />
      <ListItemText sx={props.task.completed?{textDecoration: 'line-through'}:{}}
        primary={props.task.name}
      />
    </ListItem>
  );
}

export default ToDoItem;
