import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from './components/NavBar.tsx'
import GameGrid from './components/GameGrid.tsx'
import GenreList from './components/GenreList.tsx'


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main" `,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
