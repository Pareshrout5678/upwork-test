export enum FilmQuery {
      ALL_FILMS = `
        {
          allFilms {
            films {
              id
              openingCrawl
              producers
              releaseDate
              title
              episodeID
              edited
              director
              created
            }
          }
        }
      `
    }