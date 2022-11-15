import { BookCard } from "components";
import { Grid } from "@mui/material";

const Books = () => {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
      </Grid>
    </main>
  );
};

export default Books;
