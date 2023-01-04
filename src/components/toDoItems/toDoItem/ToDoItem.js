import { Box, Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

function ToDoItem() {
  return (
    <ListItem sx={{
        ":hover .cClose":
        {
            display: "block"
        },
      }}
        secondaryAction={
          <Box className="cClose" display={'none'}>
            <IconButton edge="end" aria-label="delete">
              <CloseIcon />
            </IconButton>
          </Box>
        }>
            <Checkbox
                edge="start"
                checked={()=>""}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": "test" }}
              />
          <ListItemText
            primary="Single-line item"
            // secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>
  )
}

export default ToDoItem